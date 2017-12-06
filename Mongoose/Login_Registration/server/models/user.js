//=================USER MODEL=================//
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
    email: { type: String, required: true, validate: { validator: function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }} },
    first_name: { type: String, required: true, minlength: 2 },
    last_name: { type: String, required: true, maxlength: 20 },
    password: { type: String, required: true, minlength: 8, maxlength: 32 },
    password_confirm: { type: String, required: true, minlength: 8, maxlength: 32 },
    birthday: { type: Date, required: true },
 
}, { timestamps: true });


UserSchema.pre('save', function(done){
    console.log("IN START OF PRE FUNCTION")
    bcrypt.hash(this.password, 10)
        .then(hashed_password => { //this is the hashed password! now set what the user has just entered in here as this hashed password
            console.log("HASHED PASS")
            console.log(hashed_password)
            this.password = hashed_password;
            done();
        })
        .catch(error => {
            done();
        });
    
})

mongoose.model('User', UserSchema);
var User = mongoose.model('User');