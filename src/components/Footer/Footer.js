import React from 'react';
import './Footer.css'
import facebookIcon from '../../assets/FacebookIcon.png'
import instaIcon from '../../assets/InstagramIcon.png'
import twitterIcon from '../../assets/TwitterIcon.png'
import linkedInIcon from '../../assets/LinkedInIcon.png'
import youtubeIcon from '../../assets/YoutubeIcon.png'





function Footer() {
    return (
        <div id = "footerContainer">
                <div>
                <p id = "copyright">@2022 Planter Planet</p>
                <p id = "footerTitle" >Planter Planet</p>
                <button id = "playButton">Play Now</button>
                </div>
                <hr></hr>
                <div>
                <button className = "footerList">Home</button>
                <button className = "footerList">About</button>
                <button className = "footerList">Contact</button>
                <button className = "socialList"><img src = {facebookIcon}/></button>
                <button className = "socialList"><img src = {instaIcon}/></button>
                <button className = "socialList"><img src = {twitterIcon}/></button>
                <button className = "socialList"><img src = {linkedInIcon}/></button>
                <button className = "socialList"><img src = {youtubeIcon}/></button>
                </div>
        </div>
    )

}

export default Footer;