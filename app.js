var express = require('express');
var app = express();
var code = require('./script');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.all('/script', function (req, res) {
  try {
    return code(req, res);
  }catch(e) {
    res.status(500).text(e);
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
