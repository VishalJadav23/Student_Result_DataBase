const { default: mongoose } = require("mongoose");

class SubjectModel {
  constructor() {
    this.schema = new mongoose.Schema({
      name: { type: "string", required: "true" },
    });
    this.subjects = mongoose.model("tbl_subjects", this.schema);
  }

 async createSubject(subject) {
    return await this.subjects.create(subject);
  }
}

const Subject_Model = new SubjectModel();
module.exports = Subject_Model;
