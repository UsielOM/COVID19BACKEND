const express = require('express');
const app = express();
const puerto = 3000;

app.use(express.json());

app.listen(puerto, () => {
    console.log(`Servidor listo y escuchando en el puerto ${puerto}`);
})

app.get("/", function(require, response) {
    response.send("❤️ BackEnd Funcionando ❤️");
});