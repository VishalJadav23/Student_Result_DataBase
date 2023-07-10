const { default: mongoose } = require("mongoose");

class StudentModel{
    constructor(){
        this.schema=new mongoose.Schema({
            name:{type:String, required:true},
            std:{type:Number, required:true}
        })

        this.student=mongoose.model("tbl_students",this.schema)
    }

    createStudent(data){
       return this.student.create(data)
    }
}

const Student_Model= new StudentModel()
module.exports=Student_Model