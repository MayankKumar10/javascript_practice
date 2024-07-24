import { current } from '@reduxjs/toolkit'
import React, { useEffect, useRef, useState } from 'react'

export const NewApp = () => {
  const [timer, setTimer] = useState(60)
  const timerRef = useRef()

  let start = () =>{
    timerRef.current = setInterval(()=> setTimer(()=> setTimer((prev)=>prev-1), 1000))
  }

  let stop = () =>{
     clearInterval(timerRef.current)
  }

  useEffect(()=>{
    timer === 0 && stop()
  },[timer])

  return (
    <div>
      <p>{timer}</p>
      
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}
