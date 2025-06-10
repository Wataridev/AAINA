import express from 'express';
import Orders from '../models/Orders.js';
import mongoose from 'mongoose';

const router=express.Router();

const OrderCounterSchema = new mongoose.Schema({
    _id: String,
    current_order_number: Number,
});

const OrderCounter = mongoose.model('OrderCounter', OrderCounterSchema)




router.post('/',async (req,res)=>{
    try{
    const counter = await OrderCounter.findByIdAndUpdate(
        'order_counter',
        { $inc: { current_order_number: 1 } },
        { new: true, upsert: true }
    );

    const orderId = `ORD${counter.current_order_number}`;
    const date=new Date().toISOString().split('T')[0];
   
    const {Userid,ProductName,Price} = req.body;
     const order=new Orders({
        Userid,
        ProductName,   
        Price,
        Orderid:orderId,
        Date:date
     });
   const saved=await  order.save();
   res.status(201).json(saved);
}
catch(err){
    res.status(401).json({error:err.message});
}
})

router.get('/',async (req,res)=>{
   try{
    const all=await Orders.find();
    res.json(all);
   }catch(err){
    res.status(500).json({error:err.message});
   }
});

export default router;