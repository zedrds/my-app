import React from "react";
import Dashboard from '../component/Dashboard'
import Header from "../component/Header";
import Cards from "../component/Cards";
import hero from "../assets/belle.jpeg";
import hero1 from "../assets/sample.jpeg";
import hero2 from "../assets/lana.jpg";
import hero3 from "../assets/hannah.jpg";


export default function Screen() {
  return (
    <div>
      <Header />
      <Dashboard />
      <div className="card-container">
        <Cards
          img={hero}
          name="Belle Dolpeng"
          experience="3 Years of being yaya"
        />
        <Cards
          img={hero1}
          name="Leah Gothic"
          experience="3 Years of being yaya"
        />
        <Cards
          img={hero2}
          name="Lana Road"
          experience="6 Years of being yaya"
        />
        <Cards
          img={hero3}
          name="Hannah Uwe"
          experience="4 Years of being yaya"
        />
      </div>
    </div>
  );
}
