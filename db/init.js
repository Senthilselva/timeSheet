var express = require('express');
var app = express();
var sequelize = require('sequelize');
var models = require('../models');
var conn = models.sequelize;

console.log('Initializing DB');

// =======================================================================
// Prepare Tables 
// =======================================================================
conn.query('SET FOREIGN_KEY_CHECKS = 0')

.then(function(){
	return conn.sync({force:true});
})

// =======================================================================
// Add Users 
// =======================================================================
.then(function(){
	return models.User.create(
	{
		role: "Admin",
		firstname: "Gracie",
		lastname: "Diaz",
		username: "gudiaz",
		email: "gudiaz@msn.com",
		address: "123 Paradise Ln",
		city: "Heaven",
		state: "NJ",
		zip: "08812",
		phone: "732-979-7252"
	});
})

// =======================================================================
// Add Company 
// =======================================================================
.then(function(){
	return models.Company.create(
	{
		name: "Loeffler Pools",
		address: "7 Ridge Road",
		city: "Green Brook",
		state: "NJ",
		zip: "08812",
		contactname: "Tom Loeffler",
		contactphone: "732-968-8069",
		contactemail: "LoefflerPools@gmail.com"
	});
})

// =======================================================================
// Add Jobs 
// =======================================================================
.then(function(){
	return models.Job.create(
	{
		name: "Trump National Golf Club",
		address: "900 Lamington Rd",
		city: "Bedminster Township",
		state: "NJ",
		zip: "07921",
		contactname: "Camille Loeffler",
		contactphone: "732-968-8069",
		contactemail: "LoefflerPools@gmail.com"
	});
})

.then(function(){
	return models.Job.create(
	{
		name: "Maplewood Country Club",
		address: "28 Baker St",
		city: "Maplewood",
		state: "NJ",
		zip: "07040",
		contactname: "Camille Loeffler",
		contactphone: "732-968-8069",
		contactemail: "LoefflerPools@msn.com"
	});
})

