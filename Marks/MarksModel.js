const { default: mongoose } = require("mongoose");

class marksModel {
  constructor() {
    this.schema = new mongoose.Schema({
      marks: { type: Number, required: true },
      subject: { type: mongoose.Types.ObjectId, required: true ,ref:"tbl_subjects"},
      student: { type: mongoose.Types.ObjectId, required: true ,ref:"tbl_stufents"},
      totalMarks:{type:Number,required:true,default:100}
    });

    this.marks = mongoose.model("tbl_marks", this.schema);
  }
  addMarks(data) {
    return this.marks.create(data);
  }

  getResult(id) {
    const pipeline = [
      {
        $match: { student: new mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          from: "tbl_subjects",
          localField: "subject",
          foreignField: "_id",
          as: "subject",
        },
      },
      {
        $unwind: "$subject",
      },
      {
        $group: {
          _id: "$student",
          marks: { $sum: "$marks" },
          totalMarks:{$sum:"$totalMarks"},
          percentage: {
            $avg: "$marks",
          },
          subject: {
            $push: {
              $mergeObjects: [
                { subject: "$subject.name" },
                { marks: "$marks" },
              ],
            },
          },
        },
      },
     
      {
        $lookup: {
          from: "tbl_students",
          localField: "_id",
          foreignField: "_id",
          as: "student",
        },
      },
      {
        $unwind: "$student",
      },
      {
        $project: {
          _id: 0,
        },
      },
    ];
    return this.marks.aggregate(pipeline);
  }
}

const marks_model = new marksModel();
module.exports = marks_model;
