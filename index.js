const express = require("express");

const app = express();
const DegreeRouter = require("./Routes/DegreeRoute");
const CourseRouter = require("./Routes/CourseRoute");
require("dotenv").config();

app.use(express.json());
app.use("/api/degree", DegreeRouter);
app.use("/api/course", CourseRouter);
app.listen(5000, () => {
  console.log("listening to port 5000");
});
