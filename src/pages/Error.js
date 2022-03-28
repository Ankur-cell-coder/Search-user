import React from 'react'
import Styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate=useNavigate()
  return (
    <Error1>
    <h1 style={{color:"#544598",marginTop:"200px"}}>404</h1>
    <h1 style={{color:"#544598"}}>Page not found!</h1>
    <button onClick={()=>navigate('/')} style={{width:"100px",height:"40px",color:"#544598",background:"#E2F3F5"}}>Home</button>
    </Error1>
  )
}

export default Error

const Error1 = Styled.div`
 margin-top:-22px;
 height:743px;
 background:#C4EBEF;
 display:flex;
 flex-direction:column;
 align-items:center;
`;

