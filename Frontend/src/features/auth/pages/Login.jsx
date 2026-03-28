import React, { useState } from "react";
import {Link, useNavigate} from 'react-router'
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {user , handleLogin, loading} = useAuth();
  const navigate = useNavigate()

  if(loading){
    return <main><h1>Loading....</h1></main>
  }

  const SubmitHandler = async (e) => {
    e.preventDefault();

    await handleLogin(username, password)
    navigate('/')
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
          <button className="button primary-button">Submit</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </main>
  );
};

export default Login;
