const Sequelize = require("sequelize");
const core = require('../lib/core');

class Country extends Sequelize.Model {}
Country.init({
    id: {
        type: Sequelize.STRING(6),
        primaryKey: true
    }, name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    dialCode: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    payPalAccepted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    cardsAccepted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    lsId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: true
    }
}, {
    sequelize: core.db
});

exports.Country = Country;

class Region extends Sequelize.Model {}
Region.init({
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    }, name: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    sequelize: core.db,
    defaultScope: {
        include: [
            {
                model: Country,
                as: 'country',
                required: true
            }
        ]
    }
});
Region.belongsTo(Country, {
    as: 'country',
    foreignKey: 'countryId'
});
exports.Region = Region;

exports.sync = async(options = {force: false, alter: true}) => {
    console.log('i18n SYNC');
    await Country.sync(options);
    await Region.sync(options);
};
