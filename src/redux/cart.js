import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './counter/counter.js';
import authReducer from './counter/authSlice.js';

export const store=configureStore({
    reducer:{
        cart:cartReducer, 
        auth:authReducer
    }
})