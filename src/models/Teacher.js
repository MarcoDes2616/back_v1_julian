const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Teacher = sequelize.define('teachers', {
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      numId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
},{
    timestamps: false
});

module.exports = Teacher ;