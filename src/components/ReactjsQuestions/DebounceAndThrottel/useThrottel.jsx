import { useEffect, useRef, useState } from "react"

export const useThrottel = (initialValue, delay=500) =>{
  const [throttel, setThrottel] = useState(initialValue)
  const currentRef = useRef(Date.now())

  useEffect(()=>{
    if(Date.now() >= currentRef.current + delay ){
      currentRef.current = Date.now()
      setThrottel(currentRef.current)
    } else {
      let timer = setTimeout(()=>{
        currentRef.current = Date.now()
        setThrottel(currentRef.current)
      }, delay)

      return () => clearTimeout(timer)
    }


  },[initialValue, delay])


  return throttel
}