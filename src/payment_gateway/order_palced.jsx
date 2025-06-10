import React, { useEffect, useState } from "react";
import Steps_progress from "./steps_progress";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { clearcart } from "../redux/counter/counter";
import { useDispatch } from "react-redux";

const OrderPlaced = () => {
  const allitems = useSelector((state) => state.cart.items);
  const [orderitems, setorderitems] = useState([]);
  const [totalprice, setprice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (allitems.length === 0) return; 

    const sum = allitems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setprice(sum);
    setorderitems(allitems);
    window.scrollTo(0, 0);
  }, [allitems]);

  const afterorder=()=>{
    dispatch(clearcart());
    navigate("/");
  }



  return (
    <>
      <div className="h-[100vh] lg:h-[150vh] w-full bg-black text-white flex flex-col items-center justify-center ">
        <button
          onClick={afterorder}
          className="text-4xl tex)t-white absolute top-0 left-5 cursor-pointer"
        >
          {" "}
          ←
        </button>
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
          className="border  bg-black h-[90%] w-[90%] md:h-[80%]   lg:w-[50%] rounded-2xl relative flex flex-col items-center"
        >
       
          <div className=" border-b border-gray-800 h-[17%] w-full flex items-center justify-center">
            <Steps_progress step={2}></Steps_progress>
          </div>

          <div className="h-[80%] w-[90%]  flex flex-col items-center ">
            <div className="h-[90%] w-[90%]  text-white font-[Jura] flex flex-col justify-evenly">
              <a className="text-4xl">Order Invoice</a>
              <div className="h-[50%] border border-gray-700  flex flex-col items-center">
                {orderitems.map((items,index) => (
                  <div key={index} className="h-[60px] w-full border-b border-gray-800  text-white flex justify-evenly font-[Jura] ">
                    <img src={items.image} className="h-full w-[10%]"></img>
                    <div className="w-[80%] flex flex-row justify-between items-center">
                      <div className=" w-[50%] text-[18px] flex flex-col  font-semibold">
                        <a>{items.name}</a>
                        <a className="text-[14px]">{items.material}</a>
                      </div>

                      <span className="w-[35%] flex  justify-between">
                        <a>Qty:{items.quantity}</a>
                        <a className="font-bold">₹{items.price}</a>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-[30%] border border-gray-700 flex flex-col justify-evenly items-center">
                <span className="w-[90%] flex justify-between">
                  <a>Delivery charges </a> <a>₹65</a>{" "}
                </span>
                <span className="w-[90%] flex justify-between">
                  <a>Subtotal</a>
                  <a>₹{totalprice}</a>
                </span>
                <span className="w-full p-4 h-[25%] border-t border-gray-700 flex justify-between items-center">
                  <a className="text-2xl">Total Price</a>
                  <a className="text-2xl font-bold ">₹{totalprice + 65}</a>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default OrderPlaced;
