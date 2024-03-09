import React, {useState, useEffect, useContext} from 'react'
import Add from '../images/add.png'
import More from '../images/more.png'
import Messages from "./Messages"
import Input from "./Input"
import { ChatContext } from '../context/ChatContext'


const Chat = () => {
  const {data} = useContext(ChatContext)
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img src={Add}alt=""/>
          <img src={More} alt=""/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat