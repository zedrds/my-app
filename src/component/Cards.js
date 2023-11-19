import React from "react";
import { Card } from "react-bootstrap";
import data from "../data";

export default function Cards(props) {
  

  return (
    <div className="card-bodyx">
      <div className="card-body">
        <Card className="maid-card">
          <img className="cardimg" src={props.img} alt="img" />
          <Card.Body>
            <Card.Title>
              <h1 className="card-text">{props.name}</h1>
            </Card.Title>
            <Card.Text className="card-text">{props.experience}</Card.Text>
            <Card.Text className="card-text">{props.location}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
