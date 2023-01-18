module.exports = function(app, mariadb) {


    app.post('/post/postVitalSigns', (req, res) => {
        mariadb.postVitalSigns(req.body, function(result) {
            res.send(result);
        })
    })

}