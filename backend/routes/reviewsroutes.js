import express from "express";
import Review from "../models/Reviews.js";

const router=express.Router();



router.post('/',async (req,res)=>{
    try
    {

      const {productid,username,Rating,desc,image}=req.body;

      const review=new Review (
        {
            productid,
            username,
            Rating,
            Review:desc,
            Image:image,
        }
      );

      const saved=await review.save();
      res.status(201).json(saved);
      }
      catch(err){
         console.error("Error saving review:", err);
        res.status(500).json({ error: err.message });
      }

})

router.get('/',async (req,res)=>{
    try{
        const all=await Review.find();
        res.json(all);
       }catch(err){
        res.status(500).json({error:err.message});
       }
})

export default router;