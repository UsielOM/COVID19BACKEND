const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const Appointments = sequelize.define('Appointments', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    idVital_Signs: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    idSurvey_answers: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    Date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    Time: {
        type: Sequelize.TIME,
        allowNull: false
    }


}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Appointments