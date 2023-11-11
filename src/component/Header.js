
import React from "react";
import { Button } from "react-bootstrap";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <div className="navbar">
        <div className="banner">
      <img className="logo" src={logo} alt="" />
      <p className="logo-text">YAYABOOK </p>
      <p className="logo-text2">BOOK THAT YAYA NOW 
      </p>
      </div>
      <div className="nav">
        <div className="align-btn-nav">
          <Button className="nav-btn">
            <p className="btn-text">Home</p>
          </Button>
          <Button className="nav-btn">
            <p className="btn-text">Maids</p>
          </Button>
          <Button className="nav-btn">
            <p className="btn-text">Rates</p>
          </Button>
          <Button className="nav-btn">
            <p className="btn-text">Book</p>
          </Button>
          <Button className="nav-btn">
            <p className="btn-text">FAQ's</p>
          </Button>
          <Button className="nav-btn">
            <p className="btn-text">Contact Us</p>
          </Button>
        </div>
      </div>
      </div>
  );
}

export default Header;