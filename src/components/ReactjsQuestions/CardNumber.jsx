import { useState } from "react"

export const CardNumber = () =>{
  const [datas, setDatas] = useState("")
  const [error, setError] = useState("")


  const handleSubmit = (e) =>{
    e.preventDefault()

    const checkValue = parseInt(datas)

    if(isNaN(checkValue)){
      setError("It's not a number please enter a number")
    } else {
      setError("")
    }

  }

  return (
  <div>
    <h4>Card Number</h4>
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        CardNumber: 
        <input 
        type="text" 
        value={datas}
        onChange={(e)=>setDatas(e.target.value)}
         />
      </label>
      <button type="submit">Submit</button>
    </form>
    {error !== "" && <h4>{error}</h4> }
  </div>
  )
}