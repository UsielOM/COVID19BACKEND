const User = require('./tablas/User');
const PersonalInformation = require('./tablas/PersonalInformation');
module.exports = function() {
    PersonalInformation.hasMany(User, { foreignKey: 'id' });
    User.belongsTo(PersonalInformation, { foreignKey: 'id' });

    // User.hasMany(PersonalInformation, { foreignKey: 'idUser' });
    // PersonalInformation.belongsTo(User, { foreignKey: 'id' });
}