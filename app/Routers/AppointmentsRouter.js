module.exports = function(app, mariadb) {


    app.post('/post/postAppointments', (req, res) => {
        mariadb.postAppointments(req.body, function(result) {
            res.send(result);
        })
    })

}