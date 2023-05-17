import mongoose from 'mongoose';
const {Schema} = mongoose;

const BadgeexaminerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    contact:{
        type: Number,
        required: true
    },
    warrantID:{
        type: String,
        required: true
    }

});

export default mongoose.model("BadgeExaminer",BadgeexaminerSchema)