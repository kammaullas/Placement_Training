const express =
require("express");

const router =
express.Router();

const {
  getCourses,
  getAllCourses,
  addCourse,
  deleteCourse
} = require("../controllers/courseController");

const { protect } = require("../middleware/authMiddleware");

router.route("/all").get(getAllCourses);

router.route("/")
  .get(protect, getCourses)
  .post(protect, addCourse);

router.route("/:id")
  .delete(protect, deleteCourse);

module.exports = router;
