const Sequelize = require('sequelize'),
    cryptoRandomString = require("crypto-random-string"),
    user = require('./user'),
    core = require('../lib/core');

class Purchase extends Sequelize.Model{

}

Purchase.init({
    id: {
        type: Sequelize.STRING(10),
        primaryKey: true
    },
    total: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    card: {
        type: Sequelize.STRING(16),
        allowNull: false
    },
    totalProducts: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize: core.db,
    timestamps: true,
    paranoid: true,
    defaultScope: {
        include: [
            {
                model: user.User,
                as: 'user'
            },
        ]
    },
    scopes: {
        minimal: {
            include: [
                {
                    model: user.User,
                    as: 'user'
                },
            ]
        }
    },
});

Purchase.belongsTo(user.User, {
    as: 'user',
    foreignKey: {
        name: 'userId',
        allowNull: false
    }
});

exports.Purchase = Purchase

/**
 * TODO: en este archivo es donde debes definir los atributos que tendrán tus modelos necesarios para la implementación :)
 * es importante que tomes en cuenta las relaciones entre todas las entidades
 */

exports.sync = async (options = {force: false, alter: true}) => {
    console.log('store SYNC');
    await Purchase.sync(options);
};
