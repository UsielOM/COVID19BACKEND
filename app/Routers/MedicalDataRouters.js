module.exports = function(app, mariadb) {


    app.post('/post/postMedicalData', (req, res) => {
        mariadb.postMedicalData(req.body, function(result) {
            res.send(result);
        })
    })

}