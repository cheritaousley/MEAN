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
    if (!req.session.guess) {
        req.session.guess = Math.floor(Math.random() * 100) + 1;
    }
    let random_num = {
        'attempt': req.session.guess,
        'message': req.session.message
    }
    console.log(random_num);
    res.render("index", random_num);

});

app.post('/guess', function (req, res) { //left side is what is coming from the form and right side is for the server
    
    if( req.body.number < req.session.guess ){
        req.session.message = "TOO LOW"
    }
    else if (req.body.number > req.session.guess) {
        req.session.message = "TOO HIGH"
    }
    else if (req.body.number == req.session.guess) {
        req.session.message = "YEP, YOU GUESSED IT"
    }
    res.redirect('/');
});

app.get('/clear'), function (req, res) {
    req.session.clear();
    res.redirect('/');
};


// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});