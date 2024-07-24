import { useEffect, useState } from "react"

export const useDebounce = (initialValue, delay=500) =>{
  const [debounce, setDebounce] = useState(initialValue)

  useEffect(()=>{
    let timer = setTimeout(()=> setDebounce(initialValue), delay)

    return ()=>{
      clearTimeout(timer)
    }
    
  },[initialValue, delay])

return debounce
}