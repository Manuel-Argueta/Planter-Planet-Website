import React from "react";
import "./Contact.css";
import discordIcon from "../../assets/enlargedDiscordIcon.png";

function Contact() {
  return (
    <div>
      <h1>
        <u>Contact Us</u>
      </h1>
      <div className="row">
        <p id="contactDescription">
          Our main form of communication is <u>Discord</u>! Please join us and
          become part of the Planter Planet Community!
        </p>
        <div>
        <a href = "https://discord.gg/xtbhmYuAb8" target = "_blank"><img id="joinDiscord" src={discordIcon} /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
