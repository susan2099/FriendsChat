import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";


const Register = () => {
  const [err, setErr] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
    } catch(err){
      setErr(true);
    }
    
  };

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'> FriendsChat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username"/>
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