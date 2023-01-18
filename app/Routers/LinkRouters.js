module.exports = function(app, mariadb) {


    app.post('/post/postLink', (req, res) => {
        mariadb.postLink(req.body, function(result) {
            res.send(result);
        })
    })

}