import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './PricingCard.css'
import Container from 'react-bootstrap/Container'

const PricingCard = ({ title, price }) => {
  return (
    <Container className='PricingCard '>
      <Card style={{ width: '18rem', textAlign: "center" }}>
        <Card.Header className='header' style={{ backgroundColor: "#f5f5f5" }} >{title}</Card.Header>
        <Card.Body>
          <Card.Title>${price}/months</Card.Title>
          <Card.Text> Aida dere
          </Card.Text>
          <Card.Text> nec feugait nisl
          </Card.Text>
          <Card.Text> nulla at volutpat
          </Card.Text>
          <Card.Text> pharetra massa
          </Card.Text>
          <Card.Text> massa ultricies mi
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#f5f5f5" }}>
          <ListGroup.Item style={{ backgroundColor: "#f5f5f5" }}>
            <button style={{ color: "white", backgroundColor: "#3fbbc0", border: "#3fbbc0 solid 1px", borderRadius: "10px", width: "6rem", fontWeight: "bold" }} >Buy now</button>
          </ListGroup.Item>

        </ListGroup>

      </Card>
    </Container>
  )
}

export default PricingCard