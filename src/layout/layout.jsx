import React from 'react'
import Navbar from '../components/navbar';
import Contact from '../components/contact';
import { useLocation,Outlet } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  // List of routes where you DON'T want Navbar/Footer
  const noLayoutRoutes = ['/buynow'];

  const hideLayout = noLayoutRoutes.includes(location.pathname);



  return (
    <div className='h-fit  flex_center justify-center bg-black  m-0 p-0 '>
    <div className='h-fit w-[100%] 2xl:w-[80%] flex flex-col md:items-center  relative m-0 p-0 '>
      
       {!hideLayout && <Navbar/>} 
        <main className="flex-grow w-[100%]"><Outlet/></main>

         <footer className=' w-full'>{!hideLayout && <Contact/> }</footer>
            
   
    </div>
   </div>
  )
}

export default Layout
