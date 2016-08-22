'use strict';

// controllers
const Authentication = require('../controllers/authentication');

module.exports = function (app) {
    
    // 
    app.route('/signup')
        .post(Authentication.signup);
    
};