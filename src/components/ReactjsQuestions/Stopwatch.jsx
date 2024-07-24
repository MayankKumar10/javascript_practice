import React, { useEffect, useRef, useState } from 'react'

export const Stopwatch = () => {
  const [timer, setTimer] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [displayTime, setDisplayTime] = useState("00hrs:00mns:00sec")
  const currentTime = useRef()


  const onChange = (e) =>{
    let { value } = e.target
    let filterVal = value.replace(/[^0-9]/g, "" )
    setInputValue(filterVal)
  }

  const onStart = () => {
    currentTime.current = setInterval(()=> setTimer((prev)=> prev + 1), 1000)
  }

  const onReset = () =>{
    clearInterval(currentTime.current)
    setTimer(0)
  }

  const onStop = () =>{
    clearInterval(currentTime.current)
  }

  const onAddValue = () =>{
    setTimer((prev)=> prev + Number(inputValue))
    setInputValue(0)
  }
  
  const onDisplay = () =>{
    const hrs = Math.floor(timer/3600);
    const mins = Math.floor(timer/60);
    const sec = timer%60;

     setDisplayTime(`${hrs}hrs: ${mins}mns: ${sec}sec`)
  }

  useEffect(()=>{
    onDisplay()
  }, [timer])

  return (
    <div>
      <p>{displayTime}</p>
      <label htmlFor="">Add Time: 
      <input type="text" value={inputValue} onChange={onChange} />
      </label>
      <button onClick={onAddValue}>Add Value</button>
      <button onClick={onStart}>Start</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onStop}>Stop</button>
    </div>
  )
}
