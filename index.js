var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello ProjectJS" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "ProjectJS 2" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "Great!, ProjectJS 3 " }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
