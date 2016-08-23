'use strict';
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// controllers
const Authentication = require('../controllers/authentication');

module.exports = function (app) {
    
    // take user data and create user in DB
    app.route('/signup')
        // to recieve post requests from signup form
        .post(jsonParser, Authentication.signup);
};