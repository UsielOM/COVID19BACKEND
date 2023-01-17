const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const MedicalInformation = sequelize.define('Medical_Information', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Blood_Type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Allergies: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Medical_Conditions: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Vaccines: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Height: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    Weight: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    Emergency_Contact: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = MedicalInformation