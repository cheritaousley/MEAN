//=====================ALL THE LOGIC===================//
var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');
module.exports = {
    create: function (req, res) {
        console.log("POST DATA", req.body);

        var userInstance = new User();
        userInstance.email = req.body.email
        userInstance.first_name = req.body.first_name
        userInstance.last_name = req.body.last_name
        userInstance.password = req.body.password
        userInstance.password_confirm = req.body.password_confirm
        userInstance.birthday = req.body.birthday
        console.log(userInstance.email, userInstance.first_name, userInstance.last_name, userInstance.password, userInstance.password_confirm, userInstance.birthday);
        userInstance.save(function (err, user) {
            if (err) {
                console.log(err);
                res.render('index',  {errors: err} )
            }
            else {
                bcrypt.hash('user.password', 10)
                    .then(hashed_password => {
                    })
                    .catch(error => {
                    });
                req.session.currentUser = user._id;
                res.redirect('/');
            }
        });
    },
    logging: function (req, res) {
        const email = req.body.email;
        const password = req.body.password;
        User.findOne({email: req.body.email}, function(err, user) {
            if(user) {
                bcrypt.compare('req.body.password', 'user.password')
                    .then(function(err, result){ //must name this something different from the query 
                        req.session.currentUser = user._id
                        console.log("Successfully logged in!");
                        res.redirect('/success');
                    })
                    .catch(function(err, _result) {
                        console.log(err);
                        res.redirect('/login');
                })
            }
            else {
                console.log(err);
                console.log("User does not exist!");
                res.redirect('/login');
            }
        })
        
    },
    showOne: function (req, res) {
        User.findOne({ _id: req.session.currentUser }, function (err, user) {  //checking to see if the id in the database is equal to the user id in session, using the varibale ive stored it in
            console.log(user);
            if (err) {
                console.log(err);
            }
            else {
                console.log(user);
                res.render('success', { user: user });
            }
        });
    },
}