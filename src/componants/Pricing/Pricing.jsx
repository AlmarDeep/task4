import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import PricingCard from '../PricingCard/PricingCard'
import './Pricing.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Pricing = () => {
    const pdata = [{
        title: "Free",
        price: "0",

    },
    {
        title: "Business",
        price: "19"
    },
    {
        title: "Developer",
        price: "29"
    },
    {
        title: "Ultimate",
        price: "49"
    }
    ]
    return (
        <Container fluid className='pricing mt-5 mp-5'>
            <SectionTitle title="Pricing" paragaph="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
            <Row className='pcards '>
                {
                    pdata.map((element, index) => {
                        return (
                          <Col>
                          <PricingCard key={index} title={element.title} price={element.price} />
                          </Col>
                            
                        )
                    })
                }
            </Row>

        </Container>
    )
}

export default Pricing