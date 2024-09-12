import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import './SendMassage.css'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';

const SendMassage = () => {
  return (
    <Container className='sendmassage pt-5 mt-3' fluid style={{ width: "35vw" }}>
      <Row>
        <Col>< Form.Control type="text" placeholder="Your Name" style={{ width: "15vw", borderRadius: "0%", backgroundColor: "white" }} /></Col>
        <Col> < Form.Control type="text" placeholder="Your Email" style={{ width: "15vw", borderRadius: "0%", backgroundColor: "white" }} /></Col>
      </Row>


      < Form.Control type="text" placeholder="Subject" style={{ width: "32vw", borderRadius: "0%", backgroundColor: "white" }} />
      <Form.Control
        as="textarea"
        placeholder='Massage'
        rows={3}
        style={{ width: "32vw", borderRadius: "0%", backgroundColor: "white" }}
      />
      <Button style={{ background: "#3fbbc0", border: "#3fbbc0" }} >Send Massage</Button>
    </Container>
  )
}

export default SendMassage