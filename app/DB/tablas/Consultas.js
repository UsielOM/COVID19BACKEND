const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const Consulta = sequelize.define('Consultas', {

    idConsulta: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idPaciente: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Fecha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    Temperatura: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    Oxigenacion: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    F_Cardiaca: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Consulta