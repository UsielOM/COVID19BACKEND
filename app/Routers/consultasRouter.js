module.exports = function(app, mariadb) {


    app.get('/get/Consultas', (req, res) => {
        mariadb.getConsultas(function(result) {
            res.send(result);
        })
    })

    app.get('/get/Signos/:idPaciente', (req, res) => {
        mariadb.getSignosUser(req.params.idPaciente, result => res.send(result));
    });


}