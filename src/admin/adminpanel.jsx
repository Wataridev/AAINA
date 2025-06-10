import React, { useEffect } from "react";
import Itemadding from "./Itemadding";
import Itemupdate from "./itemupdate";
import Orderspanel from "./Orderspanel";
import { useNavigate } from "react-router-dom";

const Adminpanel = () => {
  const navigate=useNavigate();
    useEffect(()=>{
    document.title="Admin Panel"
    },[])


  return (

    <>
      <div className="h-[180vh] w-full bg-black flex justify-center items-center ">
        <div className="h-[95%] w-[90%] ">
          <div className="h-[50%]  w-full flex justify-evenly items-center">
          
            <Orderspanel></Orderspanel>
          </div>

          <div className="h-[40%] w-[full]  flex justify-evenly items-center">
            <Itemadding></Itemadding>
            <Itemupdate></Itemupdate>
           
              </div>

            </div>
      <button onClick={()=>navigate("/")}  className='text-4xl text-white absolute top-0 left-5 cursor-pointer'> ←</button>
          </div>
    </>
  );
};

export default Adminpanel;
