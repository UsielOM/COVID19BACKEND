const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const Link = sequelize.define('Link', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    idCode: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }


}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Link