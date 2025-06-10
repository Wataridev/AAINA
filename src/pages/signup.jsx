import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import axios from 'axios'
import {motion} from 'motion/react'
import Loadinganimation from "../components/loadinganimation";
import Successanimation from "../components/successanimation"
import Cancelanimation from "../components/cancelanimation"

const Signup = () => {
      const [phoneno, setphone] = useState("");
      const [password, setPass] = useState("");
      const [username,setname]=useState("");
      const [city,setcity]=useState("");
      const [state,setstate]=useState("");
      const [address,setaddress]=useState("");
      const [passwordError, setPasswordError] = useState("");
      const [showpassword, setshowpass] = useState(false);
     const  [pincode,setpincode]=useState("");
      const [numbererror,setnumbererror]=useState("");
      const [status,setstatus]=useState("");
    
      const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPass(value);
       
        // Check if it contains at least one digit
        if (!/\d/.test(value) && value!=="") {
          setPasswordError("Password must contain at least one digit");
        } else {
          setPasswordError("");
        }
      };

      const handleNumbervalid=async (e)=>{
        const val=e.target.value;
         setphone(val);
        console.log(val.length)
        if(val.length>10 && val!==""){
          setnumbererror("Enter a valid phonenumber");
        }
        else{
          setnumbererror("");
        }
      }
      
      const handlesubmit=async()=>{
        setstatus("loading")

        try{
          await axios.post("http://localhost:5000/signup",
            {
              Username:username,
              Phonenumber:phoneno,
              Address:{
                Area:address,
                City:city,
                State:state,
                Pincode:pincode,
              },
              password,
            });
            setstatus("success");
            setname("");
            setPass("");
            setphone("");
            setaddress("");
            setcity("");
            setstate("");
            setpincode("");

        }catch(err){
          setstatus("failed");
          console.log(err);
      
        }

      }
   
    useEffect(() => {
        if (status === "success" || status === "failed") {
          const timer = setTimeout(() => {
            setstatus("");
          }, 2000);
          return () => clearTimeout(timer);
        }
      }, [status]);
  return (
    <>
      <div className="h-[110vh] relative w-full flex justify-center items-center ">
         {status && (
          <div className="absolute w-full h-full flex justify-center items-center ">
            {status === "loading" && <Loadinganimation />}
            {status === "success" && <Successanimation />}
            {status === "failed" && <Cancelanimation />}
          </div>
        )}
        <motion.div

        animate={{ borderColor: ["#FFD700", "#FFA500", "#DC143C", "#FFD700"] }}
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

         
        className="h-[50%] lg:h-[70%] w-[90%] md:w-[60%] lg:w-[60%] rounded-2xl   bg-black text-white flex flex-col items-center justify-evenly ">
          
          <a className="text-[2rem] font-bold ">SignUp</a>
          <div className="h-[80%] w-[90%]  flex flex-col items-center justify-center">
            <form className="h-[80%] w-[70%] lg:w-[50%]  flex flex-col items-center justify-evenly">
                
                
                <input placeholder='Instagram Handle' value={username} type="text" onChange={(e)=>setname(e.target.value)} className='border-[#414141] border text-white  h-[40px] w-full pl-4 rounded-lg' ></input>
             <span className=' w-full relative flex  items-center'>
              <input
                type="number"
                placeholder="Phone No"
                value={phoneno}
                required
                onChange={handleNumbervalid}
                className="border-[#414141]  border   text-white  h-[40px] w-full pl-4 rounded-lg"
              ></input>
              </span>
              {numbererror &&  <p className="text-red-400 text-sm mt-1">{numbererror}</p>}

              <span className=" w-full relative flex  items-center">
                <input
                  placeholder="Password"
                  type={showpassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  className="border border-[#414141]  rounded-lg h-[40px] w-full pl-4 pr-10"
                />

                <span
                  className="absolute right-3 cursor-pointer"
                  onClick={() => setshowpass(!showpassword)}
                >
                  {showpassword ? (
                    <AiFillEyeInvisible size={22}> </AiFillEyeInvisible>
                  ) : (
                    <AiFillEye size={22}></AiFillEye>
                  )}
                </span>
               
              </span>
              {passwordError && (
                  <p className="text-red-400 text-sm mt-1">{passwordError}</p>
                )}

                <input placeholder='Address' value={address} type='text' onChange={(e)=>setaddress(e.target.value)} className='border-[#414141]  border text-white  rounded-lg h-[40px] w-full pl-4'></input>

                <span className='w-full flex justify-between items-center '>
                    <input placeholder='City' value={city} type='text' onChange={(e)=>setcity(e.target.value)} className='border-[#414141]  border text-white  h-[40px] w-[50%] pl-4 rounded-lg'></input>
                    <input placeholder='State' value={state} type='text' onChange={(e)=>setstate(e.target.value)} className='border-[#414141]  border text-white  rounded-lg h-[40px] w-[40%] pl-4'></input>
                </span>
                <span>
                  <input type='number' placeholder='pincode'  onChange={(e)=>setpincode(e.target.value)} className='border-[#414141]  border text-white  rounded-lg h-[40px] w-full pl-4' ></input>
                </span>
            </form> 
            <div className="h-[40%] flex flex-col justify-evenly items-center">
              <Link to="/login" className="cursor-pointer text-white underline">Already have a account?Login </Link>
              <motion.button
              onClick={handlesubmit}
                whileTap={{scale:0.8}}
                className="h-[35px] w-[90px] bg-green-800  rounded-xl cursor-pointer ">
                  Sign up
                  </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Signup
