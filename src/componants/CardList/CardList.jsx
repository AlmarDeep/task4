import React, { useState } from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import './CardList.css'
import SectionTitle from '../SectionTitle/SectionTitle';

const cardsData = [
  {
    id: 1,
    content: 'Lorem ipsum dolor sit amet',
    timg: "/assets/img/testimonials-3.jpg",
    tname: "jana karlis ",
    tjop: "store owner"
  },
  {
    id: 2,
    content: 'Consectetur adipiscing elit',
    timg: "/assets/img/testimonials-1.jpg",
    tname: "matt brandon",
    tjop: "freelancer"
  },
  {
    id: 3, content: 'Sed do eiusmod tempor incididunt',
    timg: "/assets/img/testimonials-5.jpg",
    tname: "john larson",
    tjop: "entrepreneur"
  },
  {
    id: 4,
    content: 'Labore et dolore magna aliqua',
    timg: "/assets/img/testimonials-4.jpg",
    tname: "matt brandon",
    tjop: "freelancer"
  },
  {
    id: 5,
    content: 'Ut enim ad minim veniam',
    timg: "/assets/img/testimonials-2.jpg",
    tname: "matt brandon",
    tjop: "freelancer"
  }
];
const CardList = () => {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(cardsData.length / itemsPerPage);
  const indexOfLastCard = activePage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <Container fluid className='mt-5 ml-5' >
        <SectionTitle title="Testimonials" paragaph='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />
        <Row>
          {currentCards.map(card => (
            <Col key={card.id} >
              <Card style={{ width: "20vw", height: "max-content", backgroundColor: "#f9f9f9", borderRadius: "5%", border: "#f9f9f9 solid 0px" }} >
                <Card.Body >
                  <Card.Text className='parent pt-3 mb-3 ml-5' style={{ textAlign: "center" }} >
                    <span style={{ fontSize: "larger", fontWeight: "bolder", color: "#9cdadc" }}>،،</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis quia eveniet ut saepe recusandae, cumque fuga possimus natus, praesentium alias aliquam ipsum eius consequatur est reprehenderit veniam, nihil autem? </Card.Text>
                </Card.Body>

                <div className='child'>
                  <img src={card.timg} alt="" style={{ borderRadius: "50%", width: "150px", height: "150px" }} />
                  <h5>{card.tname}</h5>
                  <p style={{ color: "#888888" }} >{card.tjop}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination  >
          {Array.from({ length: totalPages }, (_, i) => (
            <Pagination.Item key={i + 1} active={i + 1 === activePage} onClick={() => handlePageChange(i + 1)}>
              {i + 1}

            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </>
  );
};

export default CardList