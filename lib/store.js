const Sequelize = require("sequelize"),
    Op = Sequelize.Op,
    cryptoRandomString = require('crypto-random-string'),
    {logError, redis, pubsub, destroyCache, baseConfig} = require('./core'),
    model = require('../models/store');

class Purchase {

    static getById = async (id) => {
        try {
            const u = `purchase:id=${id}`,
                cache = await redis.get(u);
            if (cache) return JSON.parse(cache)
            let data = await model.Purchase.findOne({
                where: {id}
            });
            if (data) data = data.get({plain: true})
            await redis.set(u, JSON.stringify(data));
            return data
        } catch (error) {
            logError(error, 'M1UMTHYP');
        }
    }

    static processFilter(filter) {
        let where = {};
        for (let x in filter) switch (x) {
            case 'query':
                where = {
                    ...where,
                    [Op.and]: filter.query.trim().split(' ').map(query => ({
                        [Op.or]: [
                            {
                                card: {
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
                if(filter.id) if(filter.id.length > 0) where.id = {[Op.in]: filter.id};
                break;
            case 'userId':
                if(filter.userId) if(filter.userId.length > 0) where.userId = {[Op.in]: filter.userId};
                break;
        }
        return where;
    }

    static count = async (filter) => {
        try {
            if (!filter) filter = {};
            const u = `purchases:count:filter=${JSON.stringify(filter)}`,
                cache = await redis.get(u);
            if (cache) return JSON.parse(cache);
            let data = await model.Purchase.count({
                where: this.processFilter(filter)
            });
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch (error) {
            logError(error, 'K8KRDRPU');
        }
    };

    static list = async (filter, options) => {
        try {
            if (!filter) filter = {};
            if (!options) options = {};
            const u = `purchases:filter=${JSON.stringify(filter)}:options=${JSON.stringify(options)}`,
                cache = await redis.get(u);
            if (cache) return JSON.parse(cache);
            const where = this.processFilter(filter),
                order = options.ord ? [[options.ord, options.asc ? 'ASC' : 'DESC']] : [['updatedAt', 'DESC']],
                limit = options.num || baseConfig.defaultNum,
                offset = (options.pag || 0) * limit;
            let data = await model.Purchase.findAll({
                where, limit, offset, order
            });
            if (data) data = data.map(x => x.get({plain: true}));
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch (error) {
            logError(error, 'C4YHM5ER');
        }
    };

    static create = async(input) => {
        /**
         * TODO: completar la función con lo necesario para guardar la compra
         */
    };

    static update = async(input) => {
        try {
            if(!input.id) throw new Error(`No se encontró el ID en la compra`);
            const prev = await this.getById(input.id);
            if(!prev) throw new Error(`La compra ${input.id} no existe`);
            await model.Purchase.update(input, {where: {id: input.id}});
            await destroyCache(`purchase:id=${input.id}*`);
            await destroyCache(`purchases*`);
            const data = await this.getById(input.id);
            return data;
        } catch(error) {
            logError(error, 'C1TDM44T');
        }
    };

    static delete = async(id) => {
        try {
            const prev = await this.getById(id);
            if(!prev) return false;
            await model.Purchase.destroy({where:{id}});
            await destroyCache(`purchase:id=${id}`);
            await destroyCache(`purchases*`);
            return true;
        } catch(error) {
            logError(error, 'WM5DUDMY');
        }
    };
}

module.exports = {
    Purchase
};
