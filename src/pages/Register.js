import React from 'react'
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'> FriendsChat</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder="username"/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Register</button>
            </form>
            <p>You already have an account? <Link to='/login'>Login</Link></p>
        </div>
    </div>
  );
};

export default Register