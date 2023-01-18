module.exports = function(app, mariadb) {

    app.post('/post/userRegistro', (req, res) => {
        mariadb.postUser(req.body, function(result) {
            res.send(result);
        })
    })

    app.get('/get/Users', (req, res) => {
        mariadb.getUsers(function(result) {
            res.send(result);
        })
    })

    app.get('/get/User/:id', (req, res) => {
        mariadb.getUserOne(req.params.id, result => res.send(result));
    })


}