var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var request = require("request");


var app = express();


app.disable('etag');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('trust proxy', true);



//Define local directories to find files
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/api" , express.static(__dirname + '/api'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/lib", express.static(__dirname + '/lib'));
app.use("/fonts", express.static(__dirname + '/fonts'));


//Enables body-parser
app.use(bodyParser.urlencoded({extended: true}));


//Main page, authentication required, will add function to check if user exists in database.
app.get('/', function (req, res) {
    res.sendfile('./views/index.html');
});


//var username;

//Grab user's data stored on user
//Display results on info


app.get('/user', function(req,res){
  var username = req.body.username;
  request({
    url: "http://projects.saltor.nyc:3030/player/ExRuneSlayer",
    json: true
  }, function(error, response,body){
    if(!error && response.statusCode === 200){
      console.log(body);
      res.send(body);
    }
  });
  console.log(username);
  //res.send();
});

app.get('/info', function(req,res){
  res.sendfile('./views/sample.html');
});




// Basic 404 handler
app.use(function (req, res) {
  res.status(404).send('Not Found');
});

// Basic error handler
app.use(function (err, req, res, next) {
  /* jshint unused:false */
  console.error(err);
  // If our routes specified a specific response, then send that. Otherwise,
  // send a generic message so as not to leak anything.
  res.status(500).send(err.response || 'Something broke!');
});

if (module === require.main) {
  // Start the server
  var server = app.listen(8080, function () {
    var port = server.address().port;
    console.log('App listening on port %s', port);
  });
}

module.exports = app;

