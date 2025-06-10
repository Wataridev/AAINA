import React from "react";
import {motion} from 'motion/react'

const Loadinganimation = () => {
  return (
    <motion.div
      animate={{
        rotate: 360,
        borderRadius: ["25%", "35%", "15%", "35%", "25%"],
        backgroundColor: ["#00FFFF", "#BF00FF", "#39FF14", "#00BFFF"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        type: "keyframes",
      }}
      className="h-[80px] w-[80px] border-2  border-white "
    ></motion.div>
  );
};

export default Loadinganimation;
