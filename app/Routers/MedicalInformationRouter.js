module.exports = function(app, mariadb) {


    app.post('/post/postMedicalInformation', (req, res) => {
        mariadb.postMedicalInformation(req.body, function(result) {
            res.send(result);
        })
    })

}