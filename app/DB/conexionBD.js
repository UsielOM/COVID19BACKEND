const Sequelize = require('sequelize');
const sequelize = new Sequelize("ProyectoCovid", "sa", "021158", {
    host: 'localhost',
    dialect: "mssql",
    port: 1433
});
module.exports = sequelize;