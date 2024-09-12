import React from 'react'
import './Doctors.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import DoctorsCard from '../DoctorsCard/DoctorsCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Doctors = () => {
    const ddata = [{
        dimg: "/assets/img/doctors-1.jpg",
        dname: "walter white",
        djop: "cheif medical officer"
    },
    {
        dimg: "/assets/img/doctors-2.jpg",
        dname: "sarah jhonson",
        djop: "anesthesiologist"
    },
    {
        dimg: "/assets/img/doctors-3.jpg",
        dname: "william anderson",
        djop: "cardiology"
    },
    {
        dimg: "/assets/img/doctors-4.jpg",
        dname: "amanda jepson",
        djop: "neurosurgeon"
    },
    ]
    return (
        <Container fluid className='Doctors mt-5 pt-5 pb-5'>
            <Row>
                <Col> <SectionTitle title="Doctors" paragaph="Lorem ipsum dolor, sit amet consectetur adipisicing elit." /></Col>
            </Row>
            <Row>
                <Col>
                    <Row className='dcards'>
                        {
                            ddata.map((element, index) => {
                                return (
                                   <Col>
                                   <DoctorsCard key={index} dimg={element.dimg} dname={element.dname} djop={element.djop} />
                                   </Col> 
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>



        </Container>
    )
}

export default Doctors