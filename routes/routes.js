'use strict';

// controllers
const Authentication = require('../controllers/authentication');

module.exports = function (app) {
    
    // 
    app.route('/signup')
        // to recieve post requests from signup form
        .post(Authentication.signup)
        // just to test if working
        .get(Authentication.signup);
};