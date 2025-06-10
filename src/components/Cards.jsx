import React from 'react'
import { Link } from 'react-router-dom'
const Cards = ({id,image,name,material,price}) => {
  return (
    <Link to="/sellcard"  state={{id}} >
    <div className=' h-[18rem]  w-[12rem] md:h-[25rem] md:w-[18rem] lg:w-[18rem] xl:w-[20rem] bg-[#101010]   rounded-xl text-white flex flex-col justify-evenly items-center cursor-pointer ' >
      <img loading='lazy' src={image} alt={name} className="w-[95%] h-[50%] md:h-[60%] object-center  rounded-lg" /> 
      <h1 className="w-fit text-[20px] md:text-[24px] font-semibold mb-[-20px]">{name}</h1>
      <h4 className='w-fit text-[14px] md:text-[16px] opacity-[0.7]'>{material}</h4>
      <h3 className=" w-fit font-semibold text-[18px] mt-[-10px]">₹{price}</h3>
    
      
    </div></Link>
  )
}

export default Cards
