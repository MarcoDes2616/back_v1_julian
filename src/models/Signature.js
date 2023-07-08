const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Signature = sequelize.define('signatures', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
},{
    timestamps: false
});

module.exports = Signature;