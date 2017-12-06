//=======================ALL THE ROUTES====================//
//the routes must respond with something!
console.log("WE MADE IT");
var mongoose = require('mongoose');
var _users = require('../controllers/users.js'); //we require our controllers file (where all the logic in the routes is stored)//simply store this requirement in a variable
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });
    app.post('/users', function (req, res) {
        _users.create(req,res);
    });
    app.get('/login', function (req, res) {
        res.render('login');
    });
    app.post('/logging', function (req, res) {
        _users.logging(req,res);
    });
    app.get('/success', function (req, res) {
        _users.showOne(req,res);
    });
};