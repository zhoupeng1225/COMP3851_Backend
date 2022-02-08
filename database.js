const config = require("./dbconfig.js");
const sql = require("mssql");

const sqlPool = new sql.ConnectionPool(config);
const poolPromise = sqlPool
  .connect()
  .then((pool) => {
    console.log("successfully connected to the database");
    return pool;
  })
  .catch((err) => {
    console.log("Failed to connect to database Error:", err);
  });
module.exports = { sql, poolPromise };
