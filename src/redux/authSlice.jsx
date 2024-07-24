import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: [
    {
      id: 1,
      name: "mayank",
      emailId: "mayank@gmail.com",
      password: "mayank123"
    },
    {
      id: 2,
      name: "anshuMayank",
      emailId: "anshuMayank@gmail.com",
      password: "anshumayank123"
    }
  ],
  currentUser: null,
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) =>{
      const {name, email, password} = action.payload

      let user = state.users.find((u)=>  u.name === name && u.email === email && u.password === password )

      console.log("user", action.payload)
      if(user){
        state.currentUser = name;
        state.isAuthenticated = true;  
      }
     },
    signup: (state, action) =>{
      const {name, email, password} = action.payload;
      let foundUser = state.users.push({id: Date.now, name, email, password})
      
      if(foundUser){
        state.currentUser = name;
        state.isAuthenticated = true;
      }
      
    },
    logout: (state) =>{
      state.currentUser = null;
      state.isAuthenticated = false;
    }
  }
})

export const { login, signup, logout } = authSlice.actions;
export const authReducer  = authSlice.reducer;