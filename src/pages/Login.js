import React from 'react'
import styled from 'styled-components'
import loginimage from '../images/loginimage.jpg'

function Login() {
  return (
    <Login1>
      <div className='container'>
        <img src={loginimage} style={{height:"500px",marginTop:"30px"}}/>
        <h1 style={{marginLeft:"630px",color:"#9CDAF1"}}>Search Github User</h1>
        <button style={{width:"150px",marginLeft:"700px",color:"white",background:"#544598",border:"2px solid #544598"}}>Login/Signup</button>
      </div>
    </Login1>
  )
}

export default Login

const Login1= styled.div`
  .container{
    display:flex;
    flex-direction:column;
  }
`;