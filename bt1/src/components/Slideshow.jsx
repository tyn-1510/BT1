import React, { useState } from "react";
import './Slideshow.css'; 

const images = [
  "https://picsum.photos/300/200?image=0",
  "https://picsum.photos/300/200?image=1",
  "https://picsum.photos/300/200?image=2",
  "https://picsum.photos/300/200?image=3",
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow-container">
      <button onClick={prevSlide}>Back</button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: "800px", height: "400px" }}
      />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
