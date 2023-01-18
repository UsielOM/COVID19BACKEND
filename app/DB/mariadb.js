const sequelize = require('./conexionBD');
const bcrypt = require('bcryptjs');
const User = require('./tablas/User');
const MedicalInformation = require('./tablas/MedicalInformation');
const Consulta = require('./tablas/Consultas');
const VitalSigns = require('./tablas/VitalSigns');
const PersonalInformation = require('./tablas/PersonalInformation');
const Residence = require('./tablas/Residence');
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
getSignosUser = function(idPaciente, callback) {
    let hoy = new Date();
    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;
    let año = hoy.getFullYear();
    let formato = `${año}-${mes}-${dia}`;

    Consulta.findOne({ where: { idPaciente: idPaciente, fecha: formato } }).then(paciente => callback(paciente));

}

//post
postUser = function(req, callback) {
    const salt = bcrypt.genSaltSync();
    pw2 = bcrypt.hashSync(req.Password, salt);

    User.create({
        Name: req.Name,
        Lastname: req.Lastname,
        Email: req.Email,
        Phone: req.Phone,
        Password: pw2,
        idRoll: req.idRoll,

    }).then(callback(true));
}

postMedicalInformation = function(req, callback) {
    MedicalInformation.create({
        idUser: req.idUser,
        Blood_Type: req.Blood_Type,
        Allergies: req.Allergies,
        Medical_Conditions: req.Medical_Conditions,
        Vaccines: req.Vaccines,
        Height: req.Height,
        Weight: req.Weight,
        Emergency_Contact: req.Emergency_Contact
    }).then(callback(true));
}

postVitalSigns = function(req, callback) {
    VitalSigns.create({
        idUser: req.idUser,
        Oxygenation: req.Oxygenation,
        Heart_rate: req.Heart_rate,
        Temperature: req.Temperature,
        Date: req.Date,
        Time: req.Time,
    }).then(callback(true));
}
postPersonalInformation = function(req, callback) {
    PersonalInformation.create({
        idUser: req.idUser,
        Age: req.Age,
        Gender: req.Gender,
        Date_of_birth: req.Date_of_birth,
        Personal_ID: req.Personal_ID,

    }).then(callback(true));
}

postResidence = function(req, callback) {
    Residence.create({
        idUser: req.idUser,
        Address: req.Address,
        Street: req.Street,
        State: req.State,
        StZipcodeate: req.StZipcodeate,
        City: req.City,
    }).then(callback(true));
}

module.exports.init = init;
module.exports.postUser = postUser
module.exports.getUsers = getUsers
module.exports.getConsultas = getConsultas
module.exports.getSignosUser = getSignosUser;
module.exports.postMedicalInformation = postMedicalInformation;
module.exports.postVitalSigns = postVitalSigns;
module.exports.postPersonalInformation = postPersonalInformation;
module.exports.postResidence = postResidence;