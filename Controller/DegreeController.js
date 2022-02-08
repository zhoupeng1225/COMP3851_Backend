const { poolPromise } = require("../database.js");
class DegreeController {
  static async getDegree(req, res) {
    try {
      const campus = req.query.campus;
      const pool = await poolPromise;
      const result = await pool
        .request()
        .input("campus_id", campus)
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
}

module.exports = DegreeController;
