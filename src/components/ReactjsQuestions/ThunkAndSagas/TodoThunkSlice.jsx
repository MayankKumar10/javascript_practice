import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: false,
  error: null
}

export const fetchThunkTodos = createAsyncThunk('todoThunk/fetchThunkTodos', async()=>{

  try{
    let response = await fetch("https://jsonplaceholder.typicode.com/todos")
    let result = await response.json()
    return result
  }catch(error) {
    return error.message
  }
})

export const TodoThunkSlice = createSlice({
  name: "todoThunk",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder
    .addCase(fetchThunkTodos.pending, (state)=>{
      state.loading = true;
    })
    .addCase(fetchThunkTodos.succeed , (state, action)=>{
      state.loading = false;
      state.todos = action.payload
    })
    .addCase(fetchThunkTodos.rejected, (state, action)=>{
      state.loading = false;
      state.error = action.payload
    })
  }

})

export const TodosThunkReducer = TodoThunkSlice.reducer

