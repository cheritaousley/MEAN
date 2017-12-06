var mongoose = require('mongoose');
module.exports = {
    show: function(req, res) {
        User.find({}, function (err, users) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(users);
                res.render('quotes', { users: users });
            }
        })
    },
    create: function(req, res) {
        console.log("POST DATA", req.body);
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
    }
}