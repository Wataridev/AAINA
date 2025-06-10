/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';

import authenticationroute from './routes/authenticationroute.js';
import reviewsroutes from './routes/reviewsroutes.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/UserDetails.js';
import ordersroutes from './routes/ordersroutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import productroutes from './routes/productRoutes.js';
import Product from "./models/Product.js";
import Orders from './models/Orders.js';
import Review from './models/Reviews.js';

dotenv.config();


const ADMIN_PHONE = process.env.ADMIN_PHONE;
const ADMIN_PASS_HASH = process.env.ADMIN_PASS_HASH;
const SECRET_KEY=process.env.SECRET_KEY;


const app = express();
app.use(express.json());
app.use(cors());






///products  post api 
app.put('/productremove/:id',async(req,res)=>{
  try{
    const updatedproduct=await Product.findByIdAndDelete(req.params.id)
     res.status(200).json(updatedproduct);
  }
  catch(err){
    res.status(500).json({error:err.message});
  }
})

app.get('/reviews/:id',async(req,res)=>{
  try{
    const reviews= await Review.find({productid:req.params.id});
    res.status(200).json(reviews);
  }catch(err){
    res.status(500).json({error:err.message})
  }
})




app.put('/product/:id',async(req,res)=>{
  try{
    const {price,Bestselling,NewArrival,soldout}=req.body;

    const updatedProduct=await Product.findByIdAndUpdate(
      req.params.id,
    {
      price,
      Bestselling,
      NewArrival,
      soldout,      
    },
    {new:true}
    );
res.status(200).json(updatedProduct);
  }catch(err){
    res.status(500).json({error:err.message});
  }
})


app.put('/order/:id',async(req,res)=>{
    const { id } = req.params;
  const { Ordercompleted } = req.body;

  try {
    await Orders.updateOne({ Orderid: id }, { $set: { Ordercompleted } });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error:err.message });
  }
})



mongoose.connect('mongodb://127.0.0.1:27017/productsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB error:", err));

app.use('/products',productroutes);
app.use(authenticationroute);
app.use('/reviews',reviewsroutes);
app.use('/orders',ordersroutes);



app.post('/login',async (req,res)=>{
  try{
  const {Phonenumber,password}=req.body;

  if(Phonenumber === ADMIN_PHONE && (await bcrypt.compare(password,ADMIN_PASS_HASH))){
 const token = jwt.sign({ id: 'admin', role: 'admin' }, SECRET_KEY, { expiresIn: '24h' });
   return   res.status(201).send({message:"Admin logined ",token,role:'admin'});
  }

  const user=await User.findOne({Phonenumber});
  if(!user){
     
      return res.status(401).send({message:"User not found"});
  }

  const ispass=await bcrypt.compare(password,user.password);
  if(!ispass){
      return res.status(401).send({message:"Incorrect Password"});
  }

  const token=jwt.sign({id: user.id, role: 'user'},SECRET_KEY,{expiresIn:'24h'});
  res.status(200).send({message:"User logged in",token,role:'user'})
}catch(err){
  console.error(err);
  res.status(401).send({message:"Error in Something"});
}

})

app.get('/userdetails/:id',async(req,res)=>{
  try{
  const user=await User.findById(req.params.id);
  res.status(200).send(user);
}catch(err){
  res.status(500).send({message:err});
}

})


// Example protected route



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));