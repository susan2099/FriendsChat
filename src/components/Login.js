import React, {useState} from "react";
const Login = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="login-container">
            <form>
                <h1>
                    Register
                </h1>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input 
                    type="password"
                    placeholder="Enter your password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
            </form>
        </div>
    );
};
export default Login;