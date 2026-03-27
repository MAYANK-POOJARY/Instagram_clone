import React, { useState } from "react";
import {Link, useNavigate} from 'react-router'
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {handleLogin , loading} = useAuth();
  const navigate = useNavigate()

  if(loading){
    return <h1>Loading....</h1>
  }

  const SubmitHandler = (e) => {
    e.preventDefault();

    handleLogin(username, password)
    .then(res =>{
      console.log(res)
      navigate('/')
    })

  };
  return (
    <main>
      <div className="form-container">
        <h1>LOGIN</h1>
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            name="username"
            placeholder="Enter your username"
          />
          <input
            type="text"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            placeholder="Enter your password"
          />
          <button>Submit</button>
        </form>
        <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
      </div>
    </main>
  );
};

export default Login;
