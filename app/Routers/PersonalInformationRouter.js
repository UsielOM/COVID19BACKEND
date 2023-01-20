module.exports = function(app, mariadb) {


    app.post('/post/postPersonalInformation', (req, res) => {
        mariadb.postPersonalInformation(req.body, function(result) {
            res.send(result);
        })
    })

    app.get('/get/getPersonalInformation/:idUser', (req, res) => {
        mariadb.getPersonalInformation(req.params.idUser, result => res.send(result))
    })


}