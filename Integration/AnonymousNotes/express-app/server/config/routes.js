//=======================ALL THE ROUTES====================//
//the routes must respond with something!
var path = require('path');
console.log("WE MADE IT");
var mongoose = require('mongoose');
var _notes = require('../controllers/users.js'); //we require our controllers file (where all the logic in the routes is stored)//simply store this requirement in a variable
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('index');
    });
    app.get('/api/allNotes', (req, res) => { 
        _notes.find(req, res)}) //these should match the logic in the controllers folder
    app.post('/api/addNote', (req, res) => { 
        _notes.create(req, res);})
    app.post('/api/deleteNote', function(req, res) {
        _notes.delete(req, res);
    })
    app.get('success', function(req, res) {
        _notes.show(req, res);
    })
    app.all("*", (request, response) => { response.sendFile(path.resolve("./angular-app/dist/index.html")) });
    /* remember that you'll need to require path for this to work! */

};
