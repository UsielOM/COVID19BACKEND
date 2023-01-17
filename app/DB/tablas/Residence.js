const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const Residence = sequelize.define('Residence', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Address: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Street: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    State: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    StZipcodeate: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    City: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Residence