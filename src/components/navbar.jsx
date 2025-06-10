import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {motion} from 'motion/react'
import Ring from '../pages/ring';
import Bag from '../pages/Bag';
import Userprofile from './userprofile';
import { AnimatePresence } from 'motion/react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/counter/authSlice';

const Navbar = () => {
  const allitems=useSelector((state)=>state.cart.items)
  const loginfo=useSelector((state)=>state.auth.isAuthenticated)
  const loguser=useSelector((state)=>state.auth.role)
  const [isOpen,setIsOpen]=useState(false);
  const [cartopen,setcart]=useState(false);
  const[producthover,setproducthover]=useState(false);
  const [userlogined,setuserlogined]=useState(false);
  const [userlogout,setuserlogout]=useState(false);
  const [adminlogged,setadminlogged]=useState(false);

  const dispatch=useDispatch();

 const logoutuser=()=>{
  setuserlogout(false);
  dispatch(logout());
 }
  
  
 useEffect(()=>{

   if(loginfo){
    if(loguser ==='admin')setadminlogged(true);
    else  setuserlogined(true);
   }else{
    setadminlogged(false)
    setuserlogined(false);
   }


}
  ,[loginfo,loguser])

 


  return (
    <>
   

    <motion.div 
    initial={{y:-20,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.8}}
    viewport={{once:true,amount:0.5}}
    className="w-full md:w-[90%] flex justify-center  bg-black z-10 sticky top-0 ">
    <motion.div 
     animate={{ borderColor: ["#FFD700", "#C0C0C0", "#B76E79"] }}
          transition={{
            duration:6,
            repeat:Infinity,
            repeatType:"reverse",
            ease:"linear",
          }}
          style={{
            borderWidth: "3px",
            borderStyle: "solid",
            borderColor: "yellow",
          }}
    
    className='h-[5rem] w-[90%] md:w-[100%] mt-4  rounded-xl  text-white bg-black flex flex-row justify-between  items-center relative '> 

   <div className="h-full w-1/3  md:w-1/5 flex justify-center items-center ">
     <Link to='/' className="cursor-pointer  ">
     <svg xmlns="http://www.w3.org/2000/svg" className='w-[110px] lg:w-[150px] ' height="60" viewBox="0 0 500 187" fill="none">
 <g filter="url(#filter0_d_51_54)">
<path d="M44.8293 169.436C56.3706 171.806 67.6479 164.372 70.0181 152.831C72.3882 141.289 64.9536 130.012 53.4124 127.642C41.8711 125.272 30.5938 132.706 28.2236 144.248C25.8535 155.789 33.2881 167.066 44.8293 169.436ZM74.9182 42.8047C75.3626 40.6407 73.9686 38.5262 71.8047 38.0818C69.6407 37.6374 67.5262 39.0314 67.0818 41.1953L74.9182 42.8047ZM53.0391 149.344L74.9182 42.8047L67.0818 41.1953L45.2026 147.734L53.0391 149.344Z" fill="white"/>
</g>
<g filter="url(#filter1_d_51_54)">
<line x1="102.037" y1="147.286" x2="71.8595" y2="44.2807" stroke="white" stroke-width="8" stroke-linecap="round"/>
</g>
<g filter="url(#filter2_d_51_54)">
<path d="M134.557 147.367L162.708 40.5935" stroke="white" stroke-width="8" stroke-linecap="round"/>
</g>
<g filter="url(#filter3_d_51_54)">
<path d="M188.222 150.4L161.992 39.4404" stroke="white" stroke-width="8" stroke-linecap="round"/>
</g>
<g filter="url(#filter4_d_51_54)">
<path d="M247 148.928C246.98 151.137 248.755 152.944 250.964 152.964C253.173 152.984 254.98 151.209 255 149L247 148.928ZM252.21 15.8708L228.907 38.7539L251.79 62.0569L275.093 39.1738L252.21 15.8708ZM255 149L256 39.0002L248 38.9275L247 148.928L255 149Z" fill="white"/>
</g>
<g filter="url(#filter5_d_51_54)">
<line x1="318" y1="145" x2="318" y2="44" stroke="white" stroke-width="10" stroke-linecap="round"/>
</g>
<g opacity="0.9" filter="url(#filter6_d_51_54)">
<line x1="321.846" y1="43.5159" x2="361.972" y2="144.284" stroke="white" stroke-width="9" stroke-linecap="round"/>
</g>
<g filter="url(#filter7_d_51_54)">
<line x1="363.25" y1="144.005" x2="363.25" y2="43.9922" stroke="white" stroke-width="10" stroke-linecap="round"/>
</g>
<g filter="url(#filter8_d_51_54)">
<line x1="405.152" y1="144.112" x2="432.112" y2="41.8481" stroke="white" stroke-width="8" stroke-linecap="round"/>
</g>
<g filter="url(#filter9_d_51_54)">
<path d="M463.528 170.796C474.994 168.086 482.092 156.594 479.382 145.128C476.672 133.662 465.18 126.564 453.713 129.274C442.247 131.984 435.149 143.476 437.859 154.942C440.57 166.408 452.062 173.507 463.528 170.796ZM462.513 149.115L449.513 94.1151L441.728 95.9553L454.728 150.955L462.513 149.115ZM449.513 94.1151L436.513 39.1151L428.728 40.9553L441.728 95.9553L449.513 94.1151Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_51_54" x="23.7832" y="37.999" width="55.2175" height="139.877" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter1_d_51_54" x="63.8584" y="40.2798" width="46.1794" height="119.007" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter2_d_51_54" x="126.556" y="36.5923" width="44.1528" height="122.775" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter3_d_51_54" x="153.991" y="35.4395" width="42.2317" height="126.961" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter4_d_51_54" x="224.907" y="15.8706" width="54.186" height="145.093" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter5_d_51_54" x="309" y="39" width="18" height="119" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter6_d_51_54" x="313.344" y="39.0146" width="57.1294" height="117.771" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter7_d_51_54" x="354.25" y="38.9922" width="18" height="118.013" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter8_d_51_54" x="397.151" y="37.8472" width="42.9626" height="118.266" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
<filter id="filter9_d_51_54" x="424.728" y="39.1152" width="59.231" height="140.258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_54" result="shape"/>
</filter>
</defs>
</svg>
</Link> </div>



  <div className='h-full w-1/2 hidden   md:visible md:flex justify-evenly items-center  md:text-[14px] lg:text-[16px]  xl:text-[18px]  font-light '>
 
     <span className='h-full   flex justify-center flex-col border-white hover:border-b-2 cursor-pointer'>
      <a>Profile</a>

    </span>

    <span onMouseEnter={()=>setproducthover(true)} onMouseLeave={()=>setproducthover(false)} className='h-full relative  flex justify-center flex-col border-white hover:border-b-2 cursor-pointer'>
      <a >Products</a>
      <AnimatePresence>
      {producthover &&
       <motion.div
       initial={{opacity:0,y:-10}}
       animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
      exit={{opacity:0}}
      
      className='h-[230px] w-[180px] flex flex-col justify-evenly  items-center opacity-0.8 bg-black border absolute bottom-[-230px] left-[-3rem]'>
          <Link to="/rings" className='hover:underline'>Rings</Link>
          <Link to="/chains" className='hover:underline'>Chains</Link>
          <Link to="/braclets" className='hover:underline'>Braclets</Link>
          <Link to="/necklaces" className='hover:underline'>Necklaces</Link>
          <Link to="/earrings" className='hover:underline'>Earrings</Link>
          <Link to="/charms" className='hover:underline'>Charms</Link>
      </motion.div>} 
      </AnimatePresence>
    </span>

     <span className='h-full  flex justify-center flex-col border-white hover:border-b-2 cursor-pointer'>
      <a>Track Order</a>
    </span>

   {adminlogged && <span className='h-full  flex justify-center flex-col border-white hover:border-b-2 cursor-pointer'>
      <Link to="/admin_panel">Admin panel</Link>
    </span>} 



  </div>
 
 

<div className="h-fit  flex items-center gap-4 mr-6 relative ">
   {(userlogined||adminlogged) ? <a onClick={()=>setuserlogout(true)} className='text-white font-bold cursor-pointer'>Logout</a>
   
    
   :<Link to='/login'  className='text-white font-bold cursor-pointer'>Login</Link>} 
       { userlogout && <div className=' h-[250px] w-[200px] flex flex-col justify-evenly items-center absolute left-[-80px] top-[70px] border border-white '>
        <h3 className='h-[50%] p-[30px] text-[20px] font-bold'>Are You Sure?</h3>
        <div className=' h-[50%] w-[80%] flex flex-col justify-evenly items-center '>
        <button onClick={logoutuser} className='w-full h-1/3 border border-red-600 bg-red-600  cursor-pointer'>LogOut</button>
        <button onClick={()=>setuserlogout(false)} className='w-full h-1/3 border   cursor-pointer '>Cancel</button>
        </div>

 </div>}

    










     <a id="cart" className="h-[30px] w-[30px] flex_center justify-center hover_item rounded-full"   onClick={() => setcart(!cartopen)}>
     <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
<path d="M3.74181 18.5545C4.94143 20 7.17414 20 11.6395 20H12.3607C16.8261 20 19.0589 20 20.2585 18.5545M3.74181 18.5545C2.54219 17.1091 2.95365 14.9146 3.77657 10.5257C4.36179 7.40452 4.65441 5.84393 5.7653 4.92196M3.74181 18.5545C3.74181 18.5545 3.74181 18.5545 3.74181 18.5545ZM20.2585 18.5545C21.4581 17.1091 21.0466 14.9146 20.2237 10.5257C19.6385 7.40452 19.3459 5.84393 18.235 4.92196M20.2585 18.5545C20.2585 18.5545 20.2585 18.5545 20.2585 18.5545ZM18.235 4.92196C17.1241 4 15.5363 4 12.3607 4H11.6395C8.46398 4 6.8762 4 5.7653 4.92196M18.235 4.92196C18.235 4.92196 18.235 4.92196 18.235 4.92196ZM5.7653 4.92196C5.7653 4.92196 5.7653 4.92196 5.7653 4.92196Z" stroke="white" stroke-width="1.5"/>
<path d="M9.1709 8C9.58273 9.16519 10.694 10 12.0002 10C13.3064 10 14.4177 9.16519 14.8295 8" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>
  <div className=" absolute h-[12px] w-[12px] bg-red-800 rounded-full top-0 right-0 flex justify-center items-center text-[10px] text-white">{allitems.length}</div>
     </a>

   </div>
   <Bag isOpen={cartopen} setIsOpen={setcart}/>
   
       </motion.div>
     
    </motion.div>
  




  
      
    </>
  )
}

export default Navbar
