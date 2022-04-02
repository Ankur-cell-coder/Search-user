import React from 'react'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
import Repo from '../components/Repo'
import Search from '../components/Search'
import User from '../components/User'

function Dashboard() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Info/>
      <User/>
      <Repo/>
    </div>
  )
}

export default Dashboard