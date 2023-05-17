import mongoose from 'mongoose';
const { Schema } = mongoose;

const scoutSchema = new mongoose.Schema({

    first_name: {
        type :String,
        required: true
    },
    last_name: {
        type :String,
        required: true
    },
    id: {
        type :String,

        
        required: true,
        unique: true
    },
    date_of_birth: {
        type :String,
        required: true
    },
    user_name: {
        type :String,
        required: true
    },
    password: {
        type :String,
        required: true
    },
    registration_number: {
        type :String
    },
    troop_name: {
        type :String
    },
    troop_number: {
        type :String
    },
    date_of_join: {
        type :String
    },

    address: {
        type :String
    },
    
    mobile : {
        type :String
    },
    name_of_the_guardian : {
        type :String
    },
    guardian_contact : {
        type :String
    }

});

export default mongoose.model("Scout",scoutSchema)