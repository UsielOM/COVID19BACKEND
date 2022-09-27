const sequelize = require('./conexionBD');
const bcrypt = require('bcryptjs');
const User = require('./tablas/User');


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