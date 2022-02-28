import React from 'react';
import './Landing.css'
import earthImage from '../../assets/Earth.png'

function Landing() {
    return (
        <div id = "container">
            <div id = "subContainer">
                <h1 id = "title">Planet Planter</h1>
                <h3 id = "landingContent">An interactive blockchain clicker game to solve your boredom and save the world!</h3>
                <button id = "playNowButton">Play Now</button> 
                <button id = "learnMoreButton">Learn More</button> 
            </div>
        </div>
    )

}

export default Landing;