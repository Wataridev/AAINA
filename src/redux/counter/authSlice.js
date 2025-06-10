
import { createSlice } from "@reduxjs/toolkit";

// Get token and role from localStorage
const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

const initialState = {
  isAuthenticated: !!token,
  token: token || null,
  role: role || null, // Initialize from localStorage
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.role = action.payload.role;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role); // Persist role
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.role = null;

      localStorage.removeItem("token");
      localStorage.removeItem("role"); // Clear role
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
