import React, { useEffect, useState } from "react";

import Cards from "../component/Cards";
import hero from "../assets/belle.jpeg";

import data from "../data";


export default function Maids() {
const card = data.map((item)=>{
  return (
    <div>
      <div className="">
        <Cards
          img={item.img}
          name={item.name}
          experience={item.experience}
          location={item.location}
        />
      </div>
    </div>
    );
});
return(
  <div className="card-container">
    {card}
  </div>
)
 
}
