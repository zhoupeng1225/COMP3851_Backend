const { poolPromise, sql } = require("../database.js");
class DegreeController {
  static async getDegreeByCampus(req, res, next) {
    try {
      const campusId = req.query.campusId;
      const pool = await poolPromise;
      const result = await pool
        .request()
        .input("campus_id", campusId)
        .query(
          "SELECT Degree.Degree_ID,Degree_Name FROM Degree " +
            "inner join Campus_Degree  ON  Degree.Degree_ID = Campus_Degree.Degree_ID " +
            "WHERE Campus_ID = @campus_id"
        );

      const { recordset: results, rowsAffected } = result;

      if (rowsAffected[0] === 0)
        throw Error("No record founded for the campus id");

      res.json({ status: "success", results, rowsAffected: rowsAffected[0] });
    } catch (error) {
      console.log(error);
      res.json({ status: "failed", message: error.message });
    }
  }
  static async getDegreeById(req, res, next) {
    try {
      const degreeId = req.params.degreeId;

      const pool = await poolPromise;
      const result = await pool
        .request()
        .input("Degree_Id", degreeId)
        .query("SELECT * FROM Degree WHERE Degree_ID = @Degree_Id");

      const { recordset, rowsAffected } = result;
      res.json({ result: recordset[0], rowsAffected: rowsAffected[0] });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "failed", message: error.message });
    }
  }
  static async addDegree(req, res, next) {
    try {
      const { degreeId, degreeName, totalCredit, minYear, maxYear } = req.body;
      const pool = await poolPromise;
      const result = await pool
        .request()
        .input("Degree_Id", degreeId)
        .input("Degree_Name", degreeName)
        .input("Total_Credit", totalCredit)
        .input("Min_Year", minYear)
        .input("Max_Year", maxYear)
        .query(
          "INSERT INTO Degree VALUES(@Degree_Id,@Degree_Name,@Total_Credit,@Min_Year,@Max_Year)"
        );

      res.json({ status: "success" });
    } catch (error) {
      res.status(400).json({ status: "failed", error: error.message });
    }
  }
}

module.exports = DegreeController;
