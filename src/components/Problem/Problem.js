import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import farmingImage from '../../assets/Farming.png'

function Problem() {
    return (
        <Container>
        <Row>
            <Col>    <img src = {farmingImage}/> </Col>
          <Col>
            <h2>Solving Deforestation</h2>
            <h4>The mission of our organization is to use PlanetPlanter to solve Deforestation around the world. 
            The procedes from the game will support organizations to plant more trees around the world 
            50% of revenue will go to planting trees in real life. We will be solving the deforestation problem in our world 
            and our goal is to plant more trees around the world using revenue from our game. </h4>
          </Col>
        </Row>
      </Container>
    )

}

export default Problem;