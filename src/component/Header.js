
import React from "react";
import {Button} from "react-bootstrap";
import logo from "../assets/logo.jpg";
import { NavLink, Outlet } from "react-router-dom";


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
        <NavLink to='/'>
          <Button className="nav-btn">
            
            <p className="btn-text">Home</p>
          </Button>
          </NavLink>

          <NavLink to='/about'>
          <Button className="nav-btn">
            <p className="btn-text">Maids</p>
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