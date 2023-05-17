import mongoose from 'mongoose';
const { Schema } = mongoose;

const notificationSchema = new mongoose.Schema({

    type: {
        type :String,
        required: true
    },
    text: {
        type :String,
        required: true
    },
    read: {
        type :Boolean,
        required: true,
       
    }

});

export default mongoose.model("NotificationBR",notificationSchema)