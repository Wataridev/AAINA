
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import axios from 'axios';
import { AiFillPlusSquare } from "react-icons/ai";
import {motion} from 'motion/react'
import Loadinganimation from "../components/loadinganimation";
import Successanimation from "../components/successanimation";
import Cancelanimation from "../components/cancelanimation";
const Itemadding = () => {
  const [image, setimage] = useState(null);

  const [category_choice, setcategory] = useState("");
  const [title,settitle]=useState("");
  const [material,setmaterial]=useState("");
  const [product_descp,setproductdescp]=useState("");
  const [price,setprice]=useState(0);
  const [status,setstatus]=useState("");




  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0)  {
   
      setimage(files[0]);
    }
  };

  const submititem=async ()=>{
     setstatus("loading");

    const formData=new FormData();
    formData.append("name",title);
    formData.append("price",price);
    formData.append("category",category_choice);
    formData.append("description",product_descp);
    formData.append("material",material);
  
    formData.append("images",image);
 
    try{
    await axios.post("http://localhost:5000/products",formData,{
       headers:{
        "Content-Type": "multipart/form-data",
       } 
     });

     setstatus("success");

   } catch (err) {
     console.error(err);
     setstatus("failed");
   }

  if (fileInputRef.current) {
  fileInputRef.current.value = null;
   setimage(null);
   settitle("")
   setcategory("")
   setproductdescp("")
   setmaterial("")
   setprice(0)


}

   
  
  }

  useEffect(() => {
  if (status === "success" || status === "error") {
    const timer = setTimeout(() => {
      setstatus("");
    }, 2000); 
    return () => clearTimeout(timer);
  }
}, [status]);

  return (
   
    <div className="h-[90%] w-[40%] border border-white bg-[#1E1E1E] relative rounded-3xl flex flex-col items-center justify-evenly  text-white">
 
      {status && <div className="absolute w-full h-full flex justify-center border opacity-[0.8] rounded-3xl bg-black items-center ">
        {status==="loading" && <Loadinganimation/>}
        {status==="success" && <Successanimation/>}
        {status==="failed" && <Cancelanimation/>}
      
          

       


       </div>}

      <div className="h-[100px] w-[100px] bg-[#4B4848] rounded-lg flex justify-center items-center ">
        {image? 
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            className="h-full w-full object-center"   
          ></img>:<AiFillPlusSquare
          size={44}
          className="cursor-pointer"
          onClick={handleButtonClick}
        ></AiFillPlusSquare>
        }
        
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
        ></input>
      </div>
      <div className="h-[60%] pl-4 w-full flex flex-col justify-evenly  ">


       <span className="flex justify-evenly ">
        <span className="w-1/2 flex items-center justify-evenly">
          <label className="font-semibold">Category:</label>
          <select
            value={category_choice}
            className="border h-[30px] w-[80px] rounded-lg text-sm border-white text-white  bg-[#353538]"
            onChange={(e) => setcategory(e.target.value)}
          > 
             <option value="">--Select--</option>
            <option value="Rings" >Rings</option>
            <option value="Chains" >Chains</option>
            <option value="Necklaces" >Necklaces</option>
            <option value="Braclets">Braclets</option>
            <option value="Earrings" >Earrings</option>
            <option value="Charms">Charms</option>
          </select>
        </span>

        <span className="w-[250px] flex justify-evenly items-center">
          <label className="font-semibold">Name:</label>
          <input
            value={title}
            type="text "
            className="text-white w-[150px] rounded-lg bg-[#353538] text-sm pl-3 border"            
            onChange={(e)=>settitle(e.target.value)}
          ></input>
        </span>
        </span>

        <span className="flex justify-evenly items-center ">
          <label className="font-semibold">Material:</label>
          <input
            value={material}
            type="text"
            className="text-white border text-sm bg-[#353538] rounded-lg w-[120px] pl-3"
           
            onChange={(e)=>setmaterial(e.target.value)}
          ></input>
          <span className=" w-1/3 flex justify-evenly  ">
        <label className="font-semibold">Price:</label>
          <input
            value={price}
            type="number"
            className="text-white border rounded-lg w-[100px] bg-[#353538] pl-3"
            
            onChange={(e)=>setprice(e.target.value)}
          ></input>
        </span>
        </span>
        
        <span className="flex  justify-center ">
          
            <label className="font-semibold mr-4"> Description:</label>
          <textarea
           value={product_descp}
            type="text "
            className="h-[80px] w-1/2 text-white rounded-lg pl-3 border text-sm bg-[#353538] "
            
            onChange={(e)=>setproductdescp(e.target.value)}
          ></textarea>
        </span>
      </div>
      <motion.button
       initial={{scale:1}}
       whileTap={{scale:0.7}}
       className=" absolute top-5 right-5 w-[70px] h-[30px] rounded-lg  cursor-pointer bg-green-700 " onClick={()=>submititem()} formEncType="multipart/form-data">Add</motion.button>
    </div>

  );
};

export default Itemadding;
