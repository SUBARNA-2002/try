
import React, { useState } from "react";
import "./Login.css";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const handleRegister = async (e) => {
    e.preventDefault();

    // Send registration request to the server
    const response = await fetch("http://localhost:5001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    });

    // const data = await response.json();

    if (response.ok) {
      // Registration success
 
      setUsername("");
      setPassword("");
      setEmail("");
      // Show an alert
      alert("Registration successful");
    } else {
      // Registration failed
      alert("Invalid credentials");
    }
  };

  return (
 
          <>
            <div className="login-container animated fadeInDown bootstrap snippets bootdeys">
              <div className="loginbox border">
                <div className="loginbox-title">REGISTER</div> <hr />
                <div className="loginbox-textbox">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="loginbox-textbox">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  <button className="btn btn-info" onClick={handleRegister}>Register</button>
                </div>
                <div className="loginbox-signup">
                  <a href="#register.html">Login</a>
                </div>
              </div>
            </div>
          </>
        );
      };

export default Register;

