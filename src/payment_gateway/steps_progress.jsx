import React, { useEffect, useState } from 'react'

const Steps_progress = ({step}) => {
    const [finalstep,setfinalstep]=useState(false);

     const togglefinalstep=()=>{
        if(step==2)setfinalstep(true);
        else setfinalstep(false);
     }

     useEffect(()=>togglefinalstep,[]);
    
  return (
    <>
    <div className='h-fit w-[90%] relative '>
      <div className='flex justify-evenly items-center '>
        <div className='h-[35px] w-[35px] border-2 rounded-full border-green-500 bg-green-500 z-10'></div>
        <div className={`h-[35px] w-[35px] border-2 rounded-full ${finalstep ?  'border-green-500':'border-green-800'} bg-black ${finalstep && 'bg-green-500'} z-10 `}></div>
        <div className={`h-[35px] w-[35px] border-2 rounded-full ${finalstep ?  'border-green-500':'border-green-800'}  bg-black ${finalstep && 'bg-green-500'} z-10 `}></div>
      </div>
      <div className='w-full h-[5px] border border-green-800 absolute top-1/2 '>
        
        {finalstep?<div className='h-full  w-full bg-green-500'></div>:<div className='h-full w-1/4 bg-green-500 '></div>} 
        <div></div>

      </div>
    </div>
    </>
  )
}

export default Steps_progress
