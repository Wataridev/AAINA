import React ,{useEffect,useState} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import Steps_progress from './steps_progress'
import { useSelector  } from 'react-redux'
import {motion} from 'motion/react'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import Loadinganimation from "../components/loadinganimation";
import Successanimation from "../components/successanimation"
import Cancelanimation from "../components/cancelanimation"


const Buynow = () => {
    const allitems=useSelector((state)=>state.cart.items);
    const [totalprice,setprice]=useState(0);
    const [status,setstatus]=useState("");
    const navigate=useNavigate();

    

     useEffect(()=>{
          const sum = allitems.reduce((acc, item) => acc + item.quantity * item.price, 0);
           setprice(sum);
         },[allitems]);
     useEffect(()=>{
     
      
      window.scrollTo(0,0);},[])    


        const updateorder = async () => {
          setstatus("loading");
          try {
            const ProductName = allitems.map(
              (product) => product.name + " " + product.quantity
            );
            const token = localStorage.getItem("token");
            const decoded = jwtDecode(token);
      
            await axios.post("http://localhost:5000/orders", {
              Userid: decoded.id,
              ProductName,
              Price:totalprice,
            });
            console.log("Order updateddd")
    
          } catch (err) {
            console.log(err);
            
          }finally{
           setTimeout(() => {
            setstatus("");
            navigate('/order_placed');           
           }, 1500); 
          }
          
        };
    

  return (
    <>
    <div className='h-[100vh] lg:h-[150vh] w-full  text-white flex flex-col items-center justify-center '> 
    <button onClick={()=>navigate(-1)} className='text-4xl bg-black text-white absolute top-0 left-5 cursor-pointer'> ←</button>
        <motion.div 
         animate={{ borderColor: ["#FFD700", "#DC143C", "#FFD700"] }}
          transition={{
            duration:5,
            repeat:Infinity,
            repeatType:"loop",
            ease:"linear",
          }}
        style={{
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "yellow",
          }}
        className='border  h-[90%] w-[90%] md:h-[80%]   lg:w-[50%] relative rounded-2xl'>
             {status && (
                      <div className="absolute w-full h-full flex justify-center items-center ">
                        {status === "loading" && <Loadinganimation />}
                        {status === "success" && <Successanimation />}
                        {status === "failed" && <Cancelanimation />}
                      </div>
                    )}
          
            <div className=' border-b border-gray-800 h-[15%] flex items-center justify-center'>
                <Steps_progress step={1}></Steps_progress>
                

            </div>
            <div className='h-[75%]   flex flex-col justify-evenly items-center'>
              <div className='h-[72%]    lg:h-[70%] w-full  flex flex-col overflow-y-scroll'>
                {allitems.map((items)=>(
                  <div className='h-[25%] w-full border-b border-[#4a4a4a]  text-white flex justify-evenly font-[Jura] '>
                    <img src={items.image} className='h-full w-[20%]'></img>
                    <div className='w-[60%] flex flex-col justify-evenly'>
                      <a className='text-2xl'>{items.name}</a> 
                      <a>{items.material}</a>
                      <span className='w-[30%] flex justify-between'>
                        <a>Qty:{items.quantity}</a>
                        <a>₹{items.price}</a>
                      </span>

                    </div>
                  </div>
                ))}

   
              </div>
              <div className='h-[25%] w-full border-t border-white  flex flex-col justify-evenly items-center font-[Jura]'>
                <span className='w-[90%] flex justify-between' >
                  <a>Delivery charges </a> <a>₹65</a> </span>
                <span className='w-[90%] flex justify-between' >
                  <a>Subtotal</a><a>₹{totalprice}</a>
                </span>
                <span className='w-full p-4 h-[20%] border-t border-white flex justify-between ' ><a className='text-2xl'>Total Price</a><a className='text-2xl'>₹{totalprice+65}</a></span>


              </div>
            </div>
          <button onClick={updateorder} className='h-[80px]  w-full cursor-pointer bg-green-900 rounded-xl  absolute bottom-0'>Procced to Payment</button>
        </motion.div>

        

        </div>
      

    </>
  )
}

export default Buynow
