import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    const user = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/signup",
        user
      );
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div>
      <h1>Register to the website</h1>
      <br />
      <input
        type="text"
        placeholder="Enter Email"
        value={username}
        onChange={handleUsernameChange}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <button onClick={handleRegister}>Register</button>
      <br />
      Already a user? <a href="/login">Login</a>
    </div>
  );
};

export default Register;
