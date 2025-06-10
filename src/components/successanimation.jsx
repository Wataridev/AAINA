import React from "react";
import {motion} from 'motion/react'
const Successanimation = () => {
  return (
    <div className="h-[130px] w-[130px] border rounded-full bg-green flex flex-col justify-center items-center bg-green-800">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="60px"
        height="60px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1, scale: [1.1, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </motion.svg>
      <motion.h2
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1,ease:"linear"}}
      className="text-[18px] font-bold text-white"
      >
        SUCCESS!!
      </motion.h2>
    </div>
  );
};

export default Successanimation;
