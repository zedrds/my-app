
import React from "react";
import {Button} from "react-bootstrap";
import logo from "../assets/logo.jpg";
import { Link, NavLink, Outlet } from "react-router-dom";


function Header() {
  return (
    <div className="navbar">
        <div className="banner">
          <Link to='/'>
      <img className="logo" src={logo} alt="" />
      </Link>
      <p className="logo-text">YAYABOOK </p>
      <p className="logo-text2">BOOK THAT YAYA NOW 
      </p>
      </div>
      <div className="nav">
        <div className="align-btn-nav">
        <NavLink to='/home'>
          <Button className="nav-btn">
            
            <p className="btn-text">Home</p>
          </Button>
          </NavLink>

          <NavLink to='maids'>
          <Button className="nav-btn">
            <p className="btn-text">Maids</p>
          </Button>
          </NavLink>

          <NavLink to='book'>
          <Button className="nav-btn">
            <p className="btn-text">Book</p>
          </Button>
          </NavLink>
      </div>
      </div>
      <div>
            <Outlet/>
        </div>
      </div>
      
  );
}

export default Header;