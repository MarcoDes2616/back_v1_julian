const express = require('express');
const studentRouter = require('./students.routes');
const teacherRouter = require('./Teacher.routes');
const signatureRouter = require('./signature.routes');
const router = express.Router();

// colocar las rutas aquí
router.use("/dataStudent", studentRouter)

router.use("/dataTeacher", teacherRouter)

router.use("/Subject", signatureRouter)

module.exports = router;