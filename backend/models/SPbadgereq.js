import mongoose from 'mongoose';
const { Schema } = mongoose;

const SPbadgeReqSchema = new mongoose.Schema({
    Section : {
        type : String,
        
    },
    Name : {
        type : String,
        
    },
    Reg_No : {
        type : Number,
        
    },
    Badge : { 
        type : String,
       
    },
    Troop_No :{
        type : Number,
       
    },
    Badge_Examiner : {
        type : String,
        
    },
    approve : {
        type : Boolean,
        
    },
    send : {
        type : Boolean,
       
    },
});

export default mongoose.model("SPbadgereq",SPbadgeReqSchema)