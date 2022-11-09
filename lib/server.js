const express = require('express');
const app = express();
const cors = require('cors');
const puerto = 3000;
const multer = require('multer');
const morgan = require('morgan');

const mariadb = require('../app/DB/mariadb');
require('dotenv').config();

var corsOptions = {
        origin: ["http://localhost:4200"]
    }
    //Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));


app.listen(puerto, () => {
    console.log(`Servidor listo y escuchando en el puerto ${puerto}`);
    mariadb.init();
})

app.get("/", function(require, response) {
    response.send("❤️ BackEnd Funcionando ❤️");
});


require('../app/Routers/loginRouter')(app);
require('../app/Routers/userRouter')(app, mariadb);