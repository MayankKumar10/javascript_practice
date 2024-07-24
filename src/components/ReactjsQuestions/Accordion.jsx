import React, { useState } from 'react'
import { accordionData } from '../../data/accordionData'

export const Accordion = () => {
  const [index, setIndex] = useState(null)
  
  const datas = accordionData
  
  return (
    <div>
      {datas.map((data, i)=>(
        <div key={data.id} style={{border: "1px solid white", borderRadius: ".5rem", marginTop: ".5rem"}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h4>{data.title}</h4>
            <span style={{ cursor: "pointer"}}>
            { index !== i ? <span onClick={()=>setIndex(i)}>🔽</span> : <span onClick={()=> setIndex(null)}>⬆️</span> }
            </span>
          </div>
          {i===index && <p> {data.body}</p>}
        </div>
      ))}
    </div>
  )
}
