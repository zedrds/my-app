import React from "react";
import bookimage from "../assets/maid.jpg";

function Dashboard() {


  return (
    <div className="dashboard-container">
      <div className="img-cont">
        <img className="bookimg" src={bookimage} alt="" />
      </div>
      <div className="description">
        <h1 className="desc-text">Metro Manila's #1 Maid Booking</h1>
        <h2 className="desc-text">We Are Open 24/7</h2>
        <p className="desc-text">Drama and Scam free environment!</p>
      
      </div>

    </div>
  );
}

export default Dashboard;
