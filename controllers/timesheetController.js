var express = require('express');
var models  = require('../models');
var router  = express.Router();
var path = require('path');
var moment =require('moment');

router.post("/create", function(req,res){
	console.log("inside time sheet");
  console.log(JSON.stringify(req.body));
  res.json(req.body);
})

module.exports = router;