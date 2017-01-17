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

router.post("/update", function(req,res){
  console.log("inside time sheet update");
  console.log(JSON.stringify(req.body));
  var userId= req.body.userId;
  var jobId = req.body.jobId;
  var clockOut = new Date(req.body.clockOut);

  models.Timesheet.update({
    clockedOut : clockOut
  }, {
    where: {
      JobId : jobId,
      UserId : userId
      }
  }).then(function(data,err){
    console.log("updated")
    console.log(JSON.stringify(data))
  })

  });

module.exports = router;