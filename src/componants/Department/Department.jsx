import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './Department.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Department = () => {
  return (
    <div className=' mt-5' style={{ position: 'relative' }}>
      <SectionTitle title="Department" paragaph='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />
      <Container fluid>
        <Row>
          <Col style={{ position: "relative", height: "20vh", overflowY: "scroll" }}>
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0"  >
              <a class="list-group-item list-group-item-action" href="#list-item-1"   >cardilogy</a>
              <a class="list-group-item list-group-item-action" href="#list-item-2">neurologh</a>
              <a class="list-group-item list-group-item-action" href="#list-item-3">hepatology</a>
              <a class="list-group-item list-group-item-action" href="#list-item-4">pediatrics</a>
              <a class="list-group-item list-group-item-action" href="#list-item-4">Ophthalmologists</a>
            </div></Col>
          <Col style={{ position: "relative", height: "40vh", overflowY: "scroll" }}>
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
              <h4 id="list-item-1">cardilogy</h4>
              <p style={{ height: "40vh" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ad deleniti cumque architecto officiis maiores nulla nesciunt, eum aliquid provident similique blanditiis iste sint exercitationem ex facilis? Sint, non nobis!
              </p>
              <h4 id="list-item-2">neurologh</h4>
              <p style={{ height: "40vh" }}> .</p>
              <h4 id="list-item-3">hepatology</h4>
              <p style={{ height: "40vh" }}>...</p>
              <h4 id="list-item-4">pediatrics</h4>
              <p style={{ height: "40vh" }}>...</p>
              <h4 id="list-item-4">Ophthalmologists</h4>
              <p style={{ height: "40vh" }}>...</p>
            </div>
          </Col>
          <Col>
            <img src='/assets/img/departments-5.jpg' alt="" />
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Department 