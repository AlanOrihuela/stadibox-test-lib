const Sequelize = require('sequelize'),
    Op = Sequelize.Op,
    useragent = require('express-useragent'),
    sha256 = require('crypto-js/sha256'),
    isIp = require('is-ip'),
    hex = require('crypto-js/enc-hex'),
    cryptoRandomString = require('crypto-random-string'),
    {logError, destroyCache, getTime, baseConfig, ip_api, redis, pubsub, recaptcha} = require('./core'),
    user = require('./user'),
    timezone = require('./timezone'),
    {UserPassword} = require("../models/user"),
    model = require('../models/session');


class ClientOS {

    static getByName = async(name) => {
        try {
            const u = `clientOS:name=${name}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.ClientOS.findOne({
                where: {name}
            });
            if(data) data = data.get({ plain: true });
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'ZDRFD7BR');
        }
    };

    static singleton = async(name) => {
        try {
            let data = await this.getByName(name);
            if(data) return data;
            await model.ClientOS.create({name});
            await redis.del(`clientOS:name=${name}`);
            data = await this.getByName(name);
            return data;
        } catch(error) {
            logError(error, 'ECOWLPXZ');
        }
    };

    static count = async() => {
        try {
            const u = `clientOS:count`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const data = await model.ClientOS.count();
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'EO4T7X6U');
        }
    };

    static list = async() => {
        try {
            const u = `clientOS`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const order = [['id', 'ASC']];
            let data = await model.ClientOS.findAll({order});
            data = data.map(x => x.get({plain: true}));
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, '6NK3CA4G');
        }
    };

}


class ClientBrowser {

    static getByName = async(name) => {
        try {
            const u = `clientBrowser:name=${name}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.ClientBrowser.findOne({
                where: {name}
            });
            if(data) data = data.get({ plain: true });
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'ZUZEY2GD');
        }
    };

    static singleton = async(name) => {
        try {
            let data = await this.getByName(name);
            if(data) return data;
            await model.ClientBrowser.create({name});
            await redis.del(`clientBrowser:name=${name}`);
            data = await this.getByName(name);
            return data;
        } catch(error) {
            logError(error, 'N1CAQUU7');
        }
    };

    static count = async() => {
        try {
            const u = `clientBrowser:count`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const data = await model.ClientBrowser.count();
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, '885IYJI7');
        }
    };

    static list = async() => {
        try {
            const u = `clientBrowser`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const order = [['id', 'ASC']];
            let data = await model.ClientBrowser.findAll({order});
            data = data.map(x => x.get({plain: true}));
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, '8BLYI4D8');
        }
    };

}


class ClientPlatform {

    static getByName = async(name) => {
        try {
            const u = `clientPlatform:name=${name}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.ClientPlatform.findOne({
                where: {name}
            });
            if(data) data = data.get({ plain: true });
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'IWLSXK5R');
        }
    };

    static singleton = async(name) => {
        try {
            let data = await this.getByName(name);
            if(data) return data;
            await model.ClientPlatform.create({name});
            await redis.del(`clientPlatform:name=${name}`);
            data = await this.getByName(name);
            return data;
        } catch(error) {
            logError(error, 'ZRXX9IBV');
        }
    };

    static count = async() => {
        try {
            const u = `clientPlatform:count`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const data = await model.ClientPlatform.count();
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'ABCUME6T');
        }
    };

    static list = async() => {
        try {
            const u = `clientPlatform`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const order = [['id', 'ASC']];
            let data = await model.ClientPlatform.findAll({order});
            data = data.map(x => x.get({plain: true}));
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'FB6P6S1L');
        }
    };

}


class GeoIP {

    static GEOIP_EXPIRE_TIMEOUT = 3600 * 24 * 7;

    static getInfo = async(remoteAddress) => {
        try {
            const u = `ip_api:remoteAddress=${remoteAddress}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let response = await ip_api(remoteAddress);
            if(response) redis.set(u, this.GEOIP_EXPIRE_TIMEOUT, JSON.stringify(response));
            return response ? response : {ip: remoteAddress};
        } catch(error) {
            logError(error, '59CC8089');
        }
    };

}


const DEV_IP = '200.56.46.144';


class AgentSession {

    static expressGateway = async(req, res, next) => {
        if(req.headers['authorization']) {
            const agentId = req.headers['authorization'],
                remoteAddress = req.ips.length ? req.ips[0] : req.ip;
            await this.singleton(req.headers['authorization'], remoteAddress, req.useragent || {})
            return {
                agentId, remoteAddress
            };
        }
        if(req.headers['x-ssr-agent'] && req.headers['x-ssr-real-ip'] && req.headers['x-ssr-user-agent']) {
            const agentId = req.headers['x-ssr-agent'],
                remoteAddress = req.headers['x-ssr-real-ip'];
            if(!await RemoteAddress.isWhiteListed(req.ips.length ? req.ips[0] : req.ip)) throw new Error(`Address ${remoteAddress} can't consume services using x-ssr-agent header`);
            await this.singleton(agentId, remoteAddress, (new useragent.UserAgent().parse(req.headers['x-ssr-user-agent'])) || {});
            return {agentId, remoteAddress};
        } else {
            const agentId = req.cookies.agent ? req.cookies.agent : cryptoRandomString({length: 32, type: 'url-safe'}),
                remoteAddress = req.ips.length ? req.ips[0] : req.ip;
            await this.singleton(agentId, remoteAddress, req.useragent || {});
            if(!req.cookies.agent) res.cookie('agent', agentId, {domain: `.${baseConfig.rootDomain}`, path: '/', secure: true, expires: 0});
            return {agentId, remoteAddress};
        }
    };

    static singleton = async(agentId, remoteAddress, agentData) => {
        try {
            if(!agentId) agentId = this.generateId();
            if(remoteAddress === '127.0.0.1' && (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')) remoteAddress = DEV_IP;
            let agent = await this.getById(agentId);
            if(!agent) agent = await this.create(agentData, remoteAddress, agentId);
            const remoteSession = await RemoteSession.getByAgentId(remoteAddress, agentId);
            if(!remoteSession) await RemoteSession.create(agent.id, remoteAddress);
            return agent;
        } catch(error) {
            logError(error, 'ZDGEMNCE');
        }
    };

    static setTimezone = async(id, timezoneId) => {
        try {
            const _timezone = await timezone.Timezone.getById(timezoneId);
            if(!_timezone) throw new Error(`Timezone ${timezoneId} no existe`);
            const agent = await this.getById(id);
            if(!agent) throw new Error(`AgentSession ${id} no existe`);
            if(agent.timezone.id === timezoneId) return false;
            await model.AgentSession.update({timezoneId}, {where: {id}});
            await destroyCache(`agent:id=${id}*`);
            await pubsub.publish(`changedTimezone:agentId=${id}`, {
                changedTimezone: _timezone
            });
            return true;
        } catch(error) {
            logError(error, 'E2SAAX2U');
        }
    };

    static generateId = () => {
        return cryptoRandomString({type: 'url-safe', length: 36});
    };

    static create = async(agentData, remoteAddress, agentId = null) => {
        try {
            const clientOS = await ClientOS.singleton(agentData.os ? agentData.os : 'Unknown OS'),
                clientBrowser = await ClientBrowser.singleton(agentData.browser ? agentData.browser : 'Unknown Browser'),
                clientPlatform = await ClientPlatform.singleton(agentData.platform ? agentData.platform : 'Unknown Platform'),
                geoIpData2 = await GeoIP.getInfo(remoteAddress),
                timeZone = await timezone.Timezone.getByName(geoIpData2.timezone);

            if(!agentId) agentId = this.generateId();

            await model.AgentSession.create({
                id: agentId,
                clientBrowserVersion: agentData.version || null,
                isBot: agentData.isBot || false,
                isMobile: agentData.isMobile || false,
                isTablet: agentData.isTablet || false,
                isDesktop: agentData.isDesktop || false,
                isSmartTv: agentData.isSmartTv || false,
                clientOsId: clientOS.id,
                clientBrowserId: clientBrowser.id,
                clientPlatformId: clientPlatform.id,
                timezoneId: timeZone.id,
            });
            await destroyCache(`agent:id=${agentId}*`);
            return await this.getById(agentId);
        } catch(error) {
            logError(error, 'LST4URWP');
        }
    };

    static getById = async(id) => {
        try {
            if(!id) return null;
            const u = `agent:id=${id}`;
            let cache = await redis.get(u);
            if(cache) {
                cache = JSON.parse(cache);
                return cache;
            }
            let data = await model.AgentSession.findOne({
                where: {id}
            });
            if(data) data = data.get({plain: true});
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'AQMIVZY0');
        }
    };

    static update = async(input) => {
        try {
            await model.AgentSession.update(input, {where: {id: input.id}});
            await destroyCache(`agent:id=${input.id}*`);
            return await this.getById(input.id);
        } catch(error) {
            logError(error, 'WU67YHAZ');
        }
    };

    static refreshConnectedStatus = async(userId) => {
        try {
            const _user = await user.User.getById(userId);
            if(!_user) return;
            const connectedSessions = await model.Session.count({
                where: {userId, connected: {[Op.eq]: true}}
            });
            const connected = connectedSessions > 0;
            let _update = {
                id: userId,
                connected
            };
            if(connected && !_user.connected) _update.connectedAt = new Date();
            else if(!connected && _user.connected) _update.disconnectedAt = new Date();
            await user.User.update(_update)
        } catch(error) {
            logError(error, 'XXXXXXXX');
        }
    };

    static setConnected = async(agentId, connected) => {
        try {
            const _session = await Session.getByAgentId(agentId);
            if(!_session) return;
            if(connected === _session.connected) return;
            await Session.update({
                id: _session.id,
                connected
            });
            await this.refreshConnectedStatus(_session.user.id);
        } catch(error) {
            logError(error, 'XXXXXXXX');
        }
    }

}


class RemoteAddress {

    static getById = async(id) => {
        try {
            const u = `remoteAddress:id=${id}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.RemoteAddress.findOne({
                where: {id}
            });
            if(data) data = data.get({plain: true});
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, '5H11WKT2');
        }
    };

    static create = async(remoteAddressId) => {
        try {
            if(await this.getById(remoteAddressId)) throw new Error(`El objeto ${remoteAddressId} ya existe`);
            const geoIpData2 = await GeoIP.getInfo(remoteAddressId),
                timezoneData = geoIpData2.timezone ? await timezone.Timezone.getByName(geoIpData2.timezone) : null;
            await model.RemoteAddress.create({
                id: remoteAddressId,
                type: isIp.v6(remoteAddressId) ? 'ipv6' : 'ipv4',
                regionId: (geoIpData2.countryCode && geoIpData2.region) ? `${geoIpData2.countryCode}-${geoIpData2.region}` : null,
                countryId: geoIpData2.countryCode,
                city: geoIpData2.city ? geoIpData2.city : null,
                zipCode: geoIpData2.zip ? geoIpData2.zip : null,
                timezoneId: timezoneData ? timezoneData.id : null
            });
            await destroyCache(`remoteAddress:id=${remoteAddressId}*`);
            return await this.getById(remoteAddressId);
        } catch(error) {
            logError(error, 'NJHMDZAX');
        }
    };

    static singleton = async(id) => {
        try {
            const remoteAddress = await this.getById(id);
            if(!remoteAddress) return this.create(id);
        } catch(error) {
            logError(error, 'P7NM1TOK');
        }
    };

    static whiteList = async(id) => {
        try {
            await this.singleton(id);
            await model.RemoteAddress.update({
                whiteList: true,
                greyList: false,
                blackList: false
            }, {where: {id}});
            await destroyCache(`remoteAddress:id=${id}*`);
            return true;
        } catch(error) {
            logError(error, 'LCARNDLT');
        }
    };

    static isWhiteListed = async(id) => {
        try {
            const remoteAddress = await this.getById(id);
            return remoteAddress ? remoteAddress.whiteList : false;
        } catch(error) {
            logError(error, 'JTX65CWV');
        }
    };

    static blackList = async(id) => {
        try {
            await this.singleton(id);
            await model.RemoteAddress.update({
                whiteList: false,
                greyList: false,
                blackList: true
            }, {where: {id}});
            await destroyCache(`remoteAddress:id=${id}*`);
            return true;
        } catch(error) {
            logError(error, 'XXAI2HVI');
        }
    };

    static isBlackListed = async(id) => {
        try {
            const remoteAddress = await this.getById(id);
            return remoteAddress ? remoteAddress.blackList : false;
        } catch(error) {
            logError(error, 'SZWFTOGK');
        }
    };

    static greyList = async(id) => {
        try {
            await this.singleton(id);
            await model.RemoteAddress.update({
                whiteList: false,
                greyList: false,
                blackList: false
            }, {where: {id}});
            await destroyCache(`remoteAddress:id=${id}*`);
            return true;
        } catch(error) {
            logError(error, 'ML91P92K');
        }
    };

    static isGreyListed = async(id) => {
        try {
            const remoteAddress = await this.getById(id);
            return remoteAddress ? remoteAddress.greyList : false;
        } catch(error) {
            logError(error, '1DZOLJE5');
        }
    }

}


class RemoteSession {

    static create = async(agentId, remoteAddressId) => {
        try {
            const agent = await AgentSession.getById(agentId);
            if(!agent) throw new Error(`AgentSession ${agentId} no existe`);
            await RemoteAddress.singleton(remoteAddressId);
            const id = cryptoRandomString({type: 'url-safe', length: 10});
            await model.RemoteSession.create({
                id,
                remoteAddressId,
                isDst: false,
                agentId
            });
            await destroyCache(`remoteSession:id=${id}*`);
            await destroyCache(`remoteSession:remoteAddress=${remoteAddressId}:agentId=${agentId}*`);
            const remoteSession = await this.getById(id);
            await pubsub.publish(`changedRemoteSession:agentId=${agentId}`, {
                changedRemoteSession: remoteSession
            });
            return remoteSession;
        } catch(error) {
            logError(error, 'DREUMBAK');
        }
    };

    static getById = async(id) => {
        try {
            const u = `remoteSession:id=${id}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.RemoteSession.findOne({
                where: {id}
            });
            if(data) data = data.get({plain: true});
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, '6LMM3V1P');
        }
    };

    static getByAgentId = async(remoteAddressId, agentId) => {
        try {
            if(remoteAddressId === '127.0.0.1' && process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') remoteAddressId = DEV_IP;
            const _date = getTime().startOf('day').format(),
                u = `remoteSession:remoteAddress=${remoteAddressId}:agentId=${agentId}:date=${_date}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.RemoteSession.findOne({
                where: {remoteAddressId, agentId, createdAt: {[Op.gte]: _date}}
            });
            if(data) data = data.get({plain: true});
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'C8NO44EE');
        }
    };

    static update = async(input) => {
        try {
            const prev = await this.getById(input.id);
            if(!prev) throw new Error(`RemoteSession ${input.id} no existe`);
            await model.RemoteSession.update(input, {where: {id: input.id}});
            const conf = await this.getById(input.id);
            await destroyCache(`agent:id=${input.id}*`);
            await destroyCache(`agent:remoteAddress=${prev.remoteAddress.id}:agentId=${prev.agentId}*`);
            await destroyCache(`agent:remoteAddress=${conf.remoteAddress.id}:agentId=${conf.agentId}*`);
            return conf;
        } catch(error) {
            logError(error, 'SQT8ZUIB');
        }
    };

}


class Session {

    static NONCE_EXPIRE_TIMEOUT = 3600;

    static requireSession = async(agentId) => {
        const _session = await this.getByAgentId(agentId);
        if(!_session) throw new Error(`Inicie sesión para acceder a éste recurso`)
        if(_session.loggedOutAt) throw new Error(`Sesión expirada`);
        return _session;
    };

    static login = async(email, password, nonceId, agentId, remoteAddress) => {
        try {
            const userData = await user.User.getByEmail(email);
            if(!userData) return null;
            const validPassword = await this.validatePassword(userData.id, password, agentId, nonceId);
            if(!validPassword) return null;
            const id = cryptoRandomString({type: 'url-safe', length: 10});
            const remoteSession = await RemoteSession.getByAgentId(remoteAddress, agentId);
            await model.Session.create({
                id, userId: userData.id,
                remoteSessionId: remoteSession.id, agentId: agentId
            });
            await destroyCache(`session:id=${id}*`);
            await destroyCache(`session:agentId=${agentId}*`);
            let _session = await this.getById(id);
            _session = {
                ..._session, connected: true,
                user: await user.User.getById(_session.userId)
            };

            await pubsub.publish(`loggedIn:agentId=${agentId}`, {
                loggedIn: _session
            });
            await AgentSession.refreshConnectedStatus(_session.user.id);
            return _session;
        } catch(error) {
            logError(error, '4S7X16C5');
        }
    };

    static signUp = async (input , agentId, remoteAddress = null) => {
        try {
            const {email, password, gre} = input;
            if(!input.id) input.id = cryptoRandomString({type: 'url-safe', length: 10});
            const prev = await user.User.getByEmail(email);
            if (prev) return {status: 1};
            if (process.env.NODE_ENV === 'development' && gre === '5t_upZFXdKdU86eU-cBq9jw4_hkwkTx2Bmu86r_dbuJofFOQqbx9.IChGlSE0iyV') console.warn('BackdoorUse');
            else {
                const greResponse = await recaptcha(gre, remoteAddress);
                if (!greResponse.success) return {status: 2};
            }
            const agent = await AgentSession.getById(agentId);
            if (!agent) throw new Error(`AgentSession no existe`);
            const conf = await user.User.create(input);
            await this.setPassword(input.id, password);
            const remoteSession = await RemoteSession.getByAgentId(remoteAddress, agentId),
                sessionId = cryptoRandomString({type: 'url-safe', length: 10});
            await model.Session.create({
                id: sessionId, userId: conf.id,
                remoteSessionId: remoteSession.id, agentId: agentId
            });
            let _session = await this.getById(sessionId);
            await destroyCache(`session:id=${sessionId}*`);
            await destroyCache(`session:agentId=${agentId}*`);
            await pubsub.publish(`loggedIn:agentId=${agentId}`, {
                loggedIn: _session
            });
            return {status: 3, session: _session};
        } catch (error) {
            logError(error, '1ZP7KQ7D');
        }
    };

    static closeUserSessions = async(userId, skipSessionIds = []) => {
        try {
            let data = await model.Session.findAll({
                where: {userId, loggedOutAt: {[Op.eq]: null}}
            });
            data = data.map(x => x.get({plain: true}));
            for(let x in data) if(!skipSessionIds.includes(data[x].id)) await this.logout(data[x].agentId, true);
        } catch(error) {
            logError(error, '1DZSYON8');
        }
    };

    static logout = async (agentId, forced = false) => {
        try {
            let _session = await this.getByAgentId(agentId);
            if(!_session) return false;
            if(_session.loggedOutAt) return false;
            _session.loggedOutAt = new Date();
            _session.connected = false;
            await this.update(_session);
            await destroyCache(`session:id=${_session.id}*`);
            await destroyCache(`session:agentId=${agentId}*`);
            await pubsub.publish(`loggedOut:agentId=${agentId}`, {
                loggedOut: forced
            });
            await AgentSession.refreshConnectedStatus(_session.user.id);
            return true;
        } catch(error) {
            logError(error, 'WFRA7T7P');
        }
    };

    static getById = async (id) => {
        try {
            const u = `session:id=${id}`,
                cache = await redis.get(u);
            if(cache) {
                const _cache = JSON.parse(cache);
                if(!_cache) return;
                return {
                    ..._cache,
                    user: await user.User.getById(_cache.user.id)
                };
            }
            let data = await model.Session.findOne({
                where: {id}
            });
            if(data) data = data.get({plain: true});
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'O0CC7HJ2');
        }
    };

    static getByAgentId = async (agentId) => {
        try {
            const u = `session:agentId=${agentId}`,
                cache = await redis.get(u);
            if(cache) {
                const _cache = JSON.parse(cache);
                if(!_cache) return;
                return {
                    ..._cache,
                    user: await user.User.getById(_cache.user.id)
                };
            }
            let data = await model.Session.findOne({
                where: {agentId: agentId, loggedOutAt: {[Op.eq]: null}}, order: [['createdAt', 'DESC']]
            });
            if(data) data = data.get({plain: true});
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'Z6MQ20ZX');
        }
    };

    static update = async(input) => {
        try {
            const prev = this.getById(input.id);
            if(!prev) throw new Error(`Session ${input.id} no existe`);
            await model.Session.update(input, {where: {id: input.id}});
            await destroyCache(`session:id=${input.id}*`);
            await destroyCache(`session:agentId=${prev.agentId}*`);
            return await this.getById(input.id);
        } catch(error) {
            logError(error, '0EX26S4L');
        }
    };

    static verify = async (id) => {
        try {
            const data = await this.getById(id);
            if(!data) return false;
            return !Boolean(data.loggedOutAt);
        } catch(error) {
            logError(error, 'ZZYH47D9');
        }
    };

    static generateNonce = async () => {
        try {
            while(true) {
                const id = cryptoRandomString({length: 12, type: 'url-safe'}),
                    u = `nonce:id=${id}`,
                    data = await redis.get(u);
                if(!data) {
                    const nonceData = cryptoRandomString({length: 32, type: 'url-safe'});
                    await redis.setex(u, this.NONCE_EXPIRE_TIMEOUT, nonceData);
                    return {id, data: nonceData}
                }
            }
        } catch(error) {
            logError(error, 'AGDE6PAR');
        }
    };

    static getNonce = async (id) => {
        try {
            return await redis.get(`nonce:id=${id}`);
        } catch(error) {
            logError(error, 'LHUOD2CV');
        }
    };

    static setPassword = async (userId, passwordData) => {
        try {
            if (!await user.User.getById(userId)) throw new Error(`User ${userId} no existe`);
            if (passwordData.toString().length !== 64) throw new Error(`Password Inválido`);
            await UserPassword.create({userId, passwordData});
        } catch (error) {
            logError(error, 'AWXKXEI1');
        }
    };

    static validatePassword = async(userId, password, agent = null, nonceId = null) => {
        try {
            const lastPasswordData = await UserPassword.findOne({
                where: {userId}, order: [['createdAt', 'DESC']]
            });
            if(!lastPasswordData) throw new Error(`User ${userId} no tiene password definido`);
            const passwordData = lastPasswordData.get({ plain: true }).passwordData;
            if(agent && nonceId) {
                const nonceData = await this.getNonce(nonceId);
                if(!nonceData) return false;
                await destroyCache(`nonce:id=${nonceId}`);
                const hashedPwd = hex.stringify(sha256(`${agent}${passwordData}${nonceData}`));
                return password === hashedPwd;
            }
            return password === passwordData;
        } catch(error) {
            logError(error, 'VXZ732TQ');
        }
    };

    static getUserByAgentId = async(agentId) => {
        try {
            const _session = await this.getByAgentId(agentId);
            if(!_session) return null;
            return await this.getById(_session.user.id);
        } catch(error) {
            logError(error, 'CWZ7514Y');
        }
    };
}

module.exports = {
    GeoIP,
    ClientOS,
    ClientBrowser,
    ClientPlatform,
    AgentSession,
    RemoteAddress,
    RemoteSession,
    Session
};
