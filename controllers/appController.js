var express = require('express');
var path = require('path');
var router = express.Router();

//Models
var Company = require('../models/')["Company"];
var User = require('../models/')["User"];
var Job = require('../models/')["Job"];
//var Schedule = require ('../models/')["Schedule"];
//var Timesheet = require ('../models/') ["Timesheet"];

var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var renderJSON = false;

if (config.renderJSON == "1") {
  renderJSON = true;
}

console.log('appController running');

router.get('/', function(req, res) {
    res.redirect('/home');
});

router.get('/home', function(req, res) {
    User.findAll()
    .then(function(data){
        res.render('index', {test: data});
    });
});

router.get('/currentuser', function (req, res){
  var profile = {
    role: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: ""
  };

  User.findOne({where: { id:userID} })
      .then(function(data){ 
        if (renderJSON) {
          res.json(data);
        } else {
          profile.role = data.role;
          profile.firstname = data.firstname;
          profile.lastname = data.lastname;
          profile.username = data.username;
          profile.email = data.email;
          profile.address = data.address;
          profile.city = data.city;
          profile.state = data.state;
          profile.zip = data.zip;
          profile.phone = data.phone;
          res.render('editprofile', {id:userID, profile:profile});
        }
    });
 });

router.get('/currentuser/:id', function (req, res){
    console.log("Getting user profile for userId: " + req.params.id);
    User.findOne({where: {userId:req.params.id} })
      .then(function(data){ 
          res.json(data);
    });
});


router.get('/editprofile/:id', function(req, res) {
          res.json(data);

        if (renderJSON) {
          res.json(data);
        } else {
          res.render('editprofile', {id:userID});
        }
});

router.get('/editprofile', function(req, res) {
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('editprofile', {id:userID});
        }
});

router.delete('/user/delete', function (req, res) {
    User.destroy({where: {id: userID}})
    .then(function(){
        //res.redirect('/');
    });
});


/////SIGNUP////
//router.get('/signup', signupController.show);
//router.post('/signup', signupController.signup);

////LOGOUT///
// router.get('/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// });


/////OTHER///////
//This will return all of the information in the User table
router.get("/users", function(req, res) {
    User.findAll()
      .then(function(data){
        if (renderJSON) {
          res.json(data);
        } else {
          res.render('user', {user: data});          
        }
    });
});

//This will add a new record to the Job table
router.post('/job/create', function(req, res) {
    Skill.create({skillName: req.body.skillName})
    .then(function() {
        if (renderJSON) {
          console.log('skill ' + req.body.name + ' added.');
        } else {
          res.redirect('/jobs');
        }
    });
});

module.exports = router;
