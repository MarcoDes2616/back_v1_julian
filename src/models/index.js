const Signature = require("./Signature");
const Student_signature = require("./Student_signature");
const Students = require("./Students");
const Teacher = require("./Teacher");

Students.hasMany(Student_signature, { foreignKey: "studentId" })
Signature.hasMany(Student_signature, { foreignKey: "signatureId" })

Teacher.hasMany(Signature)
Signature.belongsTo(Teacher)