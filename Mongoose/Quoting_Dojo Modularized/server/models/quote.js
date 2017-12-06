var mongoose = require('mongoose');
var User = mongoose.model('User');
var UserSchema = new mongoose.Schema({
    name: String,
    quote: String
})
mongoose.model('User', UserSchema); 