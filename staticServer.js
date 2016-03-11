var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.prod');
var favicon = require('serve-favicon');

var app = express();
var compiler = webpack(config);

compiler.run(function(err, stats) {
  if (err) {
    console.error(err);
  }
});


app.use(express.static(__dirname));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '404.html'));
});

var port = process.env.PORT || 3000;

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at on port ' + port);
});
