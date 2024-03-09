import React, { useContext, useState, useEffect } from 'react'
import { collection, getDoc, getDocs, query, where, doc, setDoc , updateDoc, serverTimestamp } from "firebase/firestore"
import {db} from "../firebase"
import { AuthContext } from '../context/AuthContext'

const Search = () => {

  const [username, setUsername] = useState(null)
  const [user, setUser] = useState(false)
  const [err, setErr] = useState(false)

  const {currentUser} = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"), 
      where("displayName", "==", username)
      );
  
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log(doc.id, " => ", userData);
  
  
        setUser(userData);
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
  
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc (db, "chats", combinedId), {messages:[]})

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId+".userInfo"]: {
            uid: user.uid,
            displayName:user.displayName,
          },
          [combinedId+".date"]:serverTimestamp()
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId+".userInfo"]: {
            uid: currentUser.uid,
            displayName:currentUser.displayName,
          },
          [combinedId+".date"]:serverTimestamp()
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };

  return (
    <div className='search'>
      <div className='searchForm'>
        <input 
        type='text' 
        placeholder='Find a user' 
        onKeyDown={handleKey} 
        onChange={e=>{setUsername(e.target.value)}}
        value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && <div className='userChat' onClick={handleSelect}>
        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E' 
          alt=""/>
        <div className='userChatInfo'>
          <span>{user.displayName}</span>
        </div>  
      </div> }
    </div>
  )
}

export default Search