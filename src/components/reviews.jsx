import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from 'react-slick';
import axios from 'axios'
const Reviews = () => {
   const [reviews,setreviews]=useState([]);
  
  
   
  useEffect(()=>{
    const fetchreview=async()=>{
  try{
   const res=await axios.get("http://localhost:5000/reviews");

   setreviews(res.data)
  }catch(err){
    console.error(err);
    
  }
    }

    fetchreview();


  },[]);

    const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
    <div className='h-[25rem]  md:h-[35rem]  mb-30  md:w-[95%]   flex flex-col justify-evenly text-white  font-[Jura] '>
    <a className='text-3xl md:text-5xl font-semibold font-[Jura] ml-8'>Reviews</a>
    <div className='h-[80%] w-[100%]   flex justify-evenly items-center flex-col '>

      <a className='text-[16px]  md:text-[20px]'>Reviews from our 15k+ wonderful community .</a>
    <div className='h-[80%] w-[90%]   md:w-[80%] md:h-[80%] mt-9 px-4 '>
             <Slider {...settings}>
                {  reviews.slice(0,10).map((review)=>(
                <div key={review._id} className="h-50 md:h-80 mx-6 relative cursor-grab  border flex flex-col rounded-2xl ">
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
                    <p className="text-[12px] md:text-[14px] font-semibold ">
                     {review.Review}
                    </p>
                    {review.Image && <img src={review.Image}  className="absolute h-[80px] w-[80px] md:h-[100px] object-contain right-2 bottom-2 rounded-lg"></img>}
                  </div>
                </div>
                ))}
                

              </Slider>

        
       </div>
       
    
      </div>
    </div>
    </>
  )
}

export default Reviews
