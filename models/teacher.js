const { DataTypes } = require('sequelize');
const db = require('../db');

const Teacher = db.define('teacher', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: DataTypes.STRING,
    allowNull: false,
      },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  num: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Teacher;