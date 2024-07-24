import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../../redux/authSlice'

export const Login = () => {
  
  const initialState = {
    name: "",
    email: "",
    password: "",
  }

  const [userData, setUserData] = useState(initialState)
  const dispatch = useDispatch();


  const onChange = (e) =>{
    const { name, value} = e.target

    setUserData((prev)=>({
      ...prev,
      [name]: value
    }))

  }

  const onSubmitHandler = (e) =>{
    e.preventDefault()
    dispatch(login(userData))
 
    setUserData(initialState)
  }

  return (
    <div>
      <h4>Login</h4>
      <form action="" onSubmit={onSubmitHandler} style={{display: "flex", flexDirection: "column"}}>
        <label htmlFor="">Name:
        <input type="text" value={userData.name} onChange={onChange} />
        </label>
        <label htmlFor="">Email:
        <input type="email" value={userData.email} onChange={onChange} />
        </label>
        <label htmlFor="">Password:
        <input type="text" value={userData.password} onChange={onChange} />
        </label>
        <button type="submit">Submit</button>
        <br />
        <button type="submit" onClick={()=>setUserData({
          name: "mayank",
          emailId: "mayank@gmail.com",
          password: "mayank123"
        })}>Guest Login</button>
      </form>
    </div>
  )
}
