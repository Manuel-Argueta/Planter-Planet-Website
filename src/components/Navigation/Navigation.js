import React from "react";
import "./Navigation.css"

function Navigation() {
  return (
      <div id = "navContainer">
        <button className = "navList">Home</button>
        <button className = "navList">About</button>
        <button className = "navList">Contact</button>
        <p id = "navTitle" >Planter Planet</p>
      <button id = "playButton">Play Now</button>
      </div>
  )
}

export default Navigation;
