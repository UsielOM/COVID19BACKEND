const Sequelize = require('sequelize');
const sequelize = new Sequelize("BackEndCovid", "root", "sasa", {
    host: "localhost",
    dialect: "mariadb",
    port: 3306
});
module.exports = sequelize;