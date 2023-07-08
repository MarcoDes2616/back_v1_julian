const Signature = require("./Signature");
const Student_signature = require("./Student_signature");
const Students = require("./Students");
const Teacher = require("./Teacher");

Students.hasMany(Signature, {through: "studentCourses"})
Signature.hasMany(Students, {through: "studentCourses"})

Teacher.hasMany(Signature)
Signature.belongsTo(Teacher)