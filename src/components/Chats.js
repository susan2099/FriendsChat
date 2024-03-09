import { onSnapshot } from 'firebase/firestore'
import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import {db} from "../firebase"
import {doc} from "firebase/firestore"
import { ChatContext } from '../context/ChatContext'


const Chats = () => {

  const [chats, setChats] = useState([])

  const {currentUser} = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      });
  
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats()
  }, [currentUser.uid]);

  console.log(Object.entries(chats))

  const handleSelect= (u) => {
    dispatch({type:"CHANGE_USER", payload:u})
  }
  return (
    <div className='chats'>
      {Object.entries(chats)?.map(chat=> (

      <div className='userChat' key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E' alt=""/>
        <div className='userChatInfo'>
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].userInfo.lastMessage?.text}</p>
        </div>  
      </div>
      ))}
    </div>
  )
}

export default Chats