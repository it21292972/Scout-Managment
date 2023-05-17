import mongoose from 'mongoose';
const Schema = mongoose.Schema;
 

const Meetings = new Schema({
    title: {
        type: String,

      },
      start: {
        type: Date,
  
      },
      end: {
        type: Date,
 
      },
    });
    


export default mongoose.model("CalendarMeetings", Meetings )