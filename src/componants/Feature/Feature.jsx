import React from 'react'
import './Feature.css'
import FeatureCard from '../FeatureCards/FeatureCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Feature = () => {
    const fdata = [{
        i: "fa-solid fa-hand-holding-medical flex-shrink-0",
        title: "Lorem Ipsum",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
        i: " fa-solid fa-suitcase-medical flex-shrink-0 ",
        title: "Nemo Enim",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
        i: " fa-sharp fa-solid fa-staff-snake",
        title: "Dina Pad",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

    {
        i: "fa-solid fa-lungs flex-shrink-0 ",
        title: "Tride clov",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    ]
    return (
        <Container fluid className='Feature mt-5'>
            <Row className="justify-content-center ">
                <Col  ><img src="/assets/img/features.jpg" alt="" /></Col>
                <Col   >

                    <h3 >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                    <div style={{ borderBottom: "#3fbbc0 solid 7px", width: "100px" }}></div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus veniam reprehenderit itaque veritatis quos rerum rem omnis, quas aut, fugiat voluptate labore accusantium doloribus praesentium optio voluptates mollitia velit dicta.</p>
                    {
                        fdata.map((element, index) => {
                            return (
                                <FeatureCard key={index} i={element.i} text={element.text} title={element.title} />
                            )
                        })
                    }

                </Col>
            </Row>



        </Container>
    )
}

export default Feature