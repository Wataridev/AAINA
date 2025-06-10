import {React,useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom';
import Cards from './Cards';
import axios from 'axios'

const NewArrival = () => {

 const [cards,setcards]=useState([]);
 const scrollRef=useRef(null);

 
 

    useEffect(()=>{
      const fetchitems=async()=>{
       try{
        const req=await axios.get("http://localhost:5000/products");
        const data=req.data.filter((item)=>item.NewArrival===true);

        setcards(data);
     
       }
       catch(err){
        console.error(err);
       }

      }
      
      fetchitems();
    },[]);

    const scrollLeft = () => {
      scrollRef.current.scrollBy({
        left: -300, // scroll left by 300px
        behavior: 'smooth'
      });
    };
  
    const scrollRight = () => {
      scrollRef.current.scrollBy({
        left: 300, // scroll right by 300px
        behavior: 'smooth'
      });
    };


  return (
    <div className='h-[30rem] md:h-[40rem] mt-10 lg:h-[42rem] lg:w-[95%]  md:w-[95%]  flex flex-col snap-start justify-evenly text-white '>
      <a className='text-3xl md:text-5xl  font-semibold font-[Jura] ml-8'>New Arrivals</a>
      <div className='h-[80%]   w-[100%]   relative flex justify-center items-center'>
        <div  ref={scrollRef} className='h-[80%]   w-[90%] lg:h-[90%]  overflow-x-scroll scroll-smooth  flex flex-row justify-evenly items-center  '> 
          {cards.map((item)=>(
            <div  key={item._id} className='ml-4'>
              <Cards id={item._id} image={item.images[0]} name={item.name} material={item.material} price={item.price}  />
              </div>
          ))}
        
          
        </div>
        <button onClick={scrollLeft} className="h-[60px] w-[60px]  rounded-full absolute hover:border cursor-pointer left-0  text-3xl bg-gray-950 flex_center justify-center" > {"<"} </button>    
        <button onClick={scrollRight} className="h-[60px] w-[60px]  rounded-full absolute hover:border cursor-pointer right-0  text-3xl bg-gray-950 flex_center justify-center"
       > {">"} </button>
      </div>
      
    </div>
  )
}

export default NewArrival
