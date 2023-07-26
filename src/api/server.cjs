var express = require('express');
var path = require('path');
var app = express();
app.listen(3000, function () {
    console.log('App\'s running on port 3000');
});
app.get('/', function (req, res) {
    res.sendFile(path.resolve("../routes/+page.svelte"), { root: __dirname });
});

app.post('/api', function (req, res) {
    console.log(req.body);
});
