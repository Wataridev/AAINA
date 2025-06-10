import mongoose from 'mongoose';

const OrderSchema=new mongoose.Schema({
    Userid:String,
    ProductName:[String],
    Price:Number,
    Orderid:String,
    Date:String,
    Ordercompleted:{type:Boolean,default:false},
})

const Orders=mongoose.model('Orders',OrderSchema);
export default Orders;