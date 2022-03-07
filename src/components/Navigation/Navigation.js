import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Navigation.css"
import {NavLink} from "react-router-dom";

function Navigation() {
  return (
      <div id = "navContainer">
        <Row>
          <Col>
          <p id = "navTitle" >Planter Planet</p>
          </Col>
          <Col>
          <NavLink to="/" className = "navList">Home</NavLink>
          <NavLink to="/about"className = "navList">About</NavLink>
          <NavLink to="/contact"className = "navList">Contact</NavLink>
          </Col>
          <Col>
          <button id = "playButton">Play Now</button>
          </Col>
        </Row>
      </div>
  )
}

export default Navigation;
