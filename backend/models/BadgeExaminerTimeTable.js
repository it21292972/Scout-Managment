import mongoose from 'mongoose';
const Schema = mongoose.Schema;
 

const ExaminerTimeTable = new Schema({
    title: {
        type: String,

      },
      start: {
        type: Date,
  
      },
      end: {
        type: Date,
 
      },
    });
    


export default mongoose.model("ExaminertimeTable", ExaminerTimeTable )
