const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const VitalSigns = sequelize.define('Vital_Signs', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Oxygenation: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    Heart_rate: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Temperature: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    Date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    Time: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false
    }

}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = VitalSigns