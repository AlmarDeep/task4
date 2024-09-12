import React from 'react'
import './Hero.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Hero = () => {

  return (
    <section id="hero" class="hero section">

      <div id="hero-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">


        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <Carousel.Caption className=' cc '>
              <h1>First slide label</h1>
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sequi enim deserunt culpa libero soluta saepe excepturi tempore quibusdam! Iste aperiam repudiandae quae culpa, velit fuga delectus voluptatibus est incidunt?</p>
              <Form className="d-flex">

                <Button style={{ background: "#3fbbc0", border: "#3fbbc0", }} >read more</Button>
              </Form>
            </Carousel.Caption>
            <img
              className="d-block w-100"
              src="/assets/img/hero-carousel-1.jpg"
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/img/hero-carousel-2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className='cc'>
              <h1>Second slide label</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ducimus odio adipisci, quaerat rem quod assumenda ea placeat, voluptatibus laborum blanditiis maiores exercitationem est vitae nihil numquam ipsum quis repellendus.</p>
              <Form className="d-flex">
                <Button style={{ background: "#3fbbc0", border: "#3fbbc0", }} >read more</Button>
              </Form>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/img/hero-carousel-3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className='cc'>
              <h1>Third slide label</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt provident aspernatur eaque soluta, repellat dolor officia perferendis voluptatibus minus perspiciatis debitis reprehenderit vel labore distinctio quod. Ad tempora minus temporibus!
              </p>
              <Form className="d-flex">
                <Button style={{ background: "#3fbbc0", border: "#3fbbc0", }} >read more</Button>
              </Form>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>

    </section>
  )
}

export default Hero