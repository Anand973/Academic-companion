const Course = require('../models/course');


exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.render('courses', { courses });
  } catch (err) {
    res.status(500).send('Error fetching courses');
  }
};


exports.createCourse = async (req, res) => {
  try {
    const { name, instructor } = req.body;
    await Course.create({ name, instructor });
    res.redirect('/courses');
  } catch (err) {
    res.status(500).send('Error creating course');
  }
};
