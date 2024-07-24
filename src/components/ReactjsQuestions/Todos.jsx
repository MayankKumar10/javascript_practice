import React, { useState } from 'react'

export const Todos = () => {
  const [todoText, setTodoText] = useState("")
  const [todoData, setTodoData] = useState([])

  const onAdd = () =>{
    setTodoData([...todoData, {id: Date.now(), title: todoText}])
    setTodoText("")
  }

  const onEdit = (id) =>{
    let findTodo = todoData.find((todo)=> todo.id === id)
    setTodoText(findTodo.title)

    onRemove(id)
  }


  const onRemove = (id) =>{
    let findTodo = todoData.filter((item)=> item.id !== id)
    setTodoData([...findTodo])
  }

  return (
    <>
      <div>
        <label htmlFor="">Enter Todo: 
        <input type="text" value={todoText} onChange={(e)=>setTodoText(e.target.value)} />
        </label>
        <button onClick={()=>onAdd()}>Add Todo</button>
      </div>
      <div>
        {todoData.length > 0 && todoData.map((data)=>(
          <div key={data.id}>
            <h4>{data.title}</h4>
            <button onClick={()=> onEdit(data.id)}>Edit</button>
            <button onClick={()=> onRemove(data.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  )
}
