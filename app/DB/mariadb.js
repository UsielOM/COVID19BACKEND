const sequelize = require('./conexionBD');
const bcrypt = require('bcryptjs');
const User = require('./tablas/User');
const Consulta = require('./tablas/Consultas');

init = function() {

    sequelize.authenticate().then(() => {
        console.log("Conexion establecida exitosamente con mariadb");
    }).catch(err => {
        console.error("Conexion no establecida", err);
    });
}

//get

getUsers = function(callback) {
    User.findAll().then(user => callback(user));
}

getConsultas = function(callback) {
    Consulta.findAll().then(consulta => callback(consulta));
}
getSignosUser = function(callback, idPaciente) {
        let hoy = new Date();
        let dia = hoy.getDate();
        let mes = hoy.getMonth() + 1;
        let año = hoy.getFullYear();

        let formato = `${año}-${mes}-${dia}`;
        Consulta.findOne({ where: { idPaciente: idPaciente, Fecha: formato } }).then(paciente => callback(paciente));

    }
    //post
postUser = function(req, callback) {
    const salt = bcrypt.genSaltSync();
    pw2 = bcrypt.hashSync(req.Password, salt);

    User.create({
        FirstName: req.FirstName,
        LastName: req.LastName,
        Email: req.Email,
        Phone: req.Phone,
        Password: pw2
    }).then(callback(true));
}

module.exports.init = init;
module.exports.postUser = postUser
module.exports.getUsers = getUsers
module.exports.getConsultas = getConsultas
module.exports.getSignosUser = getSignosUser;