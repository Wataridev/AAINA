import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefromcart, updatequantity } from '../redux/counter/counter';
import { Link } from 'react-router-dom';
import {motion} from 'motion/react'

const Bag = ({isOpen,setIsOpen}) => {
  const allitems=useSelector((state)=>state.cart.items)
  const userlogged=useSelector((state)=>state.auth.isAuthenticated)
  const [totalprice,setprice]=useState(0);
  const dispatch= useDispatch();
 

   const chngeqty=(indx,delta,id)=>{
     const  currQty=allitems[indx].quantity;
     if(currQty===1&&delta===-1){dispatch(removefromcart({id}));}
     else{
        const newQty = Math.max(1, currQty + delta);
     dispatch(updatequantity({id,newQty}));
     }
   }
   const itemremover=(id)=>{
    dispatch(removefromcart({id}))
   }
 
    useEffect(()=>{
      const sum = allitems.reduce((acc, item) => acc + item.quantity * item.price, 0);
       setprice(sum);
     },[allitems]);


  return (

    <>
    <div className={`h-[88vh] w-[80%] md:w-[60%] lg:w-[40%] z-30 fixed top-24 right-0 bg-black  flex justify-center items-center   transform transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0" : "translate-x-full opacity-0 "}`} >
      <div className='h-[95%] w-[90%]  flex flex-col justify-evenly '>
        <a className='text-4xl md:text-5xl mt-4 text-white font-[Jura]'>My Bag</a>
        <div className='h-[80%] mt-8  overflow-y-scroll'>
          {allitems.map((card,index)=>(
            <div className='h-[6rem]  mt-4 text-white flex flex-row justify-evenly font-[Jura]'>
              
              <img src={card.image} alt={card.name} className='h-full w-[20%]'></img>
              <div className='w-[50%] flex flex-col justify-evenly'>
                <a className='text-[24px]'>{card.name}</a> 
                <a className='text-[14px] text-bold'>Price: ₹{card.price}</a>
                <span className='w-[70px]  flex justify-evenly'>
                  <button className='hover:cursor-pointer' onClick={()=>chngeqty(index,-1,card.id)}>-</button>
                  <a>{card.quantity}</a>
                  <button className='hover:cursor-pointer active:border'onClick={()=>chngeqty(index,1,card.id)}>+</button>
                </span>

              </div>
              <button className='hover:cursor-pointer' onClick={()=>itemremover(card.id)} ><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
<path d="M10 11V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 7H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
            </div>
          ))}

        </div>
        <div className='h-[20%] md:h-[20%]  md: border-t border-white text-white font-[Jura] flex flex-col justify-evenly'>
         <div className='w-full flex flex-row justify-between pl-3 pr-3'>
           <a className=' text-2xl'>Total Price:</a>
           <a className=''>₹{totalprice}</a>
           </div>
         
        <Link to={userlogged ? '/buynow':"/login"} className='h-[40%] '>
          <motion.button
          whileTap={{scale:0.8}}
           className='h-full w-full  text-black font-bold cursor-pointer bg-green-700'>Checkout </motion.button>
           </Link>

        </div>
        <button className='absolute top-0 left-0 text-white text-2xl cursor-pointer' onClick={()=>setIsOpen(false)}>X</button>
     

    </div>

    </div>
    
    
    
    
    
    </>

 
    
  )
}

export default Bag
