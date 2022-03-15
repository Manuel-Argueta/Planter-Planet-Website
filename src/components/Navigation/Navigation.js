import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div id="navContainer">
      <Row>
        <Col>
          <p id="navTitle">Planter Planet</p>
        </Col>
        <Col>
          <NavLink to="/" className="navList">
            Home
          </NavLink>
          <NavLink to="/about" className="navList">
            About
          </NavLink>
          <NavLink to="/contact" className="navList">
            Contact
          </NavLink>
        </Col>
        <Col>
          {/* will update with game link once beta is hosted */}
          <a href="https://discord.gg/xtbhmYuAb8" target="_blank">
            <button id="playButton">Become a Beta Tester</button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Navigation;
