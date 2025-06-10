import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useDispatch ,useSelector } from "react-redux";
import { addtocart } from "../redux/counter/counter";
import axios from "axios";
import {motion} from 'motion/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { PiStarOfDavidDuotone } from "react-icons/pi";

const Sellcard = () => {
  const location = useLocation();
  const id = location.state?.id;
  const logged=useSelector((state)=>state.auth.isAuthenticated)
   const fileref=useRef()
  const [productinfo, setproductinfo] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userlogin,setuserlogin]=useState(false);
  const [image, setimage] = useState([]);
  const [quantity, setquantity] = useState(1);
  const [reviews, setreviews] = useState([]);
  const[reviewimage,setreviewimage]=useState("");
  const [totalstars,settotalstars]=useState(0);
  const [hovered,setHovered]=useState(0);
  const [userreview,setuserreview]=useState('');

  const fetchinfo = async () => {
    try {
      const data = await axios.get("http://localhost:5000/products");
      const product = data.data.find((item) => item._id === id);
      setproductinfo(product);
      setimage(product.images);
    } catch (err) {
      console.log(err);
    }
  };

  const handleaddtocart = () => {
    const items = {
      id,
      name: productinfo.name,
      image: image[0],
      material: productinfo.material,
      price: productinfo.price,
      quantity,
    };
    dispatch(addtocart(items));
  };

  const chngeQuantity = (val) => {
    if (quantity + val >= 1) {
      setquantity(quantity + val);
    }
  };
const handlechnge=()=>{
 fileref.current.click();
}


  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0)  {
      setreviewimage(files[0]);
      console.log(files[0]);
    }
  };
  const getreviews = async () => {
    try {
      const data = await axios.get(
        `http://localhost:5000/reviews/${id}`
      );
    
      console.log(data.data);
      setreviews(data.data);
      
    } catch (err) {
      console.error(err);
    }
  };


  const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });
};
     
    const handlesubmit=async()=>{
    try{
     const base64Image = await convertToBase64(reviewimage);
    const response= await axios.post("http://localhost:5000/reviews",{
      productid:id,
      username:"Watari",
      desc:userreview,
      Rating:totalstars,
      image:base64Image
    })

    setreviewimage("")
    setuserreview("")
    settotalstars("")
    console.log("Review saved:", response.data);

    }catch(err){
      console.error(err);
    }
  }

  useEffect(() => {
  
    window.scrollTo(0, 0); 
      fetchinfo();
      getreviews();

      setuserlogin(true);
   
  }, []);

  useEffect(()=>{
 document.title=`${productinfo.name}`

    const metaDescription=document.querySelector('meta[name="description"]');
    if(metaDescription){
      metaDescription.setAttribute('content','Buy our Most selling fashion jewelery piece at Aaina store');
    }else{
      const newMeta=document.createElement('meta');
      newMeta.name='desciption';
      newMeta.content='Buy our Most selling fashion jewelery piece at Aaina store';
      document.head.appendChild(newMeta);
    }

  },[productinfo])

  const settings = {
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 2,
    infinite: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
  <>
   
    <div className="h-fit lg:h-[230vh] text-white mt-[6rem]  flex justify-center  relative">
      <button
        onClick={() => navigate(-1)}
        className="text-4xl text-white absolute top-0 left-5 cursor-pointer"
      >
        {" "}
        ←
      </button>
      <div className="h-fit w-[90%] lg:h-[90%]    flex flex-col  items-center">
        <div className="h-fit lg:h-[50%] w-[90%]  overflow-scroll   flex flex-col justify-evenly  lg:flex-row font-[Jura]">
          <div className="h-fit w-full lg:w-[50%] border     border-gray-700  flex flex-row justify-between items-center ">
            <Slider
              dots={true}
              arrows={false}
              infinite={false}
              slidesToShow={1}
              slidesToScroll={1}
              speed={500}
              className="lg:h-[400px] h-[280px]  w-full"
              
            >
              {image.length > 0 ? (
                image.map((item, index) => (
                
                    <img key={index}
                      src={item}
                      alt={`Product ${index}`}
                      className="  h-70 lg:h-90 object-contain "
                    />


                ))
              ) : (
                <div className="text-white">No images available</div>
              )}
            </Slider>
          </div>

          <div className="h-fit w-full lg:w-[50%]    flex flex-col justify-evenly">
            <div className="h-[250px] " >
              <span className="h-18 w-[100%] lg:h-20 flex flex-col lg:flex-row  lg:items-center justify-between   p-6  text-white">
                <a className="text-[26px] lg:text-[32px] font-bold ">{productinfo.name}</a>
                <a className="text-lg lg:text-[24px]">{productinfo.material}</a>
              </span>

              <span className="h-[50px]  w-full pl-6 text-xl lg:text-2xl xl:text-3xl flex items-center ">
                <a>${productinfo.price}</a>
              </span>

              <span className="h-20 w-full pl-6  flex flex-row justify-between items-center pr-6">
                <span className="h-[70%] w-[20%]  flex flex-row justify-evenly items-center">
                  <button
                    onClick={() => {
                      chngeQuantity(-1);
                    }}
                    className="text-lg cursor-pointer"
                  >
                    -
                  </button>
                  <a className="text-lg">{quantity}</a>
                  <button
                    onClick={() => {
                      chngeQuantity(1);
                    }}
                    className="text-lg cursor-pointer"
                  >
                    +
                  </button>
                </span>

                <motion.button
                  whileTap={{scale:0.5}}
                  transition={{duration:2,type:'spring'}}
                  onClick={() => handleaddtocart()}
                  className="h-15 w-40 cursor-pointer text-xl bg-green-800"
                >
                  Add to cart
                </motion.button>
              </span>
            </div>

            <span className="pl-6  flex flex-row opacity-[0.8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 -1 26 26"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.31 16.826C12.2864 17.9963 11.3464 18.9278 10.2052 18.9118C9.06401 18.8957 8.14927 17.9382 8.15697 16.7676C8.16467 15.5971 9.09191 14.6522 10.2332 14.652C10.7897 14.6578 11.3212 14.8901 11.7106 15.2978C12.1001 15.7055 12.3157 16.2552 12.31 16.826V16.826Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.2014 16.826C22.1778 17.9963 21.2378 18.9278 20.0966 18.9118C18.9554 18.8957 18.0407 17.9382 18.0484 16.7676C18.0561 15.5971 18.9833 14.6522 20.1246 14.652C20.6811 14.6578 21.2126 14.8901 21.602 15.2978C21.9915 15.7055 22.2071 16.2552 22.2014 16.826V16.826Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.8032 17.576C18.2174 17.576 18.5532 17.2402 18.5532 16.826C18.5532 16.4118 18.2174 16.076 17.8032 16.076V17.576ZM12.31 16.076C11.8958 16.076 11.56 16.4118 11.56 16.826C11.56 17.2402 11.8958 17.576 12.31 17.576V16.076ZM17.0571 16.826C17.0571 17.2402 17.3928 17.576 17.8071 17.576C18.2213 17.576 18.5571 17.2402 18.5571 16.826H17.0571ZM18.5571 11.559C18.5571 11.1448 18.2213 10.809 17.8071 10.809C17.3928 10.809 17.0571 11.1448 17.0571 11.559H18.5571ZM17.8071 16.076C17.3928 16.076 17.0571 16.4118 17.0571 16.826C17.0571 17.2402 17.3928 17.576 17.8071 17.576V16.076ZM18.0518 17.576C18.466 17.576 18.8018 17.2402 18.8018 16.826C18.8018 16.4118 18.466 16.076 18.0518 16.076V17.576ZM22.189 16.0762C21.7749 16.0852 21.4465 16.4281 21.4555 16.8423C21.4644 17.2564 21.8074 17.5848 22.2215 17.5758L22.189 16.0762ZM24.4 14.485L25.1499 14.4718C25.1492 14.4331 25.1455 14.3946 25.1389 14.3565L24.4 14.485ZM24.63 11.4305C24.559 11.0224 24.1706 10.7491 23.7625 10.8201C23.3544 10.8911 23.0812 11.2794 23.1521 11.6875L24.63 11.4305ZM17.8031 6.127C17.3889 6.127 17.0531 6.46279 17.0531 6.877C17.0531 7.29121 17.3889 7.627 17.8031 7.627V6.127ZM21.2849 6.877L21.2849 7.62702L21.2897 7.62698L21.2849 6.877ZM22.8737 7.56387L22.327 8.07731L22.327 8.07731L22.8737 7.56387ZM23.4835 9.218L22.7342 9.18603C22.7319 9.23979 22.7354 9.29363 22.7446 9.34663L23.4835 9.218ZM23.1522 11.6876C23.2232 12.0957 23.6116 12.3689 24.0197 12.2979C24.4278 12.2268 24.701 11.8384 24.6299 11.4304L23.1522 11.6876ZM18.5531 6.877C18.5531 6.46279 18.2174 6.127 17.8031 6.127C17.3889 6.127 17.0531 6.46279 17.0531 6.877H18.5531ZM17.0531 11.559C17.0531 11.9732 17.3889 12.309 17.8031 12.309C18.2174 12.309 18.5531 11.9732 18.5531 11.559H17.0531ZM17.0531 6.877C17.0531 7.29121 17.3889 7.627 17.8031 7.627C18.2174 7.627 18.5531 7.29121 18.5531 6.877H17.0531ZM17.8031 6.077L17.0531 6.0722V6.077H17.8031ZM16.7657 5L16.77 4.25H16.7657V5ZM7.42037 5L7.42037 4.24999L7.41679 4.25001L7.42037 5ZM6.68411 5.31693L6.14467 4.79587L6.14467 4.79587L6.68411 5.31693ZM6.382 6.075L7.13201 6.075L7.13199 6.07158L6.382 6.075ZM6.382 15.75L7.132 15.7534V15.75H6.382ZM6.68411 16.5081L6.14467 17.0291L6.14467 17.0291L6.68411 16.5081ZM7.42037 16.825L7.41679 17.575H7.42037V16.825ZM8.1526 17.575C8.56681 17.575 8.9026 17.2392 8.9026 16.825C8.9026 16.4108 8.56681 16.075 8.1526 16.075V17.575ZM17.8051 10.808C17.3909 10.808 17.0551 11.1438 17.0551 11.558C17.0551 11.9722 17.3909 12.308 17.8051 12.308V10.808ZM23.893 12.308C24.3072 12.308 24.643 11.9722 24.643 11.558C24.643 11.1438 24.3072 10.808 23.893 10.808V12.308ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75V6.25ZM4.05175 7.75C4.46596 7.75 4.80175 7.41421 4.80175 7C4.80175 6.58579 4.46596 6.25 4.05175 6.25V7.75ZM1.975 9.25C1.56079 9.25 1.225 9.58579 1.225 10C1.225 10.4142 1.56079 10.75 1.975 10.75V9.25ZM3.925 10.75C4.33921 10.75 4.675 10.4142 4.675 10C4.675 9.58579 4.33921 9.25 3.925 9.25V10.75ZM2.56975 12.25C2.15554 12.25 1.81975 12.5858 1.81975 13C1.81975 13.4142 2.15554 13.75 2.56975 13.75V12.25ZM3.925 13.75C4.33921 13.75 4.675 13.4142 4.675 13C4.675 12.5858 4.33921 12.25 3.925 12.25V13.75ZM17.8032 16.076H12.31V17.576H17.8032V16.076ZM18.5571 16.826V11.559H17.0571V16.826H18.5571ZM17.8071 17.576H18.0518V16.076H17.8071V17.576ZM22.2215 17.5758C23.8876 17.5397 25.1791 16.1341 25.1499 14.4718L23.6501 14.4982C23.6655 15.3704 22.9939 16.0587 22.189 16.0762L22.2215 17.5758ZM25.1389 14.3565L24.63 11.4305L23.1521 11.6875L23.6611 14.6135L25.1389 14.3565ZM17.8031 7.627H21.2849V6.127H17.8031V7.627ZM21.2897 7.62698C21.6768 7.62448 22.0522 7.7847 22.327 8.07731L23.4204 7.05042C22.8641 6.4581 22.0909 6.12177 21.28 6.12702L21.2897 7.62698ZM22.327 8.07731C22.6025 8.37065 22.7519 8.7712 22.7342 9.18603L24.2328 9.24997C24.2675 8.43728 23.976 7.642 23.4204 7.05042L22.327 8.07731ZM22.7446 9.34663L23.1522 11.6876L24.6299 11.4304L24.2224 9.08937L22.7446 9.34663ZM17.0531 6.877V11.559H18.5531V6.877H17.0531ZM18.5531 6.877V6.077H17.0531V6.877H18.5531ZM18.5531 6.0818C18.5562 5.60485 18.3745 5.14259 18.0422 4.79768L16.9619 5.83829C17.0188 5.8974 17.0537 5.98123 17.0532 6.0722L18.5531 6.0818ZM18.0422 4.79768C17.7094 4.45212 17.2522 4.25277 16.77 4.25001L16.7615 5.74999C16.8331 5.7504 16.9056 5.77984 16.9619 5.83829L18.0422 4.79768ZM16.7657 4.25H7.42037V5.75H16.7657V4.25ZM7.41679 4.25001C6.93498 4.25231 6.4778 4.45098 6.14467 4.79587L7.22355 5.83799C7.27989 5.77967 7.3524 5.75033 7.42396 5.74999L7.41679 4.25001ZM6.14467 4.79587C5.81216 5.1401 5.62983 5.60177 5.63201 6.07843L7.13199 6.07158C7.13158 5.98066 7.16659 5.89696 7.22355 5.83799L6.14467 4.79587ZM5.632 6.075V15.75H7.132V6.075H5.632ZM5.63201 15.7466C5.62983 16.2232 5.81216 16.6849 6.14467 17.0291L7.22355 15.987C7.16659 15.928 7.13158 15.8443 7.13199 15.7534L5.63201 15.7466ZM6.14467 17.0291C6.4778 17.374 6.93498 17.5727 7.41679 17.575L7.42396 16.075C7.3524 16.0747 7.27988 16.0453 7.22355 15.987L6.14467 17.0291ZM7.42037 17.575H8.1526V16.075H7.42037V17.575ZM17.8051 12.308H23.893V10.808H17.8051V12.308ZM1 7.75H4.05175V6.25H1V7.75ZM1.975 10.75H3.925V9.25H1.975V10.75ZM2.56975 13.75H3.925V12.25H2.56975V13.75Z"
                  fill="white"
                />
              </svg>
              <a className="text-lg xl:text-xl  ml-2">PAN Delivery</a>
            </span>

            <span className="pl-6 flex flex-row opacity-[0.8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                width="30px"
                height="30px"
                viewBox="0 0 52 52"
              >
                <g>
                  <path
                    d="m19.56 6.29a17.94 17.94 0 0 0 0 35.87h.8v-14.22c0-1.06.81-2.42 1.88-2.42h15.2c0-.59.06-1 .06-1.32a18 18 0 0 0 -17.94-17.91zm14.32 16.4h-4.62a26.74 26.74 0 0 0 -2.54-10.76 14.52 14.52 0 0 1 7.16 10.76zm-16.37-11.79v11.79h-4.1c.31-5.62 2.08-10.06 4.1-11.79zm0 14.86v11.78c-2-1.73-3.79-6.15-4.1-11.78zm4.1-3.07v-11.79c2 1.73 3.8 6.17 4.1 11.79zm-9.22-10.76a27.62 27.62 0 0 0 -2.53 10.76h-4.65a14.48 14.48 0 0 1 7.18-10.76zm-7.17 14.34h4.65a26.74 26.74 0 0 0 2.52 10.73 14.5 14.5 0 0 1 -7.17-10.73z"
                    fill-rule="evenodd"
                  />

                  <path
                    d="m47.5 28.56h-21.77a2.5 2.5 0 0 0 -2.5 2.5v12.15a2.5 2.5 0 0 0 2.5 2.5h21.77a2.5 2.5 0 0 0 2.5-2.5v-12.15a2.5 2.5 0 0 0 -2.5-2.5zm-18.84 14.65a2.92 2.92 0 0 0 -2.84-3h-.08v-6.21a2.93 2.93 0 0 0 3-2.84v-.07h15.81a2.91 2.91 0 0 0 2.87 2.91h.08v6.25a2.93 2.93 0 0 0 -3 2.86v.09z"
                    fill-rule="evenodd"
                  />

                  <circle cx="36.61" cy="36.92" r="4.2" />
                </g>
              </svg>
              <a className="text-lg xl:text-xl ml-2">Digital Payments</a>
            </span>
            <div className="h-[30%] w-[90%]   text-white font-[Jura] flex flex-col  ">
              <h2 className="text-[20px] xl:text-[24px] font-bold mt-10 ml-6">
                Product description :
              </h2>
              <p className="pl-6 text-md xl:text-lg "> {productinfo.description}</p>
            </div>
          </div>
        </div>

        <div
          id="review"
          className="h-fit w-full   relative  mt-9 mb-15 flex flex-col justify-evenly  text-white   "
        >
          <h2 className="text-[28px] font-bold  ">Reviews</h2>
        

       
        {userlogin ?   <div className="w-[90%] h-[180px] lg:h-[250px] xl:w-[60%]  m-10 xl:m-15  border rounded-2xl  mt-5  flex flex-col">
             <div className="h-[30%] w-full   flex flex-row justify-evenly items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.34"
                    d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="w-[60%]  flex flex-col">
                  <a className="text-lg font-semibold">Watari</a>
                  <span className="flex">
                    {[1,2,3,4,5].map((star)=>
                    (              
                   <svg 
                    key={star}
                    onClick={()=>settotalstars(star)}
                   onMouseEnter={() => setHovered(star)}
                   onMouseLeave={() => setHovered(0)}
                   style={{ fill: star <= (hovered || totalstars) ? 'gold' : 'none', cursor: 'pointer' }}
           
                   xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                    <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                   
                    ))
                   
}
                   
                  </span>
                </div>
                <span className=" w-[20%]    flex flex-row justify-evenly items-center">
                  <a onClick={handlechnge} className="cursor-pointer" >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <input onChange={handleFileChange} ref={fileref} type="file" accept="image/*" className="hidden" ></input>
                  <motion.button
                    whileTap={{scale:0.8}}
                    transition={{
                      duration:3,
                      type:"spring"

                    }}
                   onClick={handlesubmit}
                   className="h-8 w-20  rounded-lg bg-green-900 border-white cursor-pointer">
                    Post
                  </motion.button>
                </span>
              </div>
              <div className="h-[60%] w-full  border-white border-t">
                <textarea
                  placeholder="Write Something"
                  type="text"
                  onChange={(e)=>setuserreview(e.target.value)}
                  value={userreview}
                  className="p-4 text-[18px] border-none outline-none h-full w-full  resize-none "
                  maxLength={180}
                ></textarea>
                 {reviewimage && <img src={URL.createObjectURL(reviewimage)} alt="imgg" className="border h-[60px] w-[60px] object-contain absolute right-5 bottom-3"></img>
}
                
              </div>
            </div>:<h3 className="text-[16px]  m-10">To Write a review you have to be logined first.</h3>}

     <div className="h-fit w-full overflow-scroll flex   ">
      
          {reviews.length>0 ?
              <Slider {...settings} className="w-full">
                {  reviews.map((review)=>(
                <div key={review._id} className="h-[240px] w-[480px] cursor-grab mx-4 border flex flex-col rounded-2xl ">
                  <div className="h-[30%] relative w-full border-b flex justify-evenly items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60px"
                      height="60px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.34"
                        d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="h-full w-[80%] flex flex-col pl-3 pt-3">
                      <h2 className="font-bold ">{review.username}</h2>
                      <h3>{'⭐'.repeat(review.Rating)}</h3>
                    </div>
                  </div>
                  <div className="h-[80%] w-full p-4">
                    <p className="text-[14px] font-semibold ">
                     {review.Review}
                    </p>
                    <img src={review.Image} className="absolute h-[100px] w-[80px] object-contain right-2 bottom-2"></img>
                  </div>
                </div>
                ))}
                

              </Slider>:<div className="text-[18px] m-10 text-semibold ">Be the first One to write a review.</div>
}
            </div>
            </div>
           
            

          </div>
      
      </div>
 </>
  );
};

export default Sellcard;
