import React, { useContext, useState } from 'react'
import Img from "../images/img.png"
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'

const Input = () => {

  const [text, setText] = useState("")
  const [img, setImg] = useState(null)

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const handleSend = () => {
    if(img) {

    }else{
      
    }
  }
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'/>
      <div className='send'>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor='file'>
          <img src={Img} alt=""/>
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input