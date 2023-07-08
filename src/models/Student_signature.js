const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Student_signature = sequelize.define('student_signature', {
    signatureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    academic_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    grade: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
},{
    timestamps: false
});

module.exports = Student_signature;