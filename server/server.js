//server.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database'); //the db config file
var User require('./app/models/user'); // the mongoose DB model
var port = process.env.PORT || 8080
var jwt = require('jwt-simple');

//The request params
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//log to console
app.use(morgan('dev'));

//use the passport package for the application
app.use(passport.initialize());

//demo route just to get going
// GET: http://localhost:8080
app.get('/', function(req, res){
	res.send('Hello world. http://localhost:' + port + '/api');
});

// Start the server
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);