const marks_model = require("./MarksModel");

class MarksController {
  async addmarks(req, res) {
    const { marks, student, subject } = req.body;
    if (!marks)
      return res.status(400).send({ message: "missing Dependency marks" });
    if (!student)
      return res.status(400).send({ message: "missing Dependency student" });
    if (!subject)
      return res.status(400).send({ message: "missing Dependency subject" });
    const result = await marks_model.addMarks(req.body);
    if (!result)
      return res.status(500).send({ message: "something went wrong" });
    return res.status(200).send({ message: "success" });
  }

  async Showresult(req, res) {
    try {
      const { id } = req.params;
      if (!id)
        return res.status(400).send({ message: "Missing Dependency ID" });
      const result = await marks_model.getResult(id);
      console.log(result);
      if (!result)
        return res.status(500).send({ message: "Something went wrong" });
      return res.status(200).send({ message: "Success", result });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: "internal Server error" });
    }
  }
}

const marks_controller = new MarksController();
module.exports = marks_controller;
