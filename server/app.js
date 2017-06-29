var express = require('express');
var app = express();
var randomNumber = require('./public/scripts/randomNumber.js');


app.get('/randomNumber', function(req, res){

  res.send(randomNumber(100, 10000).toString());
});


var path = require('path');
app.get('/*', function(req, res){
  console.log('something is happening');

var file = req.params[0] || '/views/index.html';
res.sendFile(path.join(__dirname, "/public/", file));

});

app.listen(5000, function(){
  console.log('listening on port 5000');
});
