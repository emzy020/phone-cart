import React, { useState } from "react";
import iphone16 from '../assets/16.avif'
import iphone16pm from '../assets/16 pm.avif'
import iphone16p from '../assets/16 pm.avif'
import iphone15 from '../assets/15.jpg'
import iphone15p from '../assets/15 p.jpg'
import iphone15pm from '../assets/15 pm.jpg'

const Carousel = () => {
  const slides = [
    { id: 1, name: 'iphone 16 pro max',img:iphone16pm, text: "Slide 1" },
    { id: 2, name: 'iphone 16 pro ',img:iphone16p, text: "Slide 2" },
    { id: 3, name: 'iphone 16 ',img:iphone16, text: "Slide 3" },
    { id: 4, name: 'iphone 15 ',img:iphone15, text: "Slide 4" },
    { id: 5, name: 'iphone 15 pro ',img:iphone15p, text: "Slide 5" },
    { id: 6, name: 'iphone 15 pro max',img:iphone15pm, text: "Slide 6" },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-[600px] mx-auto" style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'20px',padding:'20px 40px'}}>
      {/* Slide */}
      <div style={{ position: 'relative', width: '600px', margin: '0 auto' }}>
  {/* Image */}
  <img
    src={slides[currentIndex].img}
    alt={slides[currentIndex].text}
    style={{ width: '100%', height:'600px', objectFit: 'cover',display:'block'  }}
  />

  {/* Text */}
  <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px', fontWeight: '600' }}>
    {slides[currentIndex].name}
  </p>

  {/* Prev button */}
  <button
    onClick={prevSlide}
    style={{
      position: 'absolute',
      top: '50%',
      left: '10px',
      transform: 'translateY(-50%)',
      background: 'rgba(0,0,0,0.5)',
      color: 'white',
      padding: '8px 12px',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer'
    }}
  >
    ‹
  </button>

  {/* Next button */}
  <button
    onClick={nextSlide}
    style={{
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
      background: 'rgba(0,0,0,0.5)',
      color: 'white',
      padding: '8px 12px',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer'
    }}
  >
    ›
  </button>
</div>

    </div>
  );
};

export default Carousel;
