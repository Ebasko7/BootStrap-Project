import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';



function CarouselComp({ newsJSON }) {
  
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={newsJSON[3].image_url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>{newsJSON[3].title}</h1>
          <p>{newsJSON[3].summary}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={newsJSON[4].image_url}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>{newsJSON[4].title}</h1>
          <p>{newsJSON[4].summary}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={newsJSON[5].image_url}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1>{newsJSON[5].title}</h1>
          <p>{newsJSON[5].summary}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;