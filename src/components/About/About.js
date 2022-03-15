import React from "react";
import "./About.css";
import armanIcon from "../../assets/ArmanIcon.png";
import manuelIcon from "../../assets/ManuelIcon.png";
import jimmyIcon from "../../assets/JimmyIcon.png";

function About() {
  return (
    <div id="aboutContainer">
      <h1>
        <u>Meet The Team</u>
      </h1>
      <div class = "row">
        <div class="col">
          <img class="founderIcon" src={armanIcon} />
          <span class="founderTitle">Arman Arya</span>
          <p class="founderDescription"> Lead Designer/Product Manager</p>
          <p class="founderStory">
            My name is Arman Arya and I am a designer and product manager for
            Planter Planet! I am passionate about partnering with organizations
            to plant more trees around the world and I am excited to witness how
            NFTs and blockchain technology can change the world!
          </p>
        </div>
        <div class="col">
          <img class="founderIcon" src={manuelIcon} />
          <span class="founderTitle">Manuel Argueta</span>
          <p class="founderDescription">Blockchain Developer</p>
          <p class="founderStory">
            My name is Manuel Argueta and I am the main developer for Planter
            Planet. I am a full stack developer who is passionate about
            acheiving change through CS! I am extremely excited for the change
            Planter Planet will bring to environment!
          </p>
        </div>
        <div class="col">
          <img class="founderIcon" src={jimmyIcon} />
          <span class="founderTitle">Jimmy Cano</span>
          <p class="founderDescription">Scrum Master</p>
          <p class="founderStory">
            My name is Jimmy Cano and I am the scrum master at
            Planter Planet! I am excited to create a social impact and craft a 
            community that can collaborate to reach our goal of planting 1
            million trees around the world! Join us on our adventure and start
            playing today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
