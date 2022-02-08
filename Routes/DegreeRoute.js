const DegreeController = require("../Controller/DegreeController");

const DegreeRouter = require("express").Router();
DegreeRouter.get("/", DegreeController.getDegree);

module.exports = DegreeRouter;
