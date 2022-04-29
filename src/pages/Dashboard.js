import React from 'react'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
import Repo from '../components/Repo'
import Search from '../components/Search'
import User from '../components/User'
import { GithubContext } from '../context/context'
import loadingImage from '../images/preloader.gif';

function Dashboard() {
  const {isLoading} = React.useContext(GithubContext);
  if(isLoading){
    return(
      <main>
        <Navbar/>
        <Search/>
        <img src={loadingImage} className='loading-img' alt='loading'/>
      </main>
    );
  }
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