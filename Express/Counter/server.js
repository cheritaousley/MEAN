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
    var count; 
    if(!req.session.attempt) {
        req.session.attempt = 1; 
        count = req.session.attempt;
    }
    else{
        req.session.attempt += 1; 
        count = req.session.attempt;
    }
    console.log(count);
    res.render("index", { count: count });
   
})

app.get('/increment', function(req, res) {
    req.session.attempt += 1;
    res.redirect('/');
});

app.get('/reset'), function(req, res) {
    req.session.destroy();
    res.redirect('/');
}


// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});