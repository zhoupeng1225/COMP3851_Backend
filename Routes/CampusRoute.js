const CampusController = require("../Controller/CampusController");
const authenticate = require("../Middleware/authenticate");
const CampusRouter = require("express").Router();

CampusRouter.route("/")
  .get(CampusController.getCampus)
  .post(authenticate, CampusController.addCampus);
CampusRouter.route("/:campusId/degree")
  .post(authenticate, CampusController.addDegreeToCampus)
  .delete(authenticate, CampusController.deleteDegreeFromCampus);
module.exports = CampusRouter;
