var express = require('express');
var app = express();
// var things = require('./things.js');
var thing23 = require('./routes/web.js');
app.use('/', thing23);
app.listen(8080);
app.set('view engine', 'pug');
app.set('views','./views');

var http = require('http');
var dbconn = require('./dbconnection');
