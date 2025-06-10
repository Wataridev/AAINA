import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/counter/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Loadinganimation from "../components/loadinganimation";
import Successanimation from "../components/successanimation"
import Cancelanimation from "../components/cancelanimation"

const Login = () => {
  const [phoneno, setphone] = useState("");
  const [password, setPass] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showpassword, setshowpass] = useState(false);
  const [status,setstatus]=useState("");
  const [loginerror,setloginerror]=useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPass(value);
    setloginerror("")

    // Check if it contains at least one digit
    if (!/\d/.test(value)) {
      setPasswordError("Password must contain at least one digit");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async () => {
    setstatus("loading")
    
    try {
      
      const res = await axios.post("http://localhost:5000/login", {
        Phonenumber: phoneno,
        password,
      });
      
      const token = res.data.token;
      const payload = JSON.parse(atob(token.split(".")[1]));
      dispatch(loginSuccess({ token, role: payload.role }));
      setstatus("success");
      setTimeout(()=>navigate("/"),2000) ;

     
    } catch (err) {
      setstatus("failed")
          if (err.response && err.response.data && err.response.data.message) {
      setloginerror(err.response.data.message); 
          }// or use a toast/snackbar instead
    console.error(err);
        }
    

  };

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
      <div className="h-[80vh] lg:h-[100vh] relative w-full flex justify-center items-center  ">
              <button onClick={()=>navigate('/')} className='absolute left-5 cursor-pointer text-[28px]'>{"←"}</button>

          {status && (
          <div className="absolute w-full h-full backdrop-blur-lg flex justify-center items-center ">
            {status === "loading" && <Loadinganimation />}
            {status === "success" && <Successanimation />}
            {status === "failed" && <Cancelanimation />}
          </div>
        )}
        <motion.div
      
           animate={{ borderColor: ["#FFD700", "#DC143C", "#FFD700"] }}
          transition={{
            duration:5,
            repeat:Infinity,
            repeatType:"loop",
            ease:"linear",
          }}
          className="h-[50%] md:h-[60%] md:w-[60%] lg:h-[70%] w-[90%] lg:w-[50%] bg-black rounded-2xl 
          text-white flex flex-col items-center justify-evenly font-[Jura]"
          style={{
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "yellow",
          }}
        >
          <a className="text-[2rem] font-bold ">Login</a>
          <div className="h-[80%] w-[90%]  flex flex-col items-center justify-center">
            <form className="h-[40%] w-[70%] lg:w-[50%]  flex flex-col items-center justify-evenly">
              <input
                type="number"
                placeholder="Phone No"
                value={phoneno}
                maxLength={10}
                minLength={10}
                required
                onChange={(e) => setphone(e.target.value)}
                className="border-white  border rounded-lg h-[40px] w-full pl-4"
              ></input>

              <span className="h-[30%] lg:h-[40%] w-full relative flex  items-center">
                <input
                  placeholder="Password"
                  type={showpassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  className=" border-white  border rounded-lg h-[40px] w-full pl-4 pr-10"
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
              {loginerror && (<p className="text-red-400 text-sm mt-1">{loginerror}</p>) }
            </form>
            <div className="h-[40%] flex flex-col justify-evenly items-center">
              <Link
                to="/sign_up"
                className="cursor-pointer text-white underline"
              >
                Don't have a account?Sign up
              </Link>
              <motion.button
                onClick={handleLogin}
                whileTap={{scale:0.95,backgroundColor:"#008000"}}
                className="h-[35px] w-[90px] bg-green-800  font-bold rounded-xl cursor-pointer "
              >
                Login
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
