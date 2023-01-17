const { Sequelize } = require('sequelize');
const sequelize = require('../conexionBD');

const SurveyAnswers = sequelize.define('survey_answers', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    question_1: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_2: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_3: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_4: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_5: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_6: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_7: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_8: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_9: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_10: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_11: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_12: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_13: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_14: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_15: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_16: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    question_17: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },


}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = SurveyAnswers