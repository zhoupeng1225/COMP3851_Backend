const DegreeController = require("../Controller/DegreeController");
const authenticate = require("../Middleware/authenticate");
const DegreeRouter = require("express").Router();
DegreeRouter.get("/:degreeId", DegreeController.getDegreeById);
DegreeRouter.route("/")
  .get(DegreeController.getDegreeByCampus)
  .post(authenticate, DegreeController.addDegree)
  .put(authenticate, DegreeController.updateDegree);
DegreeRouter.route("/:degreeId/course")
  .get(DegreeController.getDegreeCourse)
  .post(authenticate, DegreeController.addDegreeCourse)
  .delete(authenticate, DegreeController.deleteDegreeCourse);
module.exports = DegreeRouter;
