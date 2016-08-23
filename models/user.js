const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// define user model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// on save hook, encrypt password
// before saving a model, run this function
userSchema.pre('save', function(next) {
    // access to the user model
    const user = this;
    // generate a salt then run callback
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            return next(err);
        }
        // hash (encrypt) the password using the salt then run callback
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) {
                return next(err);
            }
            // overwrite plain text password with encrypted password
            user.password = hash;
            next();
        });
    });
});

// create the model class
const ModelClass = mongoose.model('user', userSchema);

// export the model
module.exports = ModelClass;