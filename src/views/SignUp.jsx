import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, NavLink } from "react-bootstrap";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-up-container">
      <form className="form-container" onSubmit={signUp}>
        <img className="login-logo" src={logo} alt="" />
        <p>Create Account</p>
        <div className="input-container">
          <label>Username </label>
          <input
            className="input-box"
            type="text"
            placeholder="Enter Username"
            name="uname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            className="input-box"
            type="password"
            placeholder="Enter Passoword"
            name="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="btn-sign">
          <Button className="sign-in-btn" type="submit">
            Sign Up
          </Button>
        
        <NavLink to="/about">
          <Button className="sign-in-btn">
            Cancel
          </Button>
        </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
