module.exports = function(app, mariadb) {


    app.post('/post/postPersonalInformation', (req, res) => {
        mariadb.postPersonalInformation(req.body, function(result) {
            res.send(result);
        })
    })

}