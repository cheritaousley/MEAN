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
mongoose.connect('mongodb://localhost/mongoose_dashboard'); //the last part of this will always change. It is our database.
var RabbitSchema = new mongoose.Schema({ 
    name: String,
    breed: String,
    color: String,
    age: Number
})
mongoose.model('Rabbit', RabbitSchema); //this creates a model, called users based on the UserSchema
var Rabbit = mongoose.model('Rabbit') //plugging this new model into a variable, to call on it later

//=======================Starting the routes and displaying all rabbits====================//
app.get('/', function (req, res) {
    Rabbit.find({}, function (err, rabbits) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(rabbits);
            res.render('index', { rabbits: rabbits });
        }
    })
})

//========================renders form to create rabbit====================//
app.get('/add', function (req, res) {
    res.render('create');
});

//==========================Post route to create rabbit instance of User Schema===========//
app.post('/rabbits', function (req, res) {
    console.log("POST DATA", req.body);

    // var user = new User({ name: req.body.name, qoute: req.body.quote }); //Creating a new instance of the User Schema //req.body."yourformvairable" is only for forms aka post routes
    var rabbitInstance = new Rabbit();
    rabbitInstance.name = req.body.name
    rabbitInstance.breed = req.body.breed
    rabbitInstance.color = req.body.color
    rabbitInstance.age = req.body.age
    console.log(rabbitInstance.name, rabbitInstance.breed, rabbitInstance.color, rabbitInstance.age);
    rabbitInstance.save(function (err) {
        if (err) {
            res.render('index', { errors: rabbit.errors })
        }
        else {
            res.redirect('/');
        }
    });
})

//===========================route to view specific rabbit======================//
app.get('/view/:rabbitId', function (req, res) {
    // req.session.id= req.params._id; //storing the rabbit's id in session under 'rabbitId
    // console.log(req.params.id );
    Rabbit.findOne({ _id: req.params.rabbitId }, function (err, rabbit){  //checking to see if the id in the database is equal to the rabbit id in session, using the varibale ive stored it in
        if (err) {
            console.log(err);
        }
        else {
            console.log(rabbit);
            res.render('view', { rabbit: rabbit });
        }
    });
})

//==================renders form to edit rabbit ===============//
app.get('/edit/:rabbitId', function (req, res) {
    Rabbit.findOne({ _id: req.params.rabbitId }, function (err, rabbit) {  //must find the rabbit in this route to prepopulate the form with that rabbit's information
        if (err) {
            console.log(err);
        }
        else {
            console.log(rabbit);
            res.render('edit', { rabbit: rabbit });
        }
    });
})

//================Process form to update your rabbit=============//
app.post('/update/:rabbitId', function (req, res) {
    Rabbit.update({ _id: req.params.rabbitId }, {name: req.body.name, breed: req.body.breed, color: req.body.color, age: req.body.age}, function (err, rabbit) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(rabbit)
            res.redirect('/');//the problem comes when i try to redirect to a route that passes in a variable, such as the id
        }
    });
})

//================Route to detroy rabbit==============//
app.get('/destroy/:rabbitId', function (req, res) {
    Rabbit.remove({ _id: req.params.rabbitId}, function (err) {
       res.redirect('/')
    });
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})
