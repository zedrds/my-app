import React from "react";
import bookimage from "../assets/maid.jpg";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import maid from "../assets/sample.jpeg";

// import { Card, Button, Image } from "react-bootstrap";

function Dashboard() {
  //   const [startDate, setStartDate] = useState(new Date());
  // const[endDate, setEndDate]=useState(new Date());

  return (
    <div className="dashboard-container">
      <div className="img-cont">
        <img className="bookimg" src={bookimage} alt="" />
      </div>
      <div className="description">
        <h1 className="desc-text">Metro Manila's #1 Maid Booking</h1>
        <h2 className="desc-text">We Are Open 24/7</h2>
        <p className="desc-text">Drama and Scam free environment!</p>
        {/* <DatePicker
        className="date-picker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <h1 className="calendar-text">End Date</h1>
        <DatePicker
        className="date-picker"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        />
      </div> */}
      </div>

      {/* For card testing */}
    </div>
  );
}

export default Dashboard;
