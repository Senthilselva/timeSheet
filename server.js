//Dependencies
// ============
var express = require('express');
// instantiate our app
var app = express();

SALT_WORK_FACTOR = 12;   

var path = require('path');

var bodyParser = require('body-parser');
var passport = require('passport');
// pass passport for configuration

var setupPassport = require('./config/passport')(passport);

     app.use(passport.initialize());
     app.use(passport.session());

var session = require('express-session'); 
var methodOverride = require('method-override'); // for deletes in express

// Our model controllers (rather than routes)
var routes = require('./controllers/appController');
var user_controller = require('./controllers/userController');
var schedule_controller = require('./controllers/scheduleController');
var timesheet_controller = require('./controllers/timesheetController');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// override POST to have DELETE and PUT
app.use(methodOverride('_method'))

//allow sessions
app.use(session({ secret: 'app', 
    resave: false, saveUninitialized: false,
	cookie: { maxAge: 60000 }}));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/user', user_controller);
app.use('/schedule', schedule_controller);
app.use('/timesheet', timesheet_controller);

// we bring in the models we exported with index.js
var models = require("./models");
// we set the port of the app
app.set('port', process.env.PORT || 3000);


//Initialize the database with test data
var initdb = require("./db/init.js");

 var server = app.listen(app.get('port'), function() {
  	// then save a log of the listening to our debugger.
    console.log('----- Express server listening on port ' + server.address().port);
  });
