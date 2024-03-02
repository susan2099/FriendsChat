import React, {useState, useEffect} from 'react'

const Chats = () => {

  const [chat, setChats] = useState([])

  useEffect(() => {

  }, [])
  return (
    <div className='chats'>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' alt=""/>
        <div className='userChatInfo'>
          <span>Susan</span>
          <p>Hello</p>
        </div>  
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' alt=""/>
        <div className='userChatInfo'>
          <span>Susan</span>
          <p>Hello</p>
        </div>  
      </div>
    </div>
  )
}

export default Chats