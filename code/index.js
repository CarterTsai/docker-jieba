var nodejieba = require("nodejieba");

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var result = nodejieba.cut("南京市长江大桥");
  res.send(result);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
