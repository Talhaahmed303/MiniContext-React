import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
import UserContextProvider from '../context/UserContextProvider'


function Login() {
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')

    const {setuser} = useContext(UserContext)

    const handlesubmit=(e)=>{
        e.preventDefault()
        setuser({username,password})
    }



  return (
    <div>
      
    <h2>LOGIN</h2>
    <input type="text" 
    value={username} onChange={(e)=>setusername(e.target.value)}
    placeholder='Enter username'/>

    <input type="text" 
    value={password} onChange={(e)=>setpassword(e.target.value)}
    placeholder='Enter password'/>

    <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
