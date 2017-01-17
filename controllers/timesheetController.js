var express = require('express');
var models  = require('../models');
var router  = express.Router();
var path = require('path');
var moment =require('moment');

router.post("/create", function(req,res){
	console.log("inside time sheet");
  // console.log(JSON.stringify(req.body));
  var newtimesheet = {};
  newtimesheet.JobId = req.body.JobId;
  newtimesheet.UserId = req.body.UserId;
  //newtimesheet.clockedInDate = moment(req.body.clockIn).format('MM DD YYYY');
  //newtimesheet.clockedIn = moment(req.body.clockIn).format('LT');
  newtimesheet.clockedInDate = new Date(req.body.clockIn);
  newtimesheet.clockedIn = new Date(req.body.clockIn);

 // console.log(JSON.stringify(newtimesheet));

  models.Timesheet.create(newtimesheet).then(function(data){
    console.log("created data ")
  	//console.log(data)
  	res.json(data)
  });
  //res.json(req.body);
})

module.exports = router;