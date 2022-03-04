import React from "react";
import "./Navigation.css"
import {NavLink} from "react-router-dom";

function Navigation() {
  return (
      <div id = "navContainer">
        <NavLink to="/" className = "navList">Home</NavLink>
        <NavLink to="/about"className = "navList">About</NavLink>
        <NavLink to="/contact"className = "navList">Contact</NavLink>
        <p id = "navTitle" >Planter Planet</p>
      <button id = "playButton">Play Now</button>
      </div>
  )
}

export default Navigation;
