import express from "express";
import Product from "../models/Product.js";

import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
const upload=multer({dest:'products/'});
const router=express.Router();




cloudinary.config({
   cloud_name: 'dmkbc3xyh', 
   api_key: '152686985553948', 
   api_secret: '7EL-Jq3TPUaIDru8EDJbANHXOsU'
 });
 

router.post('/', upload.array('images', 4), async (req, res) => {
   console.log("Files:", req.files); console.log("Body:", req.body);
   try {
     const { name, price,description,category,material } = req.body;
     const imageUrls = [];
 
     for (let file of req.files) {
       const result = await cloudinary.uploader.upload(file.path, {
         folder: 'products',
       });
       imageUrls.push(result.secure_url);
       fs.unlinkSync(file.path); // delete local file
     }
 
     const product = new Product({
       name,
       price,
       images: imageUrls,
       description,
       category,
       material
     });
 
     await product.save();
     res.status(201).json(product);
   } catch (err) {
     console.error(err);
     res.status(500).json({ error: 'Upload failed' });
   }
 });



router.get('/',async (req,res)=>{
   try{
    const all=await Product.find();
    res.json(all);
   }catch(err){
    res.status(500).json({error:err.message});
   }
});

export default router;