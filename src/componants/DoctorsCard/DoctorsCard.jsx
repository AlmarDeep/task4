import React from 'react'
import Card from 'react-bootstrap/Card';

const DoctorsCard = ({ dimg, dname, djop }) => {
  return (
    <div className='DoctorsCard '>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={dimg} />
        <Card.Body>
          <Card.Title>{dname}</Card.Title>
          <Card.Text style={{ color: "#8f8fa1" }}>
            {djop}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DoctorsCard