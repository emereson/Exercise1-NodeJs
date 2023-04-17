const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Repair = db.define('repairs', {
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
  status: {
    type: DataTypes.ENUM('completed', 'cancelled', 'pending'),
    allowNull: false,
    defaultValue: 'pending',
  },
  userId: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull: false,
  },
});
module.exports = Repair;
