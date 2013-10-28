//dependencies
var applescript = require("applescript");
var path        = require("path");
var script      = require("fs").readFileSync;
var scriptPath  = path.join.bind(path, __dirname, "scripts");

// commands
var next = script(scriptPath("next.applescript"));
var prev = script(scriptPath("previous.applescript"));

//exports
module.exports = {
    next: applescript.execString.bind(applescript, next),
    prev: applescript.execString.bind(applescript, prev)
};