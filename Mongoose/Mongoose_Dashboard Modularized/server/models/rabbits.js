//=================RABBIT MODEL=================//
var mongoose = require('mongoose');
var RabbitSchema = new mongoose.Schema({
    name: String,
    breed: String,
    color: String,
    age: Number
})
mongoose.model('Rabbit', RabbitSchema);
var Rabbit = mongoose.model('Rabbit')