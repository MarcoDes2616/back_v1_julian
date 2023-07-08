const { getAll, create, getOne, remove, update } = require('../controllers/signature.controllers');
const express = require('express');

const signatureRouter = express.Router();

signatureRouter.route('/')
    .get(getAll)
    .post(create);

signatureRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = signatureRouter;