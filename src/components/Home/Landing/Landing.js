import React from 'react';
import './Landing.css'
import gameLogo from '../../../assets/GameLogo.png'

function Landing() {
    return (
        <div id = "container">
            <div id = "subContainer">
                <img src = {gameLogo}/>
                <h3 id = "landingContent">An interactive blockchain clicker game to solve your boredom and save the world!</h3>
                <button id = "playNowButton">Play Now</button> 
                <button id = "learnMoreButton">Learn More</button> 
            </div>
        </div>
    )

}

export default Landing;