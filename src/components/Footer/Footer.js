import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

import instaIcon from "../../assets/InstagramIcon.png";
import twitterIcon from "../../assets/TwitterIcon.png";
import discordIcon from "../../assets/DiscordIcon.png";

function Footer() {
  return (
    <div id="footerContainer">
      <div>
        <p id="copyright">@2022 Planter Planet</p>
        <p id="footerTitle">Planter Planet</p>
                        {/* will update with game link once beta is hosted */}
                        <a target = "_blank" href = "https://discord.gg/xtbhmYuAb8"><button id = "playButton">Become a Beta Tester</button></a>
      </div>
      <hr></hr>
      <div>
        <NavLink to="/" className="footerList">
          Home
        </NavLink>
        <NavLink to="/about" className="footerList">
          About
        </NavLink>
        <NavLink to="/contact" className="footerList">
          Contact
        </NavLink>
        <a
          href="https://www.instagram.com/planter_planet/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="socialList">
            <img src={instaIcon} />
          </button>
        </a>
        <a
          href="https://twitter.com/planter_planet"
          target="_blank"
          rel="noreferrer"
        >
          <button className="socialList">
            <img src={twitterIcon} />
          </button>
        </a>
        <a
          href="https://discord.gg/xtbhmYuAb8"
          target="_blank"
          rel="noreferrer"
        >
          <button className="socialList">
            <img src={discordIcon} />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
