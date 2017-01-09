var express = require('express');
var bcrypt = require('bcryptjs');
var models  = require('../models');
var router  = express.Router();
var path = require('path');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var setupPassport = require('../config/passport'),
    flash = require('connect-flash');

router.post('/create', function(req,res) {
	console.log("inside create");
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var userName = req.body.email;
	var address = req.body.address;
	var password =req.body.password;
	console.log(firstName)
	var salt = bcrypt.genSaltSync(10);
  	var hashedPassword = bcrypt.hashSync(password, salt);
console.log("here" + salt)

  	var newEmployee = {
  		firstName : firstName,
  		lastName : lastName,
  		userName : userName,
  		salt : salt,
  		password : hashedPassword
  	}
  	console.log(JSON.stringify(newEmployee))
  	models.Employee.create(newEmployee).then(function(){
  		console.log("Employee Created")
  		res.send("Employee Created")
  	}).catch(function(error) {
    //req.flash('error', "Please, choose a different username.")
    console.log(error)
    res.send("error");
  })

});

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/register' , failureFlash: true}),
  // passport.authenticate('local', { failureRedirect: '/register' , failureFlash: true}),
  function(req, res) {
    console.log(JSON.stringify(req.user));
    //console.log(JSON.stringify(res))
    res.json(req.user);
  });


function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.send('not logged in');
}

router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
module.exports = router;