import React, { useState } from "react";
import './Slideshow.css'; 

const images = [
  "https://picsum.photos/300/200?image=0",
  "https://picsum.photos/300/200?image=1",
  "https://picsum.photos/300/200?image=2",
  "https://picsum.photos/300/200?image=3",
  "https://picsum.photos/300/200?image=4",
  "https://picsum.photos/300/200?image=5",
  "https://picsum.photos/300/200?image=6",
  "https://picsum.photos/300/200?image=7",
  "https://picsum.photos/300/200?image=8",
  "https://picsum.photos/300/200?image=9",
  "https://picsum.photos/300/200?image=10",
  "https://picsum.photos/300/200?image=11",
  "https://picsum.photos/300/200?image=12",
  "https://picsum.photos/300/200?image=13",
  "https://picsum.photos/300/200?image=14",
  "https://picsum.photos/300/200?image=15",
  "https://picsum.photos/300/200?image=16",
  "https://picsum.photos/300/200?image=17",
  "https://picsum.photos/300/200?image=18",
  "https://picsum.photos/300/200?image=19",
  "https://picsum.photos/300/200?image=20",
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
