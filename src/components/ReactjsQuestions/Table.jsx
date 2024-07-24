import React, { useEffect, useState } from 'react'

export const Table = () => {
  const [data, setData] = useState(null)
  let URL = "https://jsonplaceholder.typicode.com/todos";

  let fetchData = async() =>{
    let res = await fetch(URL)
    let result = await res.json()
    setData(result)
  }

  useEffect(()=>{
    fetchData()
  }, [])


  console.log("data", data)

  return (
    <div>
      { data && data?.length > 0 &&  <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
       {data.map((tableData, i)=>(
        <tr key={i} style={{backgroundColor: tableData.completed ? "lime" : "tomato", color: "black"}}>
          <td>{tableData.id}</td>
          <td>{tableData.title}</td>
          <td>{tableData.completed ? "yes" : "no"}</td>
        </tr>
       ))} 
      </tbody>
    </table> }     
    </div>
  )
}
