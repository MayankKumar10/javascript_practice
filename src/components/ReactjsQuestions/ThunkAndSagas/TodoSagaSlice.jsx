import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  loading: false,
  error: null,
}

const TodoSagaSlice = createSlice({
  name: "todoSaga",
  initialState,
  reducers: {

    fetchLoading : (state)=>{
      state.loading = true;
    },

    fetchData : (state, action) =>{
      state.loading = false,
      state.todo = action.payload
    },

    fetchError : (state, action) =>{
      state.loading = false,
      state.error = action.payload
    }
  }
})

export const { fetchLoading, fetchData, fetchError } = TodoSagaSlice.actions

export const TodoSagaReducer = TodoSagaSlice.reducer