import express from 'express';
import bcrypt from 'bcrypt';

import User from '../models/UserDetails.js';

import dotenv from 'dotenv';
dotenv.config;


const router=express.Router();

router.post('/signup',async (req,res)=>{
    try{
      const {Username, Phonenumber,Address,password}=req.body;

      const existinguser=await User.findOne({Phonenumber});
        if(existinguser){
            return res.status(400).send('User Already Exist !!');
        }
        const hashpass=await bcrypt.hash(password,10);
        const newuser=new User({
            Username,
            Phonenumber,
            Address,
            password:hashpass
        });

        await newuser.save();

        res.status(201).send('User created Succesfully !!');

    }catch(err){
        res.status(500).send(err.message);
    }
    
})



export default router;