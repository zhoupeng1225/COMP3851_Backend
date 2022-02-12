const DegreeController = require("../Controller/DegreeController");

const DegreeRouter = require("express").Router();
DegreeRouter.get("/:degreeId", DegreeController.getDegreeById);
DegreeRouter.route("/")
  .get(DegreeController.getDegreeByCampus)
  .post(DegreeController.addDegree)
  .put(DegreeController.updateDegree);
DegreeRouter.route("/:degreeId/course")
  .get(DegreeController.getDegreeCourse)
  .post(DegreeController.addDegreeCourse)
  .delete(DegreeController.deleteDegreeCourse);
module.exports = DegreeRouter;
