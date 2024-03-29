import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({message}) => {
  console.log(message)

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)
  return (
    <div className='message owner'>
      {/*<div className='messageInfo'>
        <img 
          src='https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg' 
          alt=''
        />
        <span>Just Now</span>
      </div> 
      <div className='messageContent'>
        <p>hello</p>
        <img src='https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg' alt=''/>
  </div>*/}
    </div>
  );
};

export default Message