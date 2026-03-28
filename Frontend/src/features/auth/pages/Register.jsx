import { useState } from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router'
import "../style/form.scss";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const {handleRegister, loading} = useAuth();
  const navigate = useNavigate();

  if(loading){
    return <h1>Loading...</h1>
  }

  const SubmitHandler = async(e) => {
    e.preventDefault();

    await handleRegister(username, email, password)
    navigate('/')
  };
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
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
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="Enter your email"
          />
          <input
            type="text"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            placeholder="Enter your password"
          />
          <button className="button primary-button">submit</button>
        </form>
        <p>Already have an account ? <Link to='/login'>Login</Link></p>
      </div>
    </main>
  );
};

export default Register;
