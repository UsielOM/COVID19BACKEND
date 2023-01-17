const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const PersonalInformation = sequelize.define('Personal_Information', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Gender: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Date_of_birth: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    Personal_ID: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },


}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = PersonalInformation