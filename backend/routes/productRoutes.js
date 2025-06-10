/* eslint-disable no-undef */
import express from "express";
import Product from "../models/Product.js";
import dotenv from 'dotenv';
import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
dotenv.config();
const upload=multer({dest:'products/'});
const router=express.Router();

const cloud_name= process.env.cloud_name;
const api_key=process.env.cloud_api_key;
 const api_secret=process.env.cloud_api_secret;




cloudinary.config({
   cloud_name:cloud_name,
   api_key:api_key,
   api_secret:api_secret
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