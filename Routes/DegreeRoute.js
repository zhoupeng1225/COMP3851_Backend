const DegreeController = require("../Controller/DegreeController");

const DegreeRouter = require("express").Router();
DegreeRouter.get("/:degreeId", DegreeController.getDegreeById);
DegreeRouter.route("/")
  .get(DegreeController.getDegreeByCampus)
  .post(DegreeController.addDegree);

module.exports = DegreeRouter;
