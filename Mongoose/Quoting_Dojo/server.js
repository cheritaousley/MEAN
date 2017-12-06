var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({ secret: 'codingdojorocks' }));
mongoose.Promise = global.Promise;

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/quoting_dojo'); //the last part of this will always change. It is our database.
var UserSchema = new mongoose.Schema({ 
    name: String,
    quote: String
})
mongoose.model('User', UserSchema); //this creates a model, called users based on the UserSchema
var User = mongoose.model('User') //plugging this new model into a variable, to call on it later

//=======================Starting the routes====================//
app.get('/', function (req, res) {
  
    res.render('index'); 
   
})

//==========================Post route to create user instance of User Schema===========//
app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);

    // var user = new User({ name: req.body.name, qoute: req.body.quote }); //Creating a new instance of the User Schema //req.body."yourformvairable" is only for forms aka post routes
    var userInstance = new User();
    userInstance.name = req.body.name
    userInstance.quote = req.body.quote
    console.log(userInstance.name, userInstance.quote);
    userInstance.save(function (err) {
        if (err) {
            res.render('index', { errors: user.errors })
        }
        else {
            res.redirect('/quotes');
        }
    });
})

//===========================route to display the quotes======================//
app.get('/quotes', function (req, res) {
    User.find({}, function (err, users) { 
        if (err) {
            console.log(err);
        }
        else {
            console.log(users);
            res.render('quotes', { users: users });
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})
