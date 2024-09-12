import React from 'react'
import './AddAnAppointment.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const AddAnAppointment = () => {
  return (
    <div className='AddAnAppointment mt-5 p-5'>
      <SectionTitle title="Make An Appointemnt" paragaph='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam consequatur.' />
      <div className='forms'>
        < Form.Control type="text" placeholder="Your Name" style={{ width: "25vw", borderRadius: "0%", backgroundColor: "white" }} />
        < Form.Control type="text" placeholder="Your Email" style={{ width: "25vw", borderRadius: "0%", backgroundColor: "white" }} />
        < Form.Control type="number" placeholder="Your Phone" style={{ width: "25vw", borderRadius: "0%", backgroundColor: "white" }} />
        <Form.Control type="date" style={{ width: "25vw", borderRadius: "0%", backgroundColor: "white" }} />
        <Form.Select aria-label="Default select example" style={{ width: "25vw", borderRadius: "0%", backgroundColor: "white" }} >
          <option>Select Department</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" style={{ width: "25vw", borderRadius: "0%", backgroundColor: "white" }}>
          <option>Select Doctor</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Control
          as="textarea"
          rows={3}
          style={{ width: "95vw", borderRadius: "0%", backgroundColor: "white" }}
        />
        <Form className="d-flex">

          <Button style={{ background: "#3fbbc0", border: "#3fbbc0" }} >MAKE AN APPOINTMENT</Button>
        </Form>
      </div>

    </div>
  )
}

export default AddAnAppointment