const { check } = require('express-validator');
const { validarCampos } = require('../Login/midelware/validar-campos');
const { validarJTW } = require('../Login/midelware/validar-jwt');
const { loginUser, revalidarToken } = require('../Login/controllers/auth');

module.exports = function(app) {

    app.post('/post/login', [

            check('Email', 'El correo es obligatorio'),
            check('Password', 'La contraseña es obligatoria').isLength({ min: 6 }),
            validarCampos
        ],
        loginUser);

    app.get('/get/renew', validarJTW, revalidarToken);
}