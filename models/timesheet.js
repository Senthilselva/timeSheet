'use strict';
module.exports = function(sequelize, DataTypes) {
  var Timesheet = sequelize.define('Timesheet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true    
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    clockedIn: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    clockedOut: {
      type: DataTypes.TIME,
      allowNull: false,
    }
  },
  {
    paranoid: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Timesheet.belongsTo(models.Job, {
          onDelete: "CASCADE",
          hooks: true,
          foreignKey: {
            allowNull: false
          }
        })
        Timesheet.belongsTo(models.User,{
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }//associate
    }
  });
  return Timesheet;
};