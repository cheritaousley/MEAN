//=======================ALL THE ROUTES====================//
//the routes must respond with something!
console.log("WE MADE IT");
var mongoose = require('mongoose');
var dashboard = require('../controllers/dashboard.js'); //we require our controllers file (where all the logic in the routes is stored)//simply store this requirement in a variable
module.exports = function (app) {
    app.get('/', function (req, res) {
        dashboard.show(req,res) //the function comes from the controllers files that holds the logic of that specifc function (of logic) for that route
    });
    app.get('/add', function (req, res) {
        res.render('create'); //if there is no logic for the route, simply render the page
    });
    app.post('/rabbits', function (req, res) {
        dashboard.create(req,res);
    });
    app.get('/view/:rabbitId', function (req, res) {
        dashboard.showOne(req,res);
    });
    app.get('/edit/:rabbitId', function (req, res) {
        dashboard.edit(req,res);
    });
    app.post('/update/:rabbitId', function (req, res) {
        dashboard.update(req,res);
    });
    app.get('/destroy/:rabbitId', function (req, res) {
        dashboard.destroy(req,res);
    });
};