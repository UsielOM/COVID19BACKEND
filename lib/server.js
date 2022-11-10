const express = require('express');
const app = express();
const cors = require('cors');
const puerto = 3000;
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');

const mariadb = require('../app/DB/mariadb');
require('dotenv').config();

var corsOptions = {
    origin: ["http://localhost:4200"]
}

//ruta 
app.use('/upload', express.static(path.join(__dirname, 'uploads')));
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

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }

});

const upload = multer({ storage });

require('../app/Routers/loginRouter')(app);
require('../app/Routers/userRouter')(app, mariadb);

app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.params;
    if (!file) {
        const error = new Error("No file");
        error.http.StatusCode = 400;
        return error
    }
    res.send(file);
});