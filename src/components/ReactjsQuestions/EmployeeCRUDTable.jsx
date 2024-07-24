import React from 'react'
import { useSelector } from 'react-redux'

export const EmployeeCRUDTable = () => {
  let {data, employeeForm, loading, error} = useSelector((state)=>state.employeeTable)

  console.log("data", data)

  return (
    <div>
      <h4>EmployeeCRUDTable</h4>
    </div>
  )
}
