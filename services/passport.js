const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

require('dotenv').config();
const secret = process.env.SECRET_STR;

// Set up options for JWT strategy
const jwtOptions = {};

// Create JWT strategy
// payload is the token (sub) and timestamp (iat)
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // see if the user ID in the payload exists in our database
    // if it does call done with that user
    // otherwise call done without a user object
    User.findById(payload.sub, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

// Tell passport to use this strategy

