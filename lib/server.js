const express = require('express');
const app = express();
const cors = require('cors');
const puerto = 3000;
const multer = require('multer');
const morgan = require('morgan');
const path = require('path');
const arduino = require('../app/arduino/arduino')
const mariadb = require('../app/DB/mariadb');
require('dotenv').config();

var corsOptions = {
    origin: ["http://localhost:4200"]
}

//ruta 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));



app.listen(puerto, () => {
    console.log(`Servidor listo y escuchando en el puerto ${puerto}`);
    mariadb.init();
    // arduino();
})

app.get("/", function(require, response) {
    response.send("❤️ BackEnd Funcionando ❤️");
});





require('../app/Routers/loginRouter')(app);
require('../app/Routers/userRouter')(app, mariadb);
require('../app/Routers/consultasRouter')(app, mariadb);
require('../app/Routers/MedicalInformationRouter')(app, mariadb);
require('../app/Routers/VitalSigns')(app, mariadb);
require('../app/Routers/PersonalInformationRouter')(app, mariadb);
require('../app/Routers/ResidenceRouter')(app, mariadb);

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }

});

const upload = multer({ storage });

app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error("No file");
        error.httpStatusCode = 400;
        return next(error)

    }
    res.send(file);
});