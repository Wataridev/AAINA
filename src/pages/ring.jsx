import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Ring = () => {
    const [allrings,setrings]=useState([]);
const [displayedRings, setDisplayedRings] = useState([]);
const [sortType, setSortType] = useState('');
const [availability, setAvailability] = useState('');
const navigate=useNavigate();

   

 
    const getproducts=async()=>{
       const data=await axios.get("http://localhost:5000/products");
       const items=data.data.filter((item)=>item.category=='Rings');
       setrings(items);
       setDisplayedRings(items)
       
    }

    useEffect(() => {
  let filtered = [...allrings];


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

  setDisplayedRings(filtered);
}, [allrings, sortType, availability]);
   
    useEffect(()=>{
      document.title="Rings || Aaina"

    const metaDescription=document.querySelector('meta[name="description"]');
    if(metaDescription){
      metaDescription.setAttribute('content','Buy somee popular rings at Aaina store');
    }else{
      const newMeta=document.createElement('meta');
      newMeta.name='desciption';
      newMeta.content='Buy somee popular rings at Aaina store';
      document.head.appendChild(newMeta);
    }
      
      getproducts()},[]);
   

  return (
    <div className=" h-fit text-white mt-4 relative text-center flex flex-col items-center ">
      <button onClick={()=>navigate('/')} className='absolute left-5 cursor-pointer text-[28px]'>{"←"}</button>
    <h1 className="text-[43px] font-bold ">RINGS</h1>
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
     {displayedRings.map((card,index)=>(
       <Link to='/sellcard'state={{id:card._id}}  key={index} className=' h-70  md:h-85 flex flex-col justify-evenly bg-[#101010] items-center' >
        <img alt={card.name} src={card.images[0]} className='h-[60%] w-[90%] '></img>
        <h1 className='text-[20px] md:text-[24px] font-semibold mb-[-10px] '>{card.name}</h1>
        <h4 className='opacity-[0.6]'>{card.material}</h4>
        <h3 className='text-[20px] font-semibold'>${card.price}</h3>
       
       </Link>

     ))}</div>
     </div>
  </div>

  
  )
}

export default Ring
