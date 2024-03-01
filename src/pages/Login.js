import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

  const [err, setErr] = useState(false)
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/")
    } catch(err){
      console.error("Error signing in:", err.code, err.message);
      setErr(true);
    }
    
  };
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'> FriendsChat</span>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Login</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You don't have an account? <Link to='/register'>Register</Link></p>
        </div>
    </div>
  );
};

export default Login