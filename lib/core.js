const Redis = require('ioredis'),
    btoa = require('btoa'),
    http = require('http'),
    https = require('https'),
    querystring = require('querystring'),
    {RedisPubSub} = require('graphql-redis-subscriptions'),
    Sequelize = require('sequelize'),
    moment = require('moment-timezone'),
    cryptoRandomString = require('crypto-random-string');

const env = process.env.NODE_ENV || "development",
    redisConfig = require('../config/redis.json')[env],
    dbConfig = require('../config/db.json')[env],
    googleConfig = require('../config/google.json')[env],
    corsConfig = require('../config/cors.json'),
    baseConfig = require('../config/base.json')[env];

process.env.TZ = baseConfig.timezone || 'UTC';

console.log('ENV', env);

const redis = new Redis(redisConfig.url),
    subscriber = new Redis(redisConfig.url),
    publisher = new Redis(redisConfig.url);

const red = () => redis;

const destroyCache = async(pattern) => {
    const keys = await redis.keys(pattern),
        pipeline = redis.pipeline();
    keys.forEach(key => pipeline.del(key));
    await pipeline.exec();
};

const pubsub = new RedisPubSub({
    publisher, subscriber
});
const db = new Sequelize(dbConfig);

const recaptcha = (response, remoteAddress) => {
    return new Promise((resolve, reject) => {
        const data = querystring.stringify({
            secret: googleConfig.recaptcha.secretKey,
            response, remoteip: remoteAddress
        });
        const req = https.request({
            hostname: 'www.google.com',
            port: 443,
            path: `/recaptcha/api/siteverify`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': data.length
            }
        }, (res) => {
            let body = "";
            res.on('data', data => {
                body +=data
            });
            res.on('end', () => {
                body = JSON.parse(body);
                let {error} = body;
                if(error !== undefined) reject(error);
                else resolve(body);
            });
            res.on('error', error => {
                reject(error)
            });
        });
        req.write(data);
        req.end();
    });
};

const parseCookieHeader = (queryString) => {
    let query = {};
    let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('; ');
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
};

const hexToBase64 = (str) => {
    return btoa(String.fromCharCode.apply(null,
        str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
    );
};

const logError = (error, errorId) => {
    const tracebackId = cryptoRandomString({length: 12, type: 'hex'}).toUpperCase();
    console.log(`Error ${errorId} - ${tracebackId}`);
    console.error(error);
    throw new Error(`${errorId}/${tracebackId}${error.message ? ` - ${error.message}` : ''}`);
};

const getTime = () => moment().tz('UTC');

const ip_api = (remoteAddress) =>
    new Promise((resolve, reject) => {
        http.get({
            hostname: 'ip-api.com',
            port: 80,
            path: `/json/${remoteAddress}`,
            agent: false
        }, (res) => {
            let body = "";
            res.on('data', data => {
                body += data
            });
            res.on('end', () => {
                body = JSON.parse(body);
                let {error} = body;
                if (error !== undefined) reject(error);
                else resolve(body);
            });
            res.on('error', error => {
                reject(error)
            });
        });
    });

module.exports = {
    db, red, redis, publisher, subscriber, pubsub, parseURIQuery: parseCookieHeader, hexToBase64, logError,
    destroyCache, env, corsConfig, getTime, baseConfig, redisConfig, dbConfig, ip_api, recaptcha
};
