import React from "react";
import Dashboard from "../component/Dashboard";
import Header from "../component/Header";
import Cards from "../component/Cards";
import hero from "../assets/belle.jpeg";
import hero1 from "../assets/sample.jpeg";
import hero2 from "../assets/lana.jpg";
import hero3 from "../assets/hannah.jpg";
import { Button } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import { Link, Outlet } from "react-router-dom";
import Maids from "./Maids";



export default function Home() {
  return (
    <div>
      <Dashboard />
      <Maids/>
    </div>
  );
}
