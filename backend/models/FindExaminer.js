import mongoose from 'mongoose';
const { Schema } = mongoose;

const FindExaminerSchema = new mongoose.Schema({
    Badge : {
        type : String,
        required : true
    },
    Name : {
        type : String,
        required : true
    },
    Address : {
        type : String,
        required : true
    },
    Email : { 
        type : String,
        required : true
    },
    Telephone :{
        type : Number,
        required : true
    },
   
   
});

export default mongoose.model("FindExaminer",FindExaminerSchema)