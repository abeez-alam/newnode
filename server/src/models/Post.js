import mongoose, { Types }  from "mongoose";
const postSchema = new mongoose.Schema({
      title:{
        type: String,
        required: true,
      },
      hotelLocation:{
        type: String,
        required: true,
      },
       description:{
        type: String,
        required: true,
      },
      Category:{
        type: mongoose.ObjectId,
        ref: "Category",
        required: true,

      },
      images: {
        type: [String],
        lowercase: true,
        validate:[arrayLimit," you must provided at least 3 images"], 
      },
       isAvailable:{
        type: Boolean,
        default: true,
        required: true, 
      },
       guest: {
        type: Number,
        required: true, 
      },
      price: {
        type: Number,
        required: true, 
        min: 100,
        max: 5000,
      },
      nearArea: {
        type: [String],
        required: true, 
      },
      facilities: {
        type: [String],
        required: true, 
      },
      slug:{
        type: String,
        lowercase: true, 
      },
      
});
function arrayLimit(val) {
        return val.length === 3;
}
export  default mongoose.model("Post",postSchema);