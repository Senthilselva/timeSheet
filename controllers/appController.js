
// //Models
// var Company = require('../models/')["Company"];
// var User = require('../models/')["User"];
// var Job = require('../models/')["Job"];
// //var Schedule = require ('../models/')["Schedule"];
// //var Timesheet = require ('../models/') ["Timesheet"];

//require express and path
var express = require('express');
var path = require('path');
var router  = express.Router();

// console.log('appController running');

router.get('/', function(req, res) {
    res.sendFile(__dirname + "/../public/index.html");
});

router.get('/register',function(req,res){
	res.sendFile(__dirname + "/../public/register.html")
})

module.exports = router;
