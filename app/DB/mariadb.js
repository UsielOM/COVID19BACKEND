const sequelize = require('./conexionBD');


init = function() {

    sequelize.authenticate().then(() => {
        console.log("Conexion establecida exitosamente con mariadb");
    }).catch(err => {
        console.error("Conexion no establecida", err);
    });
}


module.exports.init = init;