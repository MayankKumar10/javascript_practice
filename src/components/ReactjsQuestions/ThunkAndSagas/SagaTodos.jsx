import React from 'react'
import { useSelector } from 'react-redux'

export const SagaTodos = () => {
  const { todo, loading, error } = useSelector((state)=> state.SagaTodos)

  console.log("todos", todo)

  return (
    <div>SagaTodos</div>
  )
}
