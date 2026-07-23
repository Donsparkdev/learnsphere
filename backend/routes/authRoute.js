const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
  createCourse,
  getCourses,
  getCourse
} = require("../controllers/courseController");

// Public routes
router.get("/", getCourses);
router.get("/:id", getCourse);

// Protected route (Instructor/Admin only)
router.post(
  "/",
  protect,
  authorize("instructor", "admin"),
  createCourse
);

module.exports = router;
