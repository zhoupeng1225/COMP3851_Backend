const express = require("express");
const app = express();
const DegreeRouter = require("./Routes/DegreeRoute");
require("dotenv").config();

app.use(express.json());
app.use("/api/degree", DegreeRouter);
app.listen(5000, () => {
  console.log("listening to port 5000");
});
