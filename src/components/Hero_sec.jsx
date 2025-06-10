import React from 'react'
import {motion} from 'motion/react'
const Hero= () => {
  return (
    <div className=' h-80 w-full md:h-130 lg:h-135 xl:h-152  text-white flex items-center justify-center'>
        <div className='h-1/2 w-90 md:h-50  md:w-150 lg:w-190 xl:w-210  flex_center flex-col justify-evenly'>
            <motion.h1
            initial={{y:180, opacity:0}}
            whileInView={{y:0 ,opacity:1}}
            transition={{duration:0.8}}
            viewport={{once:true,amount:0.5}}
            
            className='text-[30px] md:text-[50px] lg:text-[65px] xl:text-[70px] font-bold font-[Jura] text_glow flex_center relative siny'>Luxury You Can Afford, Beauty You Deserve.</motion.h1>

        </div>

        
      
    </div>
  )
}

export default Hero