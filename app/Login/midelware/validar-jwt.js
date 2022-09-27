const { response } = require('express');
const jwt = require('jsonwebtoken');
const validarJTW = (req, res = response, next) => {
    const token = req.heafer('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'error en el token'
        });
    }
    try {
        const { idUser, Email } = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.idUser = idUser;
        req.Email = Email;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
    }
    next();
}


module.exports = {
    validarJTW
}