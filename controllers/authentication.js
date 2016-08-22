const User = require('../models/user');

exports.signup = function(req, res, next) {
    const EMAIL = req.body.email;
    const PASSWORD = req.body.password;
    // See if a user with the given email exists
    User.findOne({ email: EMAIL }, function(err, existingUser) {
        if (err) {
            return next(err);
        }
        // If a user with the email does exist, return an error
        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use'});
        }
        // If a user with email does not exist, create and save user record
        const USER = new User({
            email: EMAIL,
            password: PASSWORD
        });
        // save the user we just created
        USER.save(function(err) {
            if (err) {
                return next(err);
            }
            // Respond to request indicating the user was created
            res.json({ message: "User created" });
        });
        
        
    });

};