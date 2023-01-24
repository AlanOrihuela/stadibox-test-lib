const {logError, redis, baseConfig} = require('./core'),
    Sequelize = require('sequelize'),
    Op = Sequelize.Op,
    model = require('../models/timezone');

class Timezone {

    static getById = async(id) => {
        try {
            const u = `timezone:id=${id}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.Timezone.findOne({
                where: {id}
            });
            if(data) data = data.get({ plain: true });
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, '702M7OEJ');
        }
    };

    static getByName = async(name) => {
        try {
            const u = `timezone:name=${name}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.Timezone.findOne({
                where: {name}
            });
            if(data) data = data.get({ plain: true });
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'Y8U1B3SH');
        }
    };

    static processFilter(filter) {
        const where = {};
        for(let x in filter) switch(x) {
            case 'query':
                let query = filter.query.trim().split(' ').map(query => ({[Op.like]: `%${query}%`}));
                where.name = {[Op.or]: query};
                break;
            case 'id':
                where.id = {[Op.in]: filter.id};
                break;
        }
        return where;
    }

    static count = async(filter) => {
        try {
            if(!filter) filter = {};
            const u = `timezones:count:filter=${JSON.stringify(filter)}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const data = await model.Timezone.count({
                where: this.processFilter(filter)
            });
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'XCX5MA7L');
        }
    };

    static list = async(filter, options) => {
        try {
            if(!filter) filter = {};
            if(!options) options = {};
            const u = `timezones:filter=${JSON.stringify(filter)}:options=${JSON.stringify(options)}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const where = this.processFilter(filter),
                order = options.ord ? [[options.ord, options.asc ? 'ASC' : 'DESC']] : [['name', 'ASC']],
                limit = options.num || baseConfig.defaultNum,
                offset = (options.pag || 0) * limit;
            let data = await model.Timezone.findAll({
                where, limit, offset, order
            });
            data = data.map(x => x.get({plain: true}));
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'NMHL191E');
        }
    };

}

module.exports = {
    Timezone
};