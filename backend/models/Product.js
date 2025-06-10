
import  mongoose from 'mongoose';



const productSchema=new mongoose.Schema({

    name:{type:String,requried:true},
    price:{type:Number,required:true},
    images:[String],
    description:String,
    category:String,
    soldout:{type:Boolean,default:false},
    material:String,
    Bestselling:{type:Boolean,default:false},
    NewArrival:{type:Boolean,default:false},
})

const Product=mongoose.model('Product',productSchema);
export default Product;