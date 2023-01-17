const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const User = sequelize.define('Usuario', {

    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FirstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    LastName: {
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
    }

}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = User