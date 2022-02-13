const CourseController = require("../Controller/CourseController.js");

const CourseRouter = require("express").Router();
CourseRouter.route("/")
  .get(CourseController.getCourseList)
  .post(CourseController.addCourse);
CourseRouter.route("/:courseId")
  .get(CourseController.getCourseById)
  .put(CourseController.updateCourse)
  .delete(CourseController.deleteCourseById);
CourseRouter.route("/:courseId/AssumedKnowledge")
  .get(CourseController.getAssumedKnowledge)
  .post(CourseController.addAssumedKnowledge)
  .delete(CourseController.deleteAssumedKnowledge);
CourseRouter.route("/:courseId/Availability")
  .get(CourseController.getCourseAvailability)
  .post(CourseController.addCourseAvailability)
  .delete(CourseController.deleteCourseAvailability);
module.exports = CourseRouter;
