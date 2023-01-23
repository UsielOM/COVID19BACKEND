const User = require('./tablas/User');
const PersonalInformation = require('./tablas/PersonalInformation');
module.exports = function() {
    PersonalInformation.hasMany(User, { foreignKey: 'id' });
    User.belongsTo(PersonalInformation, { foreignKey: 'idUser' });
}