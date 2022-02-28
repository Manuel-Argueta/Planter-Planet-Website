import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import storyGraphic from '../../assets/StoryGraphic.png'

function Story() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>A Quest To Survive</h2>
          <h4>
            You are the last farmer on earth, and you must save mother nature by
            planting trees! Each Click will ad XP to your randomly genitically
            generated seed. The XP will help your tree grow and reach maximum
            Maturity! An in-game currency will be developed to purchase farming
            labor, more seeds, and better fertilizer to grow plants faster Once
            your tree reaches a mature age, you will be gifted an NFT of that
            tree corresponding to its unique genetic makeup.
          </h4>
        </Col>
        <Col> <img src = {storyGraphic}/></Col>
      </Row>
    </Container>
  );
}

export default Story;
