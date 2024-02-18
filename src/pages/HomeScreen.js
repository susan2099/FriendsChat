import React from 'react'
import SideBar from '../components/SideBar'
import Chat from '../components/Chat'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <div className="container">
        <SideBar/>
        <Chat/>
      </div>
    </div>
  )
}

export default HomeScreen