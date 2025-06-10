import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
    const [options,setoptions]=useState([]);
    const choices =()=>{
    setoptions([
        {
        "id":1,
        "img":"/assets/ring_img.jpg",
        "title":"Rings",
        "route":"/rings",
        },
       {
        "id":2,
        "img":"/assets/chains.jpg",
         "title":"Chains",
         "route":"/chains"
       },
       {
         "id":3,
          "img":"/assets/braclet.png",
         "title":"Braclets",
         "route":"/braclets"
       },
       {
          "id":4,
         "img":"/assets/necklace.png",
        "title":"Necklaces",
        "route":"/necklaces"
         },
        {
        "id":5,
        "img":"/assets/earring.jpg",
         "title":"Earrings",
         "route":"/earrings"
         },
        {
        "id":6,
        "img":"/assets/charms.png",
         "title":"Charms",
         "route":"/charms"
         },
    ])
    }
    useEffect(()=>choices(),[]);

  

  return (
    <div className='h-[20rem] sm:h-[25rem] md:h-[30rem] md:w-[95%] lg:h-78  xl:h-[20rem] lg:w-[90%]  grid  grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-6 snap-start lg:gap-1 '>
        {options.map((card)=>(
          <Link key={card.id} to={card.route} className='relative border hover:cursor-pointer hover_card active:border-yellow-300'> 
            <img alt={card.title} src={card.img} className='h-full w-full object-center'></img>    
            <p className='text-white absolute bottom-1 right-1 text-[20px] md:text-[25px] lg:text-[25px] xl:text-[30px] font-[Jura]' >{card.title}</p>
            </Link>
           
        ))};
        
        
      
    </div>
  )
}

export default Category
