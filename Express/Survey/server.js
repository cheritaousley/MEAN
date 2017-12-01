var express = require("express");

var path = require("path");

var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({ secret: 'codingdojorocks' }));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs'); //tells server to use .ejs file from views folder

// root route to render the index.ejs view
app.get('/', function (req, res) {
    res.render("index");

})

app.post('/createUser', function (req, res) { //left side is what is coming from the form and right side is for the server
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.favorite_language = req.body.favorite_language;
    req.session.comment = req.body.comment;
    let user_info ={
        'name' : req.session.name,
        'location' : req.session.location,
        'favorite_language' : req.session.favorite_language,
        'comment' : req.session.comment
    }
    res.render("result",  user_info);
    // res.render("result", { 'name': req.session.name, 'location': req.session.location, 'favorite_language': req.session.favorite_language, 'comment': req.session.comment});//or we can pass in the object this way and NOT put the user_info var in the inside
});

app.get('/result'), function (req, res) {
    res.render("result");
}


// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});