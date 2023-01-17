const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const User = sequelize.define('Users', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Lastname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    Email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    Phone: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    idRoll: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }

}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = User