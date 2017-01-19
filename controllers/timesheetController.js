var express = require('express');
var models  = require('../models');
var router  = express.Router();
var path = require('path');
var moment =require('moment');

//enter a new record into the timesheet table with out the end time
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
  
  var cardId = req.body.cardId;
  var clockOut = new Date(req.body.clockOut);

    models.Timesheet.update({
      clockedOut : clockOut
    }, {
      where: {
       id : cardId
        }
    }).then(function(data,err){
    console.log("updated")
    console.log(JSON.stringify(data));
      res.json(data)
  })

  });

router.get('/user/:userName', function(req,res) {
  console.log("inside user Timesheets");
  console.log(JSON.stringify(req.params));
  //console.log(req);

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
    // console.log(JSON.stringify(data[0]));

    for(var i=0; i< data.length; i++){
    // console.log(data[i].startDate+" "+ 
    //             data[i].startDate+" "+
    //             data[i].Job.name);
    var job = {};
    job.id = data[i].id;
    job.clockedInDate = moment(data[i].clockedInDate).format('L');
    job.clockIn = data[i].clockedIn;
    job.clockOut = data[i].clockedOut;
    job.jobName = data[i].Job.name;
    
    console.log(job);

    jobList.push(job)
  }
     res.json(jobList)
  })

});


module.exports = router;