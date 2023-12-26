import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    access_token: null,
    refresh_token: null,
    isAuthenticated: false,
    userProfile: null, 
  },
  reducers: {
    loginUser: (state, action) => {
      state.access_token = action.payload.access_token; 
      state.refresh_token = action.payload.refresh_token; 
      state.isAuthenticated = true;
      state.userProfile = action.payload.userProfile; 
    },
    logoutUser: (state) => {
      state.access_token = null;
      state.refresh_token = null;
      state.isAuthenticated = false;
      state.userProfile = null; 
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
