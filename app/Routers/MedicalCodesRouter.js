module.exports = function(app, mariadb) {


    app.post('/post/postMedicalCodes', (req, res) => {
        mariadb.postMedicalCodes(req.body, function(result) {
            res.send(result);
        })
    })

}