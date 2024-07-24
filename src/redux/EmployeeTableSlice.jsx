import { createSlice } from "@reduxjs/toolkit";


export let employeeState = {
  id: Date.now(),
  FirstName: "",
  LastName: "",
  Email: ""
}

let initialState = {
  data: [
    {
      id: 1,
      FirstName: "Mayank",
      LastName: "Kumar",
      Email: "mayankKumar@gmail.com"
    }
  ],
  employeeForm: employeeState,
  loading: false,
  error: null
}

export const EmployeeTableSlice = createSlice({
  name: "employeeTable",
  initialState,
  reducers:{

    addEmployee: (state, action) =>{
      state.loading = true,
      state.data.push(action.payload)
    },

    editEmployee: (state, action) =>{
      let { id } = action.payload;
      let foundEmployee = state.data.find((person)=> person.id === id )

      if(foundEmployee){
        state.employeeForm = {...foundEmployee}
      }
    },

    updateEmployee: (state, action)=>{
      let { id } = action.payload;

      let index = state.data.findIndex((person)=> person.id === id)

      if(index){
        state.data[index] = action.payload 
      }
    },

    deleteEmployee: (state, action)=>{
      let { id } = action.payload;

      let foundEmployee = state.data.filter((item)=> item.id !== id)

      state.data = foundEmployee
    }

  }

})

export const { addEmployee, editEmployee, updateEmployee, deleteEmployee } = EmployeeTableSlice.actions

export const EmployeeReducer = EmployeeTableSlice.reducer