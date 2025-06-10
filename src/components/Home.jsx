// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero_sec';
import Category from '../components/Category';
import Bestseller from '../components/Bestseller';
import NewArrival from '../components/newarrival';
import Reviews from '../components/reviews';
import Contact from '../components/contact';
import Navbar from './navbar';

const Home = () => {
  return (
    <>
    
     <div className='h-[100%] w-[100%] 2xl:w-[80%] flex flex-col md:items-center overflow-scroll scroll-smooth snap-y snap-mandatory  relative m-0 p-0 '>

      <Hero />
      <Category />
      <Bestseller />
      <NewArrival />
      <Reviews />
  
      </div>
    
    </>
  );
};

export default Home;
