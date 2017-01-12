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
 	console.log(JSON.stringify(req.body));

  var newUser = req.body
 	var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(newUser.password, salt);
  console.log("here" + salt)

  newUser.salt = salt;
  newUser.password= hashedPassword;

  console.log(JSON.stringify(req.body));


  	models.User.create(newUser).then(function(){
  		console.log("Employee Created")
  		res.send("Employee Created")
  	}).catch(function(error) {
    //req.flash('error', "Please, choose a different username.")
    console.log(error)
    res.send("error");
  })

});

router.post('/login', 
  passport.authenticate('local', { passReqToCallback : true } ),
  // passport.authenticate('local', { failureRedirect: '/register' , failureFlash: true}),
  function(req, res) {
    console.log(JSON.stringify("user contoller" + req.user));
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