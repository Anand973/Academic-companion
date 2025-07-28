const express = require('express');
const router = express.Router();
const courseController = require('../controller/coursecontroller');

router.get('/courses', courseController.getAllCourses);
router.post('/courses', courseController.createCourse);

module.exports = router;