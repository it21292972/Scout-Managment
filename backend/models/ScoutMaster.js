import mongoose from 'mongoose';
const { Schema } = mongoose;

const ScoutMaster1Schema = new mongoose.Schema({

    first_name : {
        type :String,
        required: true
    },
    last_name : {
        type :String,
        required: true
    },

    mid: {
        type :String,
        required: true
    },
    
    tid : {
        type :String,
        required: true
    },
    phone : {
        type :String,
        required: true
    },
    address : {
        type :String,
        required: true
    },
    dob : {
        type :String,
        required: true
    },
    badge : {
        type :String,
        required: true
    },
     
});

export default mongoose.model("ScoutMaster1",ScoutMaster1Schema)