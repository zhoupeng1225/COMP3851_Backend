const AdminController = require("../Controller/AdminController.js");

const AdminRouter = require("express").Router();

AdminRouter.route("/login").post(AdminController.adminLogin);

module.exports = AdminRouter;
