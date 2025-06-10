import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Necklace = () => {
    const [allnecklace,setnecklace]=useState([]);
const [displayednecklace, setdisplayednecklace] = useState([]);
const [sortType, setSortType] = useState('');
const [availability, setAvailability] = useState('');
const navigate=useNavigate();

   

 
    const getproducts=async()=>{
       const data=await axios.get("http://localhost:5000/products");
       const items=data.data.filter((item)=>item.category=='Necklace');
       setnecklace(items);
       setdisplayednecklace(items)
       
    }

    useEffect(() => {
  let filtered = [...allnecklace];


  if (availability === 'sold') {
    filtered = filtered.filter(item => item.soldout === true);
  } else if (availability === 'available') {
    filtered = filtered.filter(item => item.soldout === false);
  }

  
  if (sortType === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortType === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  setdisplayednecklace(filtered);
}, [allnecklace, sortType, availability]);
   
    useEffect(()=>{
       document.title="Necklaces || Aaina"

    const metaDescription=document.querySelector('meta[name="description"]');
    if(metaDescription){
      metaDescription.setAttribute('content','Buy somee popular Necklaces at Aaina store');
    }else{
      const newMeta=document.createElement('meta');
      newMeta.name='desciption';
      newMeta.content='Buy somee popular Necklaces at Aaina store';
      document.head.appendChild(newMeta);
    }
      
      getproducts()},[]);
   

  return (
    <div className=" h-fit text-white relative mt-4 text-center flex flex-col items-center ">
          <button onClick={()=>navigate('/')} className='absolute left-5 cursor-pointer text-[28px]'>{"←"}</button>
    <h1 className="text-[43px] font-bold ">NECKLACES</h1>
    <p className="mt-4 text-[24px] ]">Explore our Products</p> 
    <div className='h-12 mt-5 w-80 flex justify-evenly items-center rounded-2xl bg-[#414141]'>

      <select
      onChange={(e)=>setAvailability(e.target.value)}
      className="text-white text-[16px] p-2 rounded cursor-pointer outline-none  bg-[#414141]"
      >
        <option value="">Available</option>
        <option value="sold" >Sold Out</option>
      </select>


    <select 
   onChange={(e) => setSortType(e.target.value)} 
   className="text-white text-[16px] p-2  rounded cursor-pointer outline-none  bg-[#414141]"
    >
  <option value="">Price</option>
  <option value="low">Low to High</option>
  <option value="high">High to Low</option>
   </select>
</div>
    <div className='h-[100%] w-[90%] md:w-[80%]  xl:w-[70%]  mt-14 text-white  relative mb-16 '>
   
<div className='h-[95%] mt-10  grid grid-cols-2 gap-4 lg:grid-cols-3'>
     {displayednecklace.map((card,index)=>(
       <Link to='/sellcard'state={{id:card._id}}  key={index} className=' h-70  md:h-85 flex flex-col justify-evenly bg-[#101010] items-center' >
             <img alt={card.name} src={card.images[0]} className='h-[60%] w-[90%] '></img>
             <h1 className='text-[24px] font-semibold mb-[-10px] '>{card.name}</h1>
             <h4 className='opacity-[0.6]'>{card.material}</h4>
             <h3 className='text-[20px] font-bold'>${card.price}</h3>
            
            </Link>

     ))}</div>
     </div>
  </div>

  
  )
}

export default Necklace
