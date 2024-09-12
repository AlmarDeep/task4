import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContactCard.css'
import Container from 'react-bootstrap/esm/Container';

const ContactCard = () => {
  return (
    <>
      <Container className='mt-3' style={{ alignItems: "start" }} fluid>
        <Row>
          <Col>
            <Card style={{ width: '40vw', textAlign: "center", boxShadow: "0px 0 25px 0 rgb(0, 0,0,0.1)" }}>
              <div className='foricon '>
                <i class="fa-regular fa-location-dot" ></i>
              </div>
              <Card.Body>
                <Card.Title>Address</Card.Title>
                <Card.Text>
                  A108 adam Street,New York,NY 535022
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col>   <Card style={{ width: '15rem', textAlign: "center", boxShadow: "0px 0 25px 0 rgb(0, 0,0,0.1)" }}>
            <div className='foricon '>
              <i class="fa-regular fa-phone" ></i>
            </div>

            <Card.Body>
              <Card.Title>Call Us
              </Card.Title>
              <Card.Text>
                +1 5589 55488 55
              </Card.Text>
            </Card.Body>
          </Card></Col>
          <Col>   <Card style={{ width: '15rem', textAlign: "center", boxShadow: "0px 0 25px 0 rgb(0, 0,0,0.1)" }}>
            <div className='foricon '>
              <i class="fa-regular fa-envelope" ></i>
            </div>
            <Card.Body>
              <Card.Title>Email Us</Card.Title>
              <Card.Text>
                info@exaple.com
              </Card.Text>
            </Card.Body>
          </Card></Col>
        </Row>
      </Container>
    </>
  )
}

export default ContactCard