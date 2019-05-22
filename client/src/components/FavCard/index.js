import React, { Component } from 'react';
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import API from '../../utils/API';
import "./style.css";
  import { Link } from 'react-router-dom';

  export default function FavCard(props) {
    let pic;
  let name;
  if(props.event) {
    pic = props.event.image
    name = props.event.name
  }
    
   
  return (
    <div className="FavCard">
      <Card>
        <Card.Title style={{ width: "18rem" }} className="margin15">{props.event.name}</Card.Title>

        <Card.Body className="event-card-body">
          <Card.Subtitle style={{color:'black'}} className="margin15">{props.event.venue_name}</Card.Subtitle>
          <Card.Img src={props.event.pic} />
          <Card.Text style={{color:'black'}} className="margin15">
            {props.event.name}
            <br /> <strong>Date: </strong>
            {props.event.date}
            <br /> <strong>Time: </strong>
            {props.event.time}
            <br /> <strong>Venue:</strong> {props.event.venue_name}
            <br /> <strong>Location: </strong> {props.event.address}
            <br /> <strong>Zip Code: </strong> {props.event.zipcode}
          </Card.Text>
          <div className="margin15">
          <Button variant="outline-primary mb-2 mr-2" size="lg" block>
                <a href={props.event.url} target="_blank">
                Ticket Info
                </a>
            </Button>
            </div>
        </Card.Body>
      </Card>
    </div>

  );
  }
