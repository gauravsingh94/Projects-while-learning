import axios from "axios";
import React from "react";

/// File is incomplete. You need to add input boxes to take input for users to login.

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleToken = (token) => {
    console.log(token);
    localStorage.setItem("token", token);
  };


  const handleLogin = async () => {
    const headers = {
      username: username,
      password: password,
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/admin/login",
        {},
        { headers }
      );
      handleToken(res.data.token);
      window.location.href = "/courses"
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        console.log(error.message);
      }
    }
  };


  return (
    <div>
      <h1>Login to admin dashboard</h1>
      <br />
      Email  
      <input
        type={"username"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      Password 
      <input
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      New here? <a href="/register">Register</a>
    </div>
  );
}

export default Login;
