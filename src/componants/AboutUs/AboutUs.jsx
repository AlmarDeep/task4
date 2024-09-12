import React from 'react'
import './AboutUs.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import AboutCards from '../AboutCards/AboutCards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const AboutUs = () => {
  const cdata = [{
    cicon: "fa-solid fa-user-doctor",
    cnum: "25",
    ctext: "Doctors"
  },
  {
    cicon: "fa-regular fa-hospital",
    cnum: "15",
    ctext: "Department"
  },
  {
    cicon: "fa-solid fa-flask",
    cnum: "8",
    ctext: "Labs"
  },
  {
    cicon: "fa-solid fa-award",
    cnum: "150",
    ctext: "Awards"
  },
  ]
  return (
    <Container fluid className='AboutUs text-center mt-3 pt-3'>
      <SectionTitle title='About Us' paragaph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam consequatur." />
      <Row>
        <Col> <video src="" controls poster='/assets/img/about.jpg' width="50vw" style={{
          width: "40vw",
          objectfit: " fill"
        }}></video></Col>
        <Col>
          <div className=' text-start' >
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam consequatur. Commodi, esse saepe delectus minima error tempora ex doloribus velit maxime ipsum impedit ipsa labore ducimus iure cumque nemo! </p>
            <ul>
              <li><i class="fa-solid fa-check-double"></i><span>Lorem ipsum dolor sit amet consectetur adipisicing</span></li>
              <li><i class="fa-solid fa-check-double"></i> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span></li>
              <li><i class="fa-solid fa-check-double"></i> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente quaerat quia</span></li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vero exercitationem sequi, quod accusantium praesentium dolorum numquam. Fugit optio delectus ea laborum reiciendis officia nobis dolorum ab, sunt hic maxime?</p>
          </div></Col>
      </Row>
      <Row>
        <Col>
          <div className='mycards' >
            {
              cdata.map((element, index) => {
                return (
                  <AboutCards key={index} cicon={element.cicon} ctext={element.ctext} cnumber={element.cnum} />
                )
              })
            }
          </div>
        </Col>
      </Row>


    </Container>
  )
}

export default AboutUs