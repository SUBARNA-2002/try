
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login Success!!");
      setUsername("");
      setPassword("");

      localStorage.setItem("token", JSON.stringify(data.token));
      console.log(data.token);
      navigate("/");
    } else {
      alert("Login Faild");
    }
    window.location.reload();
  };

  return (
    <div>
      <>
        <div className="login-container animated fadeInDown bootstrap snippets bootdeys">
          <div className="loginbox border">
            <div className="loginbox-title">LOGIN</div> <hr />
            <div className="loginbox-textbox">
              <input
                type="text"
                className="form-control"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="loginbox-textbox">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="loginbox-forgot">
              <a href="">Forgot Password?</a>
            </div>
            <div className="loginbox-submit">
              <button className="btn btn-info" onClick={handleLogin}>
                Login
              </button>
            </div>
            <div className="loginbox-signup">
              <a href="#register.html">Sign Up</a>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
