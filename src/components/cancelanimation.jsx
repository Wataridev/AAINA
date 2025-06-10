import React from "react";
import {motion} from 'motion/react'

const Cancelanimation = () => {
  return (
    <motion.div className="h-[130px] w-[130px] border rounded-full bg-green flex flex-col justify-center items-center bg-red-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80px"
        height="80px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
       <motion.h2
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1,ease:"linear"}}
            className="text-[18px] font-bold"
            >
              FAILED!!
            </motion.h2>
    </motion.div>
  );
};

export default Cancelanimation;
