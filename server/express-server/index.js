var express = require('express');
var app = express();

var port, i = process.argv.indexOf('--port');
if(i>-1) {
    port = process.argv[i+1];
} else {
  port = 3000;
}

app.get('/api', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: 'cross origin /api reached!' }));
});

app.get('/api/test', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: 'cross origin /api/test reached!' }));
});

app.get('/sap', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: 'cross origin /sap reached!' }));
});

app.get('/tas', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: 'cross origin /tas reached!' }));
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});