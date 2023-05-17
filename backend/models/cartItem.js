import  mongoose  from "mongoose";

const cartItemSchema = mongoose.Schema({
  itemId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true
  },
  quantity : {
    type: Number,
    required: true
  }
  })
  export default cartItemSchema