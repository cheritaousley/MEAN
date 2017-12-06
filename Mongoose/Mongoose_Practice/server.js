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
mongoose.connect('mongodb://localhost/basic_mongoose'); //the last part of this will always change. It is our database.
var UserSchema = new mongoose.Schema({ //this creates a model, called users based on the UserSchema//Must match the collection!!Always keep it capital and singular and mongoose will change it to lower case and plural
    name: String,
    age: Number
})
mongoose.model('User', UserSchema); //this creates a model, called users based on the UserSchema
var User = mongoose.model('User') //plugging this new model into a variable, to call on it later

app.get('/', function (req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    User.find({}, function (err, users) { //querying from the User model we just created (and stored as a variable), users is the collection we are looking at//This will either return errors or the whatever we are querying for
        if (err) {
            console.log(err);
        }
        else {
            console.log(users);
        
            let usersInfo = {   //this is just used as an example of to pass more than one thing, including the json object through to render this page
                stuff: "this is cool",
                more: "Fun",
                users: users
            } //remember we can reference what is inside of this object in the .ejs file by its own key name, not usersInfo
            // res.render('index', usersInfo);
            res.render('index', {users: users}); //this step creates the json object
        }
})
})
// Add User Request 
app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({ name: req.body.name, age: req.body.age }); //Creating a new instance of the User Schema //req.body."yourformvairable" is only for forms aka post routes
    console.log(user.name, user.age);
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function (err) {
        // if there is an error console.log that something went wrong!
        if (err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.redirect('/');
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})
