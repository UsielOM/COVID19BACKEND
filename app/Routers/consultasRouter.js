module.exports = function(app, mariadb) {


    app.get('/get/Consultas', (req, res) => {
        mariadb.getConsultas(function(result) {
            res.send(result);
        })
    })

}