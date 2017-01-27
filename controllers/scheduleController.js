var express = require('express');
var models  = require('../models');
var router  = express.Router();
var path = require('path');
var dateFormat = require('dateformat');
var today = new Date();

//Returns all the Jobs for a given User
router.get('/user/:userName', function(req,res) {
  console.log("Returning all the Jobs for a given User", req.params);

  models.Schedule.findAll({ 
    include: [
      { 
        model : models.User,
        where: { username: req.params.userName} 
      },
      {
        model:  models.Job 
      }
    ],
  where: 
    { 
      startDate:
      {
        $gte: today
      }
    },
  order: 'startDate, startTime'

  }).then(function(data){
    var jobList = [];

    for(var i=0; i< data.length; i++){
      var job = {};
        job.id = data[i].id;
        job.startDate = dateFormat(data[i].startDate, "isoDateTime");
        job.startTime = data[i].startTime;
        job.endTime = data[i].endTime;
        job.jobName = data[i].Job.name;
        job.jobAdd = data[i].Job.address;
        job.jobCity = data[i].Job.city;
        job.jobState = data[i].Job.state;
        job.jobZip = data[i].Job.zip;
        

        jobList.push(job)
      }
     res.json(jobList)
  })

});

//Returns a Schedule for a given Id
router.get('/schedule/:scheduleId', function(req,res) {
  console.log("Returning a Schedule for an Id", req.params);
  var vSchId = req.params.scheduleId;

  models.Schedule.findOne({
    include: [
        { 
          model : models.User
        },
        {
          model:  models.Job 
        }
      ],
    where: {
      id : vSchId
    }
  }).then(function(data){
   
  console.log(JSON.stringify(data));
  var vSchedule = {};
    vSchedule.id = data.id;
    vSchedule.startDate =data.startDate;
    vSchedule.startTime = data.startTime;
    vSchedule.endTime = data.endTime;
    vSchedule.JobId = data.JobId;
    vSchedule.UserId = data.UserId;
    vSchedule.jobname =data.Job.name;
    vSchedule.jobcity =data.Job.city;
    vSchedule.joblat = data.Job.lat;
    vSchedule.joblng = data.Job.lng;
    vSchedule.firstname = data.User.firstname;
    
    res.json(vSchedule);
  })
});


//Returns a User's Schedule for Today
router.get('/user/today/:userName', function(req,res) {
  console.log("Returning a User's Schedule for Today", req.params);
  var today = new Date();
  today = dateFormat(today, "fullDate");
  console.log("Today's date ------------", today);

  models.Schedule.findAll(
    { include: [
      { 
        model : models.User,
        where: { username: req.params.userName} 
      },
      {
        model:  models.Job 
      }
    ] 
    //,
    //where: 
    //{ startDate: today }

  }).then(function(data){

  var jobList = [];

  for(var i=0; i< data.length; i++){
    var job = {};
    job.id = data[i].id;
      job.startTime = data[i].startTime;
      job.endTime = data[i].endTime;
      job.jobName = data[i].Job.name;
      job.jobAdd = data[i].Job.address;
      job.jobCity = data[i].Job.city;
      job.jobState = data[i].Job.state;
      job.jobZip = data[i].Job.zip;
    job.startDate = dateFormat(data[i].startDate, "fullDate");
    if( today == job.startDate ) jobList.push(job)
  }
     res.json(jobList)
  })
});

//Returns a User's Schedule for a given Date
router.get('/userforday/:userName/:searchDate', function(req,res) {   
  console.log(" ZZZZZZ Returning a User's Schedule for a given Date", req.params.searchDate);

  models.Schedule.findAll(
    { include: [
      { 
        model : models.User,
        where: { username: req.params.userName} 
      },
      {
        model:  models.Job 
      }
    ] ,
    where: 
    { startDate: req.params.searchDate }

  }).then(function(data){

    var jobList = [];
    var dateneeded = dateFormat(req.params.searchDate, "mm-dd-yy");

    for(var i=0; i< data.length; i++){
      var job = {};
      job.id = data[i].id;
      job.startTime = data[i].startTime;
      job.endTime = data[i].endTime;
      job.jobName = data[i].Job.name;
      job.jobAdd = data[i].Job.address;
      job.jobCity = data[i].Job.city;
      job.jobState = data[i].Job.state;
      job.jobZip = data[i].Job.zip;
      job.startDate = dateFormat(data[i].startDate, "mm-dd-yy");
           
      jobList.push(job)
    }
      //console.log(jobList)
       res.json(jobList)
  })
});

router.get('/days/user/:userName', function(req,res) {   
  
  var dateneeded = dateFormat(req.params.searchDate, "mm-dd-yy");
  console.log("Returning the days User is Schedule", req.params);
  models.Schedule.findAll(
    { include: [
      { 
        model : models.User,
        where: { username: req.params.userName} 
      }
    ] ,
    where: 
    { 
      startDate:
      {
        $gte: today
      }
    },
    group: 'startDate',


  }).then(function(data){
    console.log(JSON.stringify(data));
    var dateList = [];
    for(var i=0; i< data.length; i++){
      var _date = {}; 
      _date.startDate = dateFormat(data[i].startDate, "isoDateTime");
      dateList.push(_date);
    }
       res.json(dateList);
  })
});


module.exports = router;