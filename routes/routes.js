'use strict';

module.exports = function (app) {
    
    // weather api route
    app.route('/')
        .get(function(req, res) {
            res.json({ Hello: "world" });
        });
    
};