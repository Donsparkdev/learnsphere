const Course = require("../models/Course");

// Create Course
exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      ...req.body,
      instructor: req.user._id
    });

    res.status(201).json({
      message: "Course created successfully",
      course
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get All Courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate("instructor", "name email");

    res.json(courses);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get Single Course
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("instructor", "name email")
      .populate("lessons");

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    res.json(course);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Update Course
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    // Only the course owner or an admin can update
    if (
      course.instructor.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Course updated successfully",
      course: updatedCourse
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete Course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    if (
      course.instructor.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    await course.deleteOne();

    res.json({
      message: "Course deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
