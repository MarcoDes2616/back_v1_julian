const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Students = sequelize.define('students', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
},{
    timestamps: false
});

module.exports = Students;