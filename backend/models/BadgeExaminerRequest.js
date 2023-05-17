import mongoose from 'mongoose';
const Schema = mongoose.Schema;
 

const testRequestSchema = new Schema({
    requestId:{
        type:Number,
        unique:true 
    },
    examinerId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'testBadgeExaminers'
    },
    scoutId:{
       type: String,
       required:true
    },
    scoutName:{
        type:String,
        required:true
    },

    badgeName:{
        type: String,
        required:true
    }
})

export default mongoose.model("testRequestSchema", testRequestSchema)
