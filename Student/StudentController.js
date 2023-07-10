const Student_Model = require("./StudentModel");

class StudentController {
  async addStudent(req, res) {
    try {
      const { name, std } = req.body;
      if (!name)
        return res.status(400).send({ message: "missing depedency name" });
      if (!std)
        return res.status(400).send({ message: "missing depedency std" });
      const student = await Student_Model.createStudent(req.body);
      if (!student)
        return res.status(500).send({ message: "something went wrong" });
      return res.status(200).send({ message: "success" });
    } catch (error) {
        console.log(error);
      return res.status(500).send({ message: "Internal server error" });
    }
  }
}
const Student_Controller =new StudentController();
module.exports = Student_Controller;
