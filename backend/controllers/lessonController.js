const Lesson = require("../models/Lesson");
const Course = require("../models/Course");

// Create Lesson
exports.createLesson = async (req, res) => {
  try {
    const { course, title, duration } = req.body;

    // Check if course exists
    const existingCourse = await Course.findById(course);

    if (!existingCourse) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    const lesson = await Lesson.create({
      course,
      title,
      duration,
      order: req.body.order || 1
    });

    res.status(201).json({
      message: "Lesson created successfully",
      lesson
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
