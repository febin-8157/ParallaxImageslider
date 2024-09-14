// src/ImageSlider.js
import React, { useState } from 'react';
import './ImageSlider.css'; // Import CSS for styling

const images = [
  'https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1670440987322-DS78T6LKCXSXKR6EM2K2/Untitled+design.gif?format=750w',
  'https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/9135e01e-e1b8-4e67-8bc6-c72d09037105/Food+Colors.png?format=750w',
  'https://images.squarespace-cdn.com/content/v1/599c75ede9bfdfe898f03f2a/1647541673124-PTM7FNH0SFK3AVB5VXGN/3.jpg?format=750w',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
      <button className="nav-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slides">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="nav-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
