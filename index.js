const express = require("express");
const Student_Controller = require("./Student/StudentController");
const DBconnect = require("./Connetion/Connection");
const subject_Controller = require("./Subject/SubjectController");
const marks_controller = require("./Marks/MarksController");
const marks_model = require("./Marks/MarksModel");
const app = express();

app.use(express.json());
DBconnect();
app.get("/", (req, res) => {
  res.send("Hello Vishal ");
});

app.post("/student/insert", Student_Controller.addStudent);

app.post("/subject/insert", subject_Controller.addSubject);

app.post("/marks/insert", marks_controller.addmarks);

app.get("/result/:id",marks_controller.Showresult)

app.listen(5000, () => {
  console.log("server is running");
  console.log("http://localhost:5000");
});
