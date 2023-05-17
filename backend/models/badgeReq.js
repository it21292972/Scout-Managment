import mongoose from 'mongoose';
const { Schema } = mongoose;

const badgeReqSchema = new mongoose.Schema({
    section : {
        type : String,

    },
    name : {
        type : String,

    },
    REGNumber : {
        type : Number,

    },
    badge : { 
        type : String,
        unique : true
    },
    TRNumber :{
        type : Number,
    },
    BEName : {
        type : String,

    },
    BEid : {
        type : String,

    },
    smID : {
        type : String,

    },
	    approve : {
        type : Boolean,
        
    },
    send : {
        type : Boolean,     
    },
    SendtoBEStatus:{
        type : String
    },
    ExamDate: {
        type : String
    }
  
  

});

export default mongoose.model("badgeReq",badgeReqSchema)