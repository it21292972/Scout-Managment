import mongoose from 'mongoose';
const Schema = mongoose.Schema;
 

const badgeIssuOrder = new Schema({
    IssueId:{
        type:String,
        unique:true
    },
    scoutId:{
        type:String,
        unique:true
    },
    scoutName:{
        type:String,
        required:true
    },
    badgeName:{
        type:String,
        required:true
    },
    remark:{
        type: String,
        required: true
    },
    passedDate:{
        type: String,
        required:true
    }
})

export default mongoose.model("BadgeIssueOrder",badgeIssuOrder)