import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, NavLink } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
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
          <label>Email </label>
          <input
            className="input-box"
            type="text"
            placeholder="Enter Email"
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

          <Link to="/">
            <Button className="sign-in-btn">Cancel</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
