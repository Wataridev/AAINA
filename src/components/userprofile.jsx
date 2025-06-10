import React, { useState } from 'react'
import { AiFillPicture } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Userprofile = ({isOpen,setIsOpen}) => {
  const [admin,setadmin]=useState(true);

  return (
    <>
  <div className={`h-[88vh] w-[60%] md:w-[40%] lg:w-[20%] z-30 fixed top-20 left-0 bg-black  flex justify-center items-center   transform transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0" : "translate-x-full"}`} >
      <div className=' h-[90%] w-[90%]'>
       <div className='h-[50%] w-full flex flex-col items-center justify-evenly'>
        <a className='h-[60px] w-[60px] border-1 border-white rounded-full  flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 20 20" version="1.1">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -2159.000000)" fill="white">
           <g id="icons" transform="translate(56.000000, 160.000000)">
          <path d="M374,2009 C371.794,2009 370,2007.206 370,2005 C370,2002.794 371.794,2001 374,2001 C376.206,2001 378,2002.794 378,2005 C378,2007.206 376.206,2009 374,2009 M377.758,2009.673 C379.124,2008.574 380,2006.89 380,2005 C380,2001.686 377.314,1999 374,1999 C370.686,1999 368,2001.686 368,2005 C368,2006.89 368.876,2008.574 370.242,2009.673 C366.583,2011.048 364,2014.445 364,2019 L366,2019 C366,2014 369.589,2011 374,2011 C378.411,2011 382,2014 382,2019 L384,2019 C384,2014.445 381.417,2011.048 377.758,2009.673" id="profile-[#1335]">
           </path> 
                </g>
               </g>
              </g>
         </svg>
        </a>

        <div className={`h-${admin? "50%" :"40%"} w-full  text-white flex flex-col items-center justify-evenly font-[Jura] text-[18px]`}>
            <Link to="/login" className='h-[40px] w-full border-t border-b border-[#414141] flex justify-center items-center cursor-pointer hover:text-gray-500 active:text-gray-500' >
                Profile
            </Link>
            <Link className='h-[40px] w-full border-t border-b border-[#414141] flex justify-center items-center cursor-pointer hover:text-gray-500 active:text-gray-500'>Track Your Order</Link>
            <Link className='h-[40px] w-full border-t border-b border-[#414141] flex justify-center items-center cursor-pointer hover:text-gray-500 active:text-gray-500'>Raise a complaint</Link>

           {admin&& <Link to="/admin_panel" className='h-[40px] w-full border-t border-b border-[#414141] flex justify-center items-center cursor-pointer hover:text-gray-500 active:text-gray-500'>Admin Panel</Link>}
             </div>
        </div>
      </div>
      <button className='absolute top-5 left-5 text-white text-xl hover:cursor-pointer' onClick={()=>setIsOpen(false)}>X</button>
    </div>
    
    </>
  )
}

export default Userprofile
