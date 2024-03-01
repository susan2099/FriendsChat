import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, db} from "../firebase";
import { doc, setDoc } from "firebase/firestore";



const Register = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      await updateProfile(res.user, {
        displayName,
      });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });
      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate('/');
    } catch(err){
      setErr(true);
    }
    
  };

  /*const addUserInfoToFirestore = async (userId, displayName, email) => {
    try {
      const userRef = doc(db, 'users', userId);
      await setDoc(userRef, {
        displayName: displayName,
        email: email,
      });
    } catch (error) {
      console.error("Error adding user info to Firestore: ", error);
    }
  };*/

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'> FriendsChat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="displayName"/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Register</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You already have an account? <Link to='/login'>Login</Link></p>
        </div>
    </div>
  );
};

export default Register