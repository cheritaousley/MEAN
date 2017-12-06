var mongoose = require('mongoose');
var quotes = require('../controllers/quotes.js');
module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index');
    })
    //==========================Post route to create user instance of User Schema===========//
    app.post('/users', function (req, res) {
        quotes.create(req, res)
    })
    //===========================route to display the quotes======================//
    app.get('/quotes', function (req, res) {
        quotes.show(req, res)
    })
}