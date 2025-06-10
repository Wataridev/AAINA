import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    Username:String,
    Phonenumber:{type:Number,unique:true},
    Address:{
        Area:String,
        City:String,
        State:String,
        Pincode:Number,
    },
    password:String,
})

const User=mongoose.model('UserDetail',userSchema);
export default User;