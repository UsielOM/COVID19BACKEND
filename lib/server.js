const express = require('express');
const app = express();
const puerto = 3000;
const mariadb = require('../app/DB/mariadb');

app.use(express.json());

app.listen(puerto, () => {
    console.log(`Servidor listo y escuchando en el puerto ${puerto}`);
    mariadb.init();
})

app.get("/", function(require, response) {
    response.send("❤️ BackEnd Funcionando ❤️");
});