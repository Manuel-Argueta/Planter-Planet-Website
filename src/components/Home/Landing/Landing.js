import React from 'react';
import './Landing.css'
import gameLogo from '../../../assets/GameLogo.png'
import {Link} from 'react-scroll';

function Landing() {
    return (
        <div id = "container">
            <div id = "subContainer">
                <img id = "gameLogo" src = {gameLogo}/>
                <h3 id = "landingContent">An interactive blockchain clicker game to solve your boredom and save the world!</h3>
                {/* will update with game link once beta is hosted */}
                <a target = "_blank" href = "https://planterplanetgame.netlify.app/"><button id = "playNowButton">Play Now</button></a>
                <button id = "learnMoreButton"><Link to="storyShell" spy={true} smooth={true}>Learn More</Link></button> 
            </div>
        </div>
    )

}

export default Landing;