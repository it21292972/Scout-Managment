import mongoose from 'mongoose';
const {Schema} = mongoose;

const ScoutMasterSchema = new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type: String,
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
    },
    contact:{
        type: Number,
    },
    warrantID:{
        type: [String],
    },
    troop:{
        type: String,
    },

});

export default mongoose.model("ScoutMaster",ScoutMasterSchema)