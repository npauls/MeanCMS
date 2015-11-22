//modules =====================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//configuration ===============================

//config files
var db = require('./config/db');

//set port
var port = process.env.PORT || 8080;

//connect to mongoDB
//mongoose.connect(db.url);

//get data from body (POST) parameters
//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//override with x-http-method-override header in request
app.use(methodOverride('X-HTTP-Method-Override'));

//set static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));


//routes ====================================
require('./backend/routes')(app);

//start app =================================
app.listen(port);
console.log('Its going down on port: ' + port);

//expose app
exports = module.exports = app;
