var express = require('express');
var models  = require('../models');
var router  = express.Router();
var path = require('path');
var moment =require('moment')

router.get('/user/:userName', function(req,res) {
  console.log("inside user Schedule");
  console.log(JSON.stringify(req.params));
 	//console.log(req);

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
    }).then(function(data){
    var jobList = [];

    for(var i=0; i< data.length; i++){
    // console.log(data[i].startDate+" "+ 
    //             data[i].startDate+" "+
    //             data[i].Job.name);
    var job = {};
    job.id = data[i].id;
    job.startDate = moment(data[i].startDate).format('L');
    job.startTime = data[i].startTime;
    job.endTime = data[i].endTime;
    job.jobName = data[i].Job.name;
    job.jobAdd = data[i].Job.address;
    job.jobCity = data[i].Job.city;
    job.jobState = data[i].Job.state;
    job.jobZip = data[i].Job.zip;
    console.log(job);

    jobList.push(job)
  }
     res.json(jobList)
  })

});

module.exports = router;