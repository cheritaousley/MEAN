//=====================ALL THE LOGIC===================//
var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var bcrypt = require('bcrypt');
module.exports = {
    find: function(req, res) {
        Note.find({}, function(err, notes){
        res.json({'notes': notes})
    });
},
    create: function (req, res) {
        console.log("POST DATA", req.body);
        var noteInstance = new Note();
        noteInstance.content = req.body.content
        console.log(noteInstance.content);
        noteInstance.save(function (err, note) {
            if(err) {
                console.log(err);
                res.json("Opps, something went wrong")
            }
            else{
                console.log("Successfully created");
                res.json({'mynote': note})
            }
         })
       
    },
    delete: function(req, res) {
        Note.remove({_id: req.body._id}, function(err, note) {
            console.log(note);
            if(err) {
                console.log(err);
            }
            else {
                console.log(note);
                res.json('okay')
            }
        })
    }
}