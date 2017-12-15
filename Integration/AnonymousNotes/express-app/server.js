//=================================HOME BASE FILE============================//
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
// var api = require('./server/routes/api'); //not working

// app.use('/api', api)//set our api routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/angular-app/dist'));

app.use(session({
    secret: 'codingdojorocks',
    resave: true,
    saveUninitialized: true
}));
mongoose.Promise = global.Promise;

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes'); //will run the file at the given location(this points us to routes.js) and runs whatever is in the module.exports!!

routes_setter(app);  //using the variable we just created to pass in our app variable from routes.js


// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})
