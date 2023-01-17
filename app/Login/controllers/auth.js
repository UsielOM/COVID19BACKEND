const sequelize = require('../../DB/conexionBD');
const bcypt = require('bcryptjs');

const { generarJWT } = require('../helpers/jwt');
const { response } = require('express');

const loginUser = async(req, res) => {
    const { Email, Password } = req.body;
    try {
        const DB = await sequelize.query(
            "select * from Usuario where Email = '" + Email + "';", {
                type: sequelize.QueryTypes.SELECT
            });
        if (DB >= 0) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe ',
                user: DB
            })

        }
        const validarPassword = bcypt.compareSync(Password, DB[0].Password);
        if (!validarPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no es valida'
            });
        }

        const token = await generarJWT(DB[0].idUser, Email);

        return res.json({
            ok: true,
            msg: 'Logeado',
            Email: DB[0].Email,
            idUser: DB[0].idUser,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Porfavor hable con el administrador'
        });
    }


}

const revalidarToken = async(req, res = response) => {
    const { idUser, Email } = req;

    const token = await generarJWT(idUser, Email);
    return res.json({
        ok: true,
        msg: 'Renew',
        idUser,
        Email,
        token
    })
}


module.exports = {
    loginUser,
    revalidarToken
}