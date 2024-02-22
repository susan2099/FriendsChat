import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Friends Chat</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        <span>Susan</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default NavBar