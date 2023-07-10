const Subject_Model = require("./SubjectModel");

class subjectController {
  addSubject(req, res) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({ message: "Please enter subject name" });
    }
    const subject = Subject_Model.createSubject(req.body);
    if (!subject) {
      return res.status(500).send({ message: "something went wrong" });
    }
    return res.status(200).send({ message: "success" });
  }
}

const subject_Controller = new subjectController();
module.exports = subject_Controller;
