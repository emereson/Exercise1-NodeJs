const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Repair = db.define('repair', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.TEXT,
    defaultValue: '',
    allowNull: false,
  },
  motorsNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desciption: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('completed', 'cancelled', 'pending'),
    allowNull: false,
    defaultValue: 'pending',
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
module.exports = Repair;
