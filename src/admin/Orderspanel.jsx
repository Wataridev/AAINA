import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

const Orderspanel = () => {

  const [sales, setsales] = useState(0);
  const [earning, setearning] = useState(0);
  const [mergedOrders, setMergedOrders] = useState([]);



  useEffect(() => {


    async function fetchorder() {
      try{
  const orderRes = await axios.get("http://localhost:5000/orders");

const users = await Promise.all(orderRes.data.map(async (order) => {
  const userRes = await axios.get(`http://localhost:5000/userdetails/${order.Userid}`);
  return {
    ...order,
    userDetails: userRes.data,
  };
}));
   console.log(users);
   
  

     

      let totalsales = orderRes.data.length;
      let sum = orderRes.data.reduce((total, order) => total + (order.Price || 0), 0);
      setearning(sum);
      setsales(totalsales);

      setMergedOrders(users)


    
      }catch(err){
        console.log(err);
      }
    }
    fetchorder();

  }, []);

   const toggleStatus = async (orderId, currentStatus) => {
    try {
     const response = await axios.put(
        `http://localhost:5000/order/${orderId}`,
        { Ordercompleted: !currentStatus }
      );

      if (response.status === 200) {
        setorders((prevOrders) =>
          prevOrders.map((order) =>
            order.Orderid === orderId
              ? { ...order, OrderCompleted: !currentStatus }
              : order
          )
        );
      } else {
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="h-[90%] w-full border bg-[#1E1E1E] border-white rounded-3xl flex justify-evenly items-center">
      <div className="h-[90%] w-[80%] pl-4 overflow-y-scroll flex flex-col items-center text-white font-[Jura]">
        <div className="h-10 w-full bg-[#282424] flex justify-evenly text-center items-center">
          <h4 className="w-1/10">ID</h4>
          <h4 className="w-1/6 ">Name</h4>
          <h4 className="w-1/6 ">Products</h4>
          <h4 className="w-1/10 ">Price</h4>
          <h4 className="w-1/5  ">Address</h4>
          <h4 className="w-1/8 ">Status</h4> <h4 className="w-1/10 ">Date</h4>
          <h2 className="w-1/13 ">Phone No</h2>
        </div>
        {mergedOrders.map((order) => (
          <div className="h-15 w-full bg-[#353538] mt-3 flex items-center text-center text-white  justify-evenly">
            <h4 className="w-1/10 ">{order.Orderid}</h4>
            <h4 className="w-1/6  text-[14px] overflow-x-scroll">
              {order.userDetails.Username}
            </h4>
            <div className="w-1/6 flex flex-col overflow-y-scroll text-sm">
              {Array.isArray(order.ProductName) ? (
                order.ProductName.map((product, index) => (
                  <p key={index}>{product}</p>
                ))
              ) : (
                <p>{order.ProductName}</p>
              )}
            </div>
            <span className=" w-1/10">₹{order.Price}</span>
            <div className="w-1/5 h-full  overflow-scroll text-[14px] pl-5">
              <p>
                {order.userDetails.Address.Area}
                <br></br>
                {order.userDetails.Address.City}
                <br></br>
                {order.userDetails.Address.State}
                <br />
                {order.userDetails.Address.Pincode}
              </p>
            </div>
            <div
              onClick={() => toggleStatus(order.Orderid, order.Ordercompleted)}
              className={`w-1/9 h-[60%] cursor-pointer rounded-full border text-[12px] flex justify-center items-center ${
                order.Ordercompleted
                  ? "border-green-600 text-green-600"
                  : "border-yellow-500 text-yellow-500"
              }`}
            >
              <h2>{order.Ordercompleted ? "Completed" : "Pending"}</h2>
            </div>
            <span className="w-1/10  text-[10px]">{order.Date}</span>
            <h2 className="w-1/14 text-[11px]">{order.userDetails.Phonenumber}</h2>
          </div>
        ))}
      </div>
      <div className="h-[90%] w-[20%]  text-white  relative">
        <div className="absolute bottom-5 text-[18px] font-bold  ml-5">
          <div className="mb-4 h-[100px] w-[150px]  bg-[#414141]  rounded-2xl">
            <h2 className="text-[20px] pl-2 pt-2 text-[#C2C2C2]">Sales</h2>
            <h2 className="pl-3 text-[28px]">{sales}</h2>
          </div>

          <div className="h-[100px] w-[150px]  bg-[#414141]  rounded-2xl">
            <h2 className="text-[20px] pl-2 pt-2 text-[#C2C2C2]">Revenue</h2>
            <h2 className="pl-3 text-[28px]">₹{earning}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderspanel;
