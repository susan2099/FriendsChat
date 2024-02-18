import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'> FriendsChat</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Login</button>
            </form>
            <p>You don't have an account? <Link to='/register'>Register</Link></p>
        </div>
    </div>
  );
};

export default Login