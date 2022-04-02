import React from 'react'
import { GithubContext } from '../context/context'

function Info() {
  const data=React.useContext(GithubContext);
  return (
    <div>Info: </div>
  )
}

export default Info