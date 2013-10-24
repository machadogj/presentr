//dependencies
var applescript = require("applescript");
var fs          = require("fs");
var path        = require("path");

// commands
var next = fs.readFileSync(path.join(__dirname, 'next.applescript'), 'utf8');
var prev = fs.readFileSync(path.join(__dirname, 'previous.applescript'), 'utf8');

//exports
module.exports = {
    next: applescript.execString.bind(applescript, next),
    prev: applescript.execString.bind(applescript, prev)
};