import { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router'
import "../style/form.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const SubmitHandler = async(e) => {
    e.preventDefault();

    axios.post(
      "http://localhost:3000/api/auth/register",
      { username, email, password },
      { withCredentials: true },
    )
    .then(res => {
        console.log(res.data)
    })
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
          <button>submit</button>
        </form>
        <p>Already have an account ? <Link className="toggleAuthForm" to='/login'>Login</Link></p>
      </div>
    </main>
  );
};

export default Register;
