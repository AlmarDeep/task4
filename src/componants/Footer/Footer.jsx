import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import './Footer.css'
import Container from 'react-bootstrap/esm/Container'

const Footer = () => {
  return (
    <Container fluid className='Footer mt-5 pt-5'>


      <Row>
        <Col md={4}>
          <h3>Medicio</h3>
          <p>A 108 Adam Street </p>
          <p> New York,NY 535022</p>
          <p> <span>Phone:</span> +1 5589 55488 55</p>
          <p> <span>Email:</span> info@example.com</p>

        </Col>
        <Col md={2} >
          <h5>Useful Links</h5>
          <p>Home</p>
          <p>About us</p>
          <p>Services</p>
          <p>Terms of services</p>
          <p>Privacy policy</p>
        </Col>
        <Col md={2}>
          <h5>Our Sevices</h5>
          <p>Web Design</p>
          <p>Web Development </p>
          <p>Product Management</p>
          <p>Marketing</p>
          <p>Graphic Design</p>
        </Col>
        <Col md={2}>
          <h5>His solutasetp </h5>
          <p>Molestiae accusamua irue</p>
          <p>Excepturi Dignissimos</p>
          <p>Suscipit distinctio</p>
          <p>Dilecta</p>
          <p>Sit ques consectetur</p>
        </Col>
        <Col md={2}>
          <h5>Nobis ill</h5>
          <p>Ispam</p>
          <p>Laudantiu doloru</p>
          <p>Dinera</p>
          <p>Trodelas</p>
          <p>Flexo</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} Medicio. All rights reserved.</p>
        </Col>
      </Row>


    </Container>
  )
}

export default Footer