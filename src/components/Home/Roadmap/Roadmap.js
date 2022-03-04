import React from 'react';
import './Roadmap.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import timelineImage from '../../../assets/Timeline.png'
import timelineIcon1 from '../../../assets/TimelineIcon1.png'
import timelineIcon2 from '../../../assets/TimelineIcon2.png'
import timelineIcon3 from '../../../assets/TimelineIcon3.png'
import timelineIcon4 from '../../../assets/TimelineIcon4.png'


function Roadmap() {
    return (
        <div id = "roadmapContainer">
            <div id = "roadmapSubContainer">
            <h2 id = "roadmapHeader"><u>Planet Planter Roadmap</u></h2>
            <Container>
                <Row className = "justify-content-md-right">
                    <Col>
                        <img className = "timelineIconTop" src = {timelineIcon1}/>
                    </Col>
                    <Col>
                        <p className = "roadmapContentTop">Implement ERC721 Fucntionaility for Mature Trees and NFT Minting</p>
                    </Col>
                    <Col>    
                        <img className = "timelineIconTop" src = {timelineIcon3}/>
                    </Col>
                    <Col>
                        <p className = "roadmapContentTop">Launch Beta Version of Planet Planter to Public for Testing</p>
                    </Col>
                </Row>
                        <img id = "timeline" src = {timelineImage}/>
                <Row>
                    <Col>
                        <p className = "roadmapContentBottom">Deploy Planet Planter with Core Game Features</p>
                    </Col>
                    <Col>
                        <img className = "timelineIconBottom" src = {timelineIcon2}/>
                    </Col>
                    <Col>
                        <p className = "roadmapContentBottom">Establish partnership with environmental organizations(s) to plant trees worldwide</p>
                    </Col>
                    <Col> 
                        <img className = "timelineIconBottom" src = {timelineIcon4}/>
                    </Col>
                </Row>
            </Container> 
            </div>
       </div>
    )

}

export default Roadmap;