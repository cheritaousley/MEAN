//=====================ALL THE LOGIC===================//
var mongoose = require('mongoose');
var Rabbit = mongoose.model('Rabbit');
module.exports = {
    show: function (req, res) {
        Rabbit.find({}, function (err, rabbits) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(rabbits);
                res.render('index', { rabbits: rabbits });
            }
        })
    },
    create: function (req, res) {
        console.log("POST DATA", req.body);

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
    },
    showOne: function (req, res) {
        Rabbit.findOne({ _id: req.params.rabbitId }, function (err, rabbit) {  //checking to see if the id in the database is equal to the rabbit id in session, using the varibale ive stored it in
            if (err) {
                console.log(err);
            }
            else {
                console.log(rabbit);
                res.render('view', { rabbit: rabbit });
            }
        });
    },
    edit: function (req, res) {
        Rabbit.findOne({ _id: req.params.rabbitId }, function (err, rabbit) {  //must find the rabbit in this route to prepopulate the form with that rabbit's information
            if (err) {
                console.log(err);
            }
            else {
                console.log(rabbit);
                res.render('edit', { rabbit: rabbit });
            }
        });
    },
    update: function (req, res) {
        Rabbit.update({ _id: req.params.rabbitId }, { name: req.body.name, breed: req.body.breed, color: req.body.color, age: req.body.age }, function (err, rabbit) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(rabbit)
                res.redirect('/');//the problem comes when i try to redirect to a route that passes in a variable, such as the id
            }
        });
    },
    destroy: function (req, res) {
        Rabbit.remove({ _id: req.params.rabbitId }, function (err) {
            res.redirect('/')
        });
    }
}