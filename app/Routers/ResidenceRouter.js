module.exports = function(app, mariadb) {


    app.post('/post/postResidence', (req, res) => {
        mariadb.postResidence(req.body, function(result) {
            res.send(result);
        })
    })

}