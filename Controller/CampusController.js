const { poolPromise, sql } = require("../database.js");
class CampusController {
  static async getCampus(req, res, next) {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query("SELECT * FROM Campus");
      const { recordset, rowsAffected } = result;

      res.json({ result: recordset, rowsAffected: rowsAffected[0] });
    } catch (error) {
      res.status(404).json({ status: "failed", error: error.message });
    }
  }
  static async addCampus(req, res, next) {
    try {
      const { campusId, campusName } = req.body;
      const pool = await poolPromise;

      const result = await pool
        .request()
        .input("Campus_Id", campusId)
        .input("Campus_Name", campusName)
        .query("INSERT INTO Campus VALUES(@Campus_Id,@Campus_Name)");
      res.json({ status: "success" });
    } catch (error) {
      res.status(409).json({ status: "failed", error: error.message });
    }
  }
  static async addDegreeToCampus(req, res, next) {
    try {
      const campusId = req.params.campusId;
      const degreeId = req.body.degreeId;
      const pool = await poolPromise;
      const result = await pool
        .request()
        .input("Campus_Id", campusId)
        .input("Degree_Id", degreeId)
        .query("INSERT INTO Campus_Degree VALUES(@Degree_Id,@Campus_Id)");
      res.json({ status: "success" });
    } catch (error) {
      res.status(409).json({ status: "failed", error: error.message });
    }
  }
  static async deleteDegreeFromCampus(req, res, next) {
    try {
      const campusId = req.params.campusId;
      const degreeId = req.body.degreeId;
      const pool = await poolPromise;
      const result = await pool
        .request()
        .input("Campus_Id", campusId)
        .input("Degree_Id", degreeId)
        .query(
          "DELETE FROM Campus_Degree WHERE Campus_ID=@Campus_Id AND Degree_ID=@Degree_Id"
        );
      res.json({ status: "success" });
    } catch (error) {
      res.status(409).json({ status: "failed", error: error.message });
    }
  }
}
module.exports = CampusController;
