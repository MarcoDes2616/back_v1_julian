const { getAll, create, getOne, remove, update } = require('../controllers/teacher.controllers');
const express = require('express');

const teacherRouter = express.Router();

teacherRouter.route('/')
    .get(getAll)
    .post(create);

teacherRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = teacherRouter;