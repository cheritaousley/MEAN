//=================USER MODEL=================//
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    first_name: { type: String, required: true, minlength: 2 },
    last_name: { type: String, required: true, maxlength: 20 },
    password: { type: String, required: true, minlength: 8, maxlength: 32 },
    password_confirm: { type: String, required: true, minlength: 8, maxlength: 32 },
    birthday: { type: Date, required: true },
 
}, { timestamps: true });
mongoose.model('User', UserSchema);
var User = mongoose.model('User')