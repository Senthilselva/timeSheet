'use strict';
module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define('Job', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true    
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
    contactname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactphone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactemail: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      }
    },
  },
  {
    paranoid: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Job.hasMany(models.Schedule, {
          onDelete: "CASCADE",
          hooks: true,
          foreignKey: {
            allowNull: false
          }
        })
      }//associate
    }
  });
  return Job;
};