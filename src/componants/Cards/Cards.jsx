import React from 'react'
import './Cards.css'
import Card from 'react-bootstrap/Card';

const Cards = ({ icons, cardtitle, cardtext }) => {
  return (

    <Card style={{ width: '18rem' }} className='mycard ' >
      <i class={icons}></i>
      <Card.Body>
        <Card.Title>{cardtitle}</Card.Title>
        <Card.Text>
          {cardtext}
        </Card.Text>

      </Card.Body>
    </Card>
  )
}

export default Cards