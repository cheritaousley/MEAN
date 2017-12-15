//=================USER MODEL=================//
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var NoteSchema = new mongoose.Schema({
    content: { type: String, required: true, minlength: 2 },
}, { timestamps: true });


// NoteSchema.pre('save', function (done) {
//     console.log("IN START OF PRE FUNCTION")

// })

mongoose.model('Note', NoteSchema);
var Note = mongoose.model('Note');