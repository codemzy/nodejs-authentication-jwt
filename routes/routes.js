'use strict';
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: true });

// controllers
const Authentication = require('../controllers/authentication');

module.exports = function (app) {
    
    // 
    app.route('/signup')
        // to recieve post requests from signup form
        .post(parseUrlencoded, Authentication.signup);
};