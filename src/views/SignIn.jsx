import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, NavLink } from "react-bootstrap";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form className="form-container" onSubmit={signIn}>
        <img className="login-logo" src={logo} alt="" />
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
            Sign In
          </Button>
        </div>
        <NavLink to="/signup">
          <Button className="sign-in-btn">
           Create Account
          </Button>
        </NavLink>
      </form>
    </div>
  );
};

export default SignIn;
