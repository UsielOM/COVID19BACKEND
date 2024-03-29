const jwt = require('jsonwebtoken');
const generarJWT = (id, Email) => {
    const playload = { id, Email };
    return new Promise((resolve, reject) => {
        jwt.sign(playload, process.env.SECRET_JWT_SEED, {
                expiresIn: '4h'
            },
            (err, token) => {

                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(token);
                }
            }

        )
    })
}

module.exports = {
    generarJWT
}