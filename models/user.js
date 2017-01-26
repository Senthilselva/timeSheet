'use strict';
var bcrypt = require('bcrypt-nodejs')

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true    
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: DataTypes.STRING,
    SSN: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    salt: {
      type: DataTypes.STRING
    },
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //User.hasMany(models.Schedule, {foreignKey: 'userId'});
        //User.hasMany(models.Timesheet, {foreignKey: 'userId'});
       }
    }
  },
  {
    dialect: 'mysql'
  }
);
  
 return User  
}
