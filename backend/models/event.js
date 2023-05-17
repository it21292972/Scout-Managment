import mongoose from 'mongoose';
const EventSchema = new mongoose.Schema({

    eventAttendance :{
        type : Number,
        required : true
    },

    eventDetails :{
        type : String,
        required : true
    },

    eventBudget :{
        type : Number,
        required : true
    },

    eventsId:{
        type : Number,
        required : true
    }

});
export default mongoose.model("Event",EventSchema)