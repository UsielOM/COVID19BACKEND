const sequelize = require('./conexionBD');
const bcrypt = require('bcryptjs');
const User = require('./tablas/User');
const MedicalInformation = require('./tablas/MedicalInformation');
const Consulta = require('./tablas/Consultas');
const VitalSigns = require('./tablas/VitalSigns');
const PersonalInformation = require('./tablas/PersonalInformation');
const Residence = require('./tablas/Residence');
const MedicalData = require('./tablas/MedicalData');
const MedicalCodes = require('./tablas/MedicalCodes');
const Link = require('./tablas/Link');
const SurveyAnswers = require('./tablas/SurveyAnswers');
const Appointments = require('./tablas/Appointments');
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
getUserOne = function(id, callback) {
    User.findOne({ where: { id: id } }).then(paciente => callback(paciente));
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

postMedicalData = function(req, callback) {
    MedicalData.create({
        idUser: req.idUser,
        Specialty: req.Specialty,
        Years_of_experience: req.Years_of_experience,
        Medical_school: req.Medical_school,
        Graduation_year: req.Graduation_year,
        Residency_program: req.Residency_program,
        License_number: req.License_number,
        Board_certification: req.Board_certification,
        Notes: req.Notes
    }).then(callback(true));
}
postMedicalCodes = function(req, callback) {
    MedicalCodes.create({
        idUser: req.idUser,
        Code: req.Code,
    }).then(callback(true));
}

postLink = function(req, callback) {
    Link.create({
        idUser: req.idUser,
        idCode: req.idCode,
    }).then(callback(true));
}
postAppointments = function(req, callback) {
    Appointments.create({
        idUser: req.idUser,
        idVital_Signs: req.idVital_Signs,
        idSurvey_answers: req.idSurvey_answers,
        Date: req.Date,
        Time: req.Time,
    }).then(callback(true));
}
postSurveyAnswers = function(req, callback) {
    SurveyAnswers.create({
        idUser: req.idUser,
        question_1: req.question_1,
        question_2: req.question_2,
        question_3: req.question_3,
        question_4: req.question_4,
        question_5: req.question_5,
        question_6: req.question_6,
        question_7: req.question_7,
        question_8: req.question_8,
        question_9: req.question_9,
        question_10: req.question_10,
        question_11: req.question_11,
        question_12: req.question_12,
        question_13: req.question_13,
        question_14: req.question_14,
        question_15: req.question_15,
        question_16: req.question_16,
        question_17: req.question_17,
    }).then(callback(true));
}
module.exports.init = init;
module.exports.getUsers = getUsers;
module.exports.getConsultas = getConsultas;
module.exports.getSignosUser = getSignosUser;
module.exports.getUserOne = getUserOne;
//Post
module.exports.postUser = postUser;
module.exports.postMedicalInformation = postMedicalInformation;
module.exports.postVitalSigns = postVitalSigns;
module.exports.postPersonalInformation = postPersonalInformation;
module.exports.postResidence = postResidence;
module.exports.postMedicalData = postMedicalData;
module.exports.postMedicalCodes = postMedicalCodes;
module.exports.postLink = postLink;
module.exports.postSurveyAnswers = postSurveyAnswers;
module.exports.postAppointments = postAppointments;