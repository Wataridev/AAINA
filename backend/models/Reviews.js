import mongoose from "mongoose";

const reviewSchema=new mongoose.Schema({
 productid: {type:String ,required: true },
  username: { type: String, required: true },
  Rating: { type: Number, required: true },
  Review: { type: String, required: true },
  Image: { type: String },
})

const Review=mongoose.model('Review',reviewSchema);
export default Review;