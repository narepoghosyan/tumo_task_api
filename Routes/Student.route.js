const express = require('express');
const router = express.Router();

const Student = require('../Models/Student.model')

router.get('/', async (req, res, next) => {
    try {
       const results = await Student.find({}, {__v: 0});
       console.log(results);
       res.send(results);
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const student = new Student(req.body)
        const result = await student.save();
        console.log(result)
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
});

router.get('/:id', (req, res, next) => {
    res.send('Getting a single student')
});

router.patch('/:id', (req, res, next) => {
    res.send('Updating the student')
});

module.exports = router;