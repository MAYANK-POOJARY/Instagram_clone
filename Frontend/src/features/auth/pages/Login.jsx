import React, { useState } from "react";
import {Link} from 'react-router'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();

    axios.post(
      "http://localhost:3000/api/auth/login",
      {
        username,
        password,
      },
      { withCredentials: true },
    )
    .then(res =>{
      console.log(res.data)
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
