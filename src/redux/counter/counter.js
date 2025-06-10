
import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    items:[{
      id:0,
      name:"Aura ring",
      image:"/assets/braclet.png",
      material:"Steel",
      price:199,
      quantity:1,
    }],
  },
  reducers: {
   addtocart:(state,action)=>{
     const newitem=action.payload;
     const existing=state.items.find(item=>item.id===newitem.id);
     if(existing){
      existing.quantity+=1;
     }else{
      state.items.push({...newitem,quantity:1});
     }
     console.log(newitem);;
   },
   removefromcart:(state,action)=>{
    state.items=state.items.filter(item=>item.id!==action.payload.id);
    console.log(action.payload);
   },
   updatequantity:(state,action)=>{
    const { id, newQty } = action.payload;
    const existing=state.items.find((item)=>item.id===id);
    if(existing){existing.quantity=newQty;}


   },
   clearcart:(state)=>{
    state.items=[]; 
   }

  },
});

export const { addtocart,removefromcart,updatequantity,clearcart } = cartSlice.actions;

export default cartSlice.reducer;
