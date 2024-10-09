// pages/index.tsx
'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  { src: '/bedroom2.jpg', title: '01 — Bedroom', desc: 'Inner Peace' },
  { src: '/livingroom.jpg', title: '02 — Living Room', desc: 'Cozy Comfort' },
  { src: '/kitchen.jpg', title: '03 — Kitchen', desc: 'Modern Brightness' },
  { src: '/diningtable2.jpg', title: '04 — Dining Room', desc: 'Elegant Dining' },
];

const Home: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const slideInterval = setInterval(() => {
        nextSlide();
      }, 3000); // Auto-slide every 3 seconds
  
      return () => clearInterval(slideInterval);
    }, [currentIndex]);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    return (
      <div style={{ width: '100%', margin: '0 auto', padding: '50px', position: 'relative', backgroundColor: '#f5f5dc', borderRadius: '20px' }}>
        {/* Flexbox to position text on left and images on right */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left Text Section */}
          <div style={{ flex: '1', paddingRight: '20px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '10px', fontWeight:'bold' }}>50+ Beautiful Rooms Inspiration</h2>
            <p style={{ marginBottom: '20px', fontSize: '18px', color: '#555' }}>
              Our designer already made a lot of beautiful <br/> prototypes of rooms that inspire you.
            </p>
            <button
              style={{
                backgroundColor: '#F6A623',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '16px',
                marginBottom: '30px'
              }}
            >
              Explore More
            </button>
  
            {/* Current Slide Info */}
            <div>
              <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>{images[currentIndex].title}</h3>
              <p style={{ fontSize: '16px', color: '#777' }}>{images[currentIndex].desc}</p>
            </div>
          </div>
  
            {/* Main (Current) Image */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <Image
                src={images[currentIndex].src}
                alt="Current Image"
                style={{
                  width: '400px',
                  height: 'auto',
                  zIndex: '2',
                  transition: 'all 0.5s ease',
                  borderRadius: '10px',
                }}
                height={400}
                width={400}
                priority
              />
              {/* Text Overlay (No longer needed on the image itself, but here in case) */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '0',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: '#fff',
                padding: '10px',
                textAlign: 'center',
                borderRadius: '10px',
              }}>
                <h3 style={{ fontSize: '18px', margin: '0' }}>{images[currentIndex].title}</h3>
                <p style={{ fontSize: '14px', margin: '5px 0 0 0' }}>{images[currentIndex].desc}</p>
              </div>
            </div>
  
           </div>
  
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          &#10095;
        </button>
      </div>
    );
  };
  
  export default Home;