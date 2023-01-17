const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const MedicalData = sequelize.define('Medical_Data', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Specialty: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Years_of_experience: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Medical_school: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Graduation_year: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Residency_program: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    License_number: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Board_certification: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Notes: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = MedicalData