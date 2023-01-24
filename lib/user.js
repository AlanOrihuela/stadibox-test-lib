const Sequelize = require("sequelize"),
    Op = Sequelize.Op,
    cryptoRandomString = require('crypto-random-string'),
    {logError, redis, pubsub, destroyCache, baseConfig} = require('./core'),
    model = require('../models/user');

class User {

    static getById = async(id) => {
        try {
            const u = `user:id=${id}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.User.findOne({
                where: {id}
            });
            if(data) data = data.get({ plain: true });
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'PTEJOVSM');
        }
    };

    static getByEmail = async(email) => {
        try {
            const u = `user:email=${email}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.User.findOne({
                where: {email}
            });
            if(data) data = data.get({plain: true});
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'SN9LZX7H');
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
                                firstName: {
                                    [Op.like]: `%${query}%`
                                }
                            },
                            {
                                lastName: {
                                    [Op.like]: `%${query}%`
                                }
                            },
                            {
                                email: {
                                    [Op.like]: `${query}%`
                                }
                            }
                        ]
                    }))
                };
                break;
            case 'id':
                if(filter.id) if(filter.id.length > 0) where.id = {[Op.in]: filter.id};
                break;
        }
        return where;
    }

    static count = async(filter) => {
        try {
            if(!filter) filter = {};
            const u = `users:count:filter=${JSON.stringify(filter)}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            let data = await model.User.count({
                where: this.processFilter(filter)
            });
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'FR4UO7ND');
        }
    };

    static list = async(filter, options) => {
        try {
            if(!filter) filter = {};
            if(!options) options = {};
            const u = `users:filter=${JSON.stringify(filter)}:options=${JSON.stringify(options)}`,
                cache = await redis.get(u);
            if(cache) return JSON.parse(cache);
            const where = this.processFilter(filter),
                order = options.ord ? [[options.ord, options.asc ? 'ASC' : 'DESC']] : [['updatedAt', 'DESC']],
                limit = options.num || baseConfig.defaultNum,
                offset = (options.pag || 0) * limit;
            let data = await model.User.findAll({
                where, limit, offset, order
            }).map(item => item.get({plain: true}));
            await redis.set(u, JSON.stringify(data));
            return data;
        } catch(error) {
            logError(error, 'IDFMPKX7');
        }
    };

    static create = async(input) => {
        try {
            if(!input.id) input.id = cryptoRandomString({type: 'url-safe', length: 10});
            if(input.type) input.typeId = input.type.id;
            const prev = await this.getById(input.id);
            if(prev) throw new Error(`El usuario ${input.id} ya existe, use otro ID`);
            await model.User.create(input);
            await destroyCache(`user:id=${input.id}*`);
            if(input.email) await destroyCache(`user:email=${input.email}*`);
            await destroyCache(`users*`);
            const data = await this.getById(input.id);
            await pubsub.publish(`createdUser`, {
                createdUser: data
            });
            return data;
        } catch(error) {
            logError(error, 'UDTQBICS');
        }
    };

    static update = async(input) => {
        try {
            if(!input.id) throw new Error(`No se encontró el ID en el usuario`);
            if(input.type) input.typeId = input.type;
            if(input.profileImage) input.profileImageId = input.profileImage;
            if(input.leader) input.leaderId = input.leader;
            const prev = await this.getById(input.id);
            if(!prev) throw new Error(`El usuario ${input.id} no existe`);
            await model.User.update(input, {where: {id: input.id}});
            await destroyCache(`user:id=${input.id}*`);
            if(input.email) await destroyCache(`user:email=${input.email}*`);
            if(prev.email) await destroyCache(`user:email=${prev.email}*`);
            await destroyCache(`users*`);
            const data = await this.getById(input.id);
            await pubsub.publish(`updatedUser`, {
                updatedUser: data
            });
            await pubsub.publish(`updatedUser:id=${input.id}`, {
                updatedUser: data
            });
            return data;
        } catch(error) {
            logError(error, 'G2ED5A9A');
        }
    };

    static delete = async(id) => {
        try {
            const prev = await this.getById(id);
            if(!prev) return false;
            await model.User.destroy({where:{id}});
            await destroyCache(`user:id=${id}*`);
            await destroyCache(`user:email=${prev.email}*`);
            await destroyCache(`users*`);
            await pubsub.publish(`deletedUser`, {
                deletedUser: prev
            });
            await pubsub.publish(`deletedUser:id=${id}`, {
                deletedUser: prev
            });
            return true;
        } catch(error) {
            logError(error, '09Z2DKUS');
        }
    };

}

module.exports = {
    User
};
