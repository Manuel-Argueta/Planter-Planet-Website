import React from "react";
import './Story.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import progressGraphic from '../../../assets/treeProgressGraphic.png'

function Story() {
  return (
    <div id = "storyShell"> 
    <Container>
      <Row>
        <Col>
          <h2 id = "storyHeader">A Quest To Survive</h2>
          <p className = "storyContent">
            You are the last farmer on earth, and you must save mother nature by
            planting trees!
          </p>
          <p className = "storyContent">Each click will add XP to your current tree seed! Expand 
          and gain the ability to farm multiple trees at once! The XP will help your tree grow and reach maximum maturity! 
          </p>
          <p className = "storyContent">
            The in-game currency SOIL will be used to purchase automated farming
            labor,more seeds, and better fertilizer to grow plants faster.
          </p>
          <p className = "storyContent">
            Once your tree reaches a mature age, you will be gifted an NFT of that
            tree corresponding to its unique genetic makeup.
          </p>
        </Col>
        <Col> <img id = "progressGraphic" src = {progressGraphic}/></Col>
      </Row>
    </Container>
    </div>
  );
}

export default Story;
