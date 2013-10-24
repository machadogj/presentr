//dependencies
var lib     = require('./lib');
var express = require('express');
var app     = express();

//static content
app.use(express.static(__dirname + '/public'));

app.post('/next', function (req, res) {
    console.log('next');
    lib.next(function (err) {
        if (err) {
            res.send(500);
            console.error('error', err);
            return;
        }
        res.send('ok');
    });
});

app.post('/prev', function (req, res) {
    console.log('prev');
    lib.prev(function (err) {
        if (err) {
            res.send(500);
            console.error('error', err);
            return;
        }
        res.send('ok');
    });
});

app.listen(9999);
console.log('listening on port', 9999);