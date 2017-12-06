var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({ 
    secret: 'codingdojorocks',
    resave:true,
    saveUninitialized: true
 }));
mongoose.Promise = global.Promise;

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/message_board'); //the last part of this will always change. It is our database.
var MessageSchema = new mongoose.Schema({ 
    name: { type: String, required: true },
    message: {type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }] //best practice to use underscore in front of comments to show that this relates to the other table! It gets confusing later
})
mongoose.model('Message', MessageSchema); //this creates a model, called messagess based on the UserSchema
var Message = mongoose.model('Message') //plugging this new model into a variable, to call on it later

var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    comment: {type: String, required: true },
})
mongoose.model('Comment', CommentSchema); 
var comment = mongoose.model('Comment') //intentionally made it lower case c becuase Comment appears to be a built in function

//=======================Starting the routes and displaying all messages and comments====================//
app.get('/', function (req, res) {
    // comment.find({}, function (err, comments) {
    //     console.log(comments);
    //     Message.find({}, function (messageErr, messages ) {
    //     if(messageErr && err){
    //         console.log("Oh no!");
    //     }
    //     res.render('index', {comments : comments, messages : messages});
    // });
    Message.find({ })   //this allows for us to show all the messages and its comments with it//shorter way of doing the nested find functions
        .populate('comments')
        .exec(function (err, messages) {
            res.render('index', { messages: messages});
        });
})
// });
//===================Post route to handle the form for messages=================//
app.post('/messages', function (req, res) {
    console.log("POST DATA", req.body);

    var messageInstance = new Message();
    messageInstance.name = req.body.name
    messageInstance.message= req.body.message

    console.log(messageInstance.name, messageInstance.message);
    messageInstance.save(function (err) {
        if (err) {
            res.render('index', { errors: message.errors })
        }
        else {
            res.redirect('/');
        }
    });
})
//===================Post route to handle the form for comments=================//
app.post('/comments', function (req, res) {
    console.log("POST DATA", req.body);

    var commentInstance = new comment();
    commentInstance.name = req.body.name
    commentInstance.comment = req.body.comment
    Message.findOne({_id : req.body.message}, function(err, currentMessage){ //finding one message// the message in req.body.message is from the comments form with the hidden input !!
        commentInstance._message = currentMessage; //setting that one message we just queried for to the message field when creating a comment //currentMessage is tied to this comment by using the hidden field input on the comment form! Passing the message id in the hidden form of the comment connects them
        commentInstance.save(function (err) {
        if (err) {
            res.render('index', { errors: comment.errors })
        }
        currentMessage.comments.push(commentInstance); //pushing the commentInstance we just created into the comments field of the messages model, hence why the underscore in comments (_comments) would have been a benefit
        currentMessage.save(function (messErr){
            res.redirect('/');
        })
        console.log(commentInstance.name, commentInstance.comment, commentInstance.currentMessage);
    });
    });
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})
