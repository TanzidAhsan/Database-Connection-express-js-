const { DataTypes } = require('sequelize');
const db = require('../db');

const User = db.define('User', {
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
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;