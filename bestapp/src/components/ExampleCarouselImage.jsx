// components/ExampleCarouselImage.js or components/ExampleCarouselImage.jsx
import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div className="carousel-image">
      <img
        className="d-block w-100"
        src="https://t4.ftcdn.net/jpg/05/56/16/81/360_F_556168144_qEINHd6qUsQH4b6wDvgOS0WtuShVwJVm.jpg"
        alt={text}
      />
      <div className="carousel-text">{text}</div>
    </div>
  );
};

export default ExampleCarouselImage;
