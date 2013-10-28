//dependencies
var lib     = require("./lib");
var express = require("express");

/**
 * server.js
 * starts a server for sending applescript commands
 * @param {object} opts
 *   - {number} port - http port for server.
 *   - {bool}   web  - enable web interface.
 * @api public
 */

module.exports = function (opts, cb) {

    //variables
    var app     = express();
    var port    = opts.port || 9999;

    //serve web interface
    if (opts.web) {
        app.use(express.static(__dirname + "/public"));
    }

    //route for commands
    app.post("/:cmd", function (req, res) {
        var cmd = req.params.cmd;
        if (!lib[cmd]) return res.send(404);
        console.log('Command received: ', cmd);
        lib[cmd](function (err) {
            if (err) {
                res.send(500);
                return console.error("error", err);
            }
            res.send("ok");
        });
    });

    //start the web server
    app.listen(port, cb);
};