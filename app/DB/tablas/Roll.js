const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const Roll = sequelize.define('roll', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Roll_Name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }


}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Roll