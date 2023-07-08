const catchError = require('../utils/catchError');
const Students = require('../models/Students');
const Signature = require('../models/Signature');

const getAll = catchError(async(req, res) => {
    const results = await Students.findAll({
        include: {
            model: Signature,
            attributes: ["name"]
        }
    });
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Students.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Students.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Students.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Students.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setStudentsCourses = catchError(async(req, res) => {
    const {id} = req.params;
    const student = await Students.findByPk(id)
    await student.setSignature(req.body)
    const courses = await student.getSignature()
    res.status(201).json(courses)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setStudentsCourses
}