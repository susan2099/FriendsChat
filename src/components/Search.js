import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' alt=""/>
        <div className='userChatInfo'>
          <span>Susan</span>
        </div>  
      </div>
    </div>
  )
}

export default Search