var express = require('express');
var models  = require('../models');
var router  = express.Router();
var path = require('path');
var moment =require('moment');
var dateFormat = require('dateformat');

//enter a new record into the timesheet table with out the end time
router.post("/create", function(req,res){
  var newtimesheet = {};
  newtimesheet.JobId = req.body.JobId;
  newtimesheet.UserId = req.body.UserId;
  newtimesheet.clockedInDate = new Date(req.body.clockIn);

  newtimesheet.clockedIn = new Date(req.body.clockIn);
  newtimesheet.clockedIn = dateFormat(newtimesheet.clockedIn, "hh:MM");
  models.Timesheet.create(newtimesheet).then(function(data){
    // create a row in the database
    res.json(data)
  });
 
})

router.post("/update", function(req,res){
  var cardId = req.body.cardId;
  var clockOut = new Date(req.body.clockOut);
  clockOut = dateFormat(clockOut, "hh:MM");
    models.Timesheet.update({
      clockedOut : clockOut
    }, {
      where: {
       id : cardId
        }
    }).then(function(data,err){
    
      res.json(data)
  })

  });

router.get('/user/:userName', function(req,res) {
    console.log("timesheet/userName  :"+req.params.userName )
    models.Timesheet.findAll(
      { include: [
        { 
          model : models.User,
          where: { username: req.params.userName} 
        },
        {
          model:  models.Job 
        }
      ]
    }).then(function(data){
      var jobList = [];
      for(var i=0; i< data.length; i++){
        var job = {};
        job.id = data[i].id;
        job.clockedInDate = data[i].clockedInDate;
        job.clockIn = data[i].clockedIn;
        job.clockOut = data[i].clockedOut;
        job.reason = data[i].validEntry;
        job.jobName = data[i].Job.name;
        jobList.push(job)
    }
    res.json(jobList)
  })
});//get('/user/:userName')

router.post('/invalid/', function(req,res){
  var cardId = req.body.cardId;
  var newString = req.body.reason;

  models.Timesheet.update({
    validEntry: newString
  }, {
    where: {
     id : cardId
    }
  }).then(function(data,err){
    res.json(data)
  })

})//invalid


//Get total number of hours worked
router.get('/totalhours/:userName', function(req,res) {
    console.log("timesheet/totalhours  :"+req.params.userName )
    models.Timesheet.findAll(
      { include: [
        { 
          model : models.User,
          where: { username: req.params.userName} 
        },
        {
          model:  models.Job 
        }
      ]
    }).then(function(data){
      var hoursworked = 0;
      for(var i=0; i< data.length; i++){
        //console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh clockOut" + data[i].clockedOut )
        //console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh clockedIn" + data[i].clockedIn )
        var clockedOut = data[i].clockedOut;
        //console.log("dddddddddddddddddddddddddddddd"+ moment.duration(clockedOut.diff(data[i].clockedIn)))
        hoursworked = hoursworked + (data[i].clockedOut-data[i].clockedIn)
      }
      //console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" + hoursworked )
      res.json(hoursworked);
    })
});//get('/getTotalHoursWorked/:userName')

module.exports = router;