const {logError, redis, baseConfig} = require('./core'),
    Sequelize = require('sequelize'),
    Op = Sequelize.Op,
    model = require('../models/i18n');

class Country {

    static getById = async(id) => {
        try {
            const u = `country:id=${id}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.Country.findOne({
                where: {id}
            });
            if(data) data = data.get({plain: true});
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'N3LTMW9A');
        }
    };

    static processFilter(filter) {
        let where = {};
        for(let x in filter) switch(x) {
            case 'query':
                where = {
                    ...where,
                    [Op.and]: filter.query.trim().split(' ').map(query => ({
                        [Op.or]: [
                            {
                                name: {
                                    [Op.like]: `%${query}%`
                                }
                            },
                            {
                                id: {
                                    [Op.like]: `%${query}%`
                                }
                            }
                        ]
                    }))
                };
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
            const u = `countries:count:filter=${JSON.stringify(filter)}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const data = await model.Country.count({
                where: this.processFilter(filter)
            });
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, '2CX1CF61');
        }
    };

    static list = async(filter, options) => {
        try {
            if(!filter) filter = {};
            if(!options) options = {};
            const u = `countries:filter=${JSON.stringify(filter)}:options=${JSON.stringify(options)}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const where = this.processFilter(filter),
                order = options.ord ? [[options.ord, options.asc ? 'ASC' : 'DESC']] : [[`name`, 'ASC']],
                limit = options.num || baseConfig.defaultNum,
                offset = (options.pag || 0) * limit;
            let data = await model.Country.findAll({
                where, limit, offset, order
            });
            data = data.map(x => x.get({plain: true}));
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'XENNWME2');
        }
    };

}

class Region {

    static getById = async(id) => {
        try {
            const u = `region:id=${id}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.Region.findOne({
                where: {id}
            });
            if(data) data = data.get({plain: true});
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'NEMQQSPU');
        }
    };

    static processFilter(filter) {
        let where = {};
        for(let x in filter) switch(x) {
            case 'query':
                where = {
                    ...where,
                    [Op.and]: filter.query.trim().split(' ').map(query => ({
                        [Op.or]: [
                            {
                                name: {
                                    [Op.like]: `%${query}%`
                                }
                            },
                            {
                                id: {
                                    [Op.like]: `%${query}%`
                                }
                            },
                            {
                                '$Country.name$': {
                                    [Op.like]: `%${query}%`
                                }
                            },
                            {
                                '$Country.id$': {
                                    [Op.like]: `%${query}%`
                                }
                            }
                        ]
                    }))
                };
                break;
            case 'country':
                where.countryId = {[Op.in]: filter.country};
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
            const u = `regions:count:filter=${JSON.stringify(filter)}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const data = await model.Region.count({
                where: this.processFilter(filter)
            });
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'V4CAVJQ2');
        }
    };

    static list = async(filter, options) => {
        try {
            if(!filter) filter = {};
            if(!options) options = {};
            const u = `regions:filter=${JSON.stringify(filter)}:options=${JSON.stringify(options)}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const where = this.processFilter(filter),
                order = options.ord ? [[options.ord, options.asc ? 'ASC' : 'DESC']] : [['name', 'ASC']],
                limit = options.num || baseConfig.defaultNum,
                offset = (options.pag || 0) * limit;
            let data = await model.Region.findAll({
                where, limit, offset, order
            });
            data = data.map(x => x.get({plain: true}));
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'FQ47IP4S');
        }
    };

}

module.exports = {
    Country, Region
};
