//Express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ControllerCore = require('../controllers/ControllerCore.js');
var conCore = new ControllerCore();

//User app
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

//App
// app.all('*',conCore.getStatusToken);


//Cors
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  // Set to true if you need the website to include cookies in the requests sent
  res.setHeader('Access-Control-Allow-Credentials', true);
  //Accepth atuh

  // Pass to next layer of middleware
  next();
});

//Request binds
app.use('/mi-servicio', require('./menu_routes'));
app.use('/form', require('./form_routes'));

//Export
module.exports = app;
