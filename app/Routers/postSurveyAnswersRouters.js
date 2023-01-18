module.exports = function(app, mariadb) {


    app.post('/post/postSurveyAnswers', (req, res) => {
        mariadb.postSurveyAnswers(req.body, function(result) {
            res.send(result);
        })
    })

}