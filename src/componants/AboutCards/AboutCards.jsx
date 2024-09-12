import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const AboutCards = ({ cicon, cnumber, ctext }) => {
  return (

    <Container fluid className="card-group justify-content-center mt-5" style={{ width: "500px", boxShadow: "0px 0 25px 0 rgba(0, 0, 0, 0.1)" }}>
      <Card className="card mb-3 pt-3" style={{ border: "none" }}>
        <Row noGutters>
          <Col >
            <i className={cicon} style={{ paddingTop: '4vh', width: "100px", height: "100px" }}></i>
          </Col>
          <Col >
            <Card.Body className="text-start">
              <Card.Title>{cnumber}</Card.Title>
              <Card.Text>{ctext}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default AboutCards