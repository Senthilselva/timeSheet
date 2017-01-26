'use strict';
module.exports = function(sequelize, DataTypes) {
  var Companys = sequelize.define('Company', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true    
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    contactName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactPhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      }
    },
  },
  {
    paranoid: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //Company.hasMany(models.Job, {foreignKey: 'jobId'});
        //Company.hasMany(models.Schedule, {foreignKey: 'scheduleId'});
       }
    }
  });
  return Companys;
};