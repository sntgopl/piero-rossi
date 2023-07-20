import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageClicked, setIsImageClicked] = useState(false);

  const images = [
    { src: image4, alt: 'Image 4', name: 'Artwork 4', style: 'Still Life', author: 'Pierossi', status: 'Available' },
    { src: image1, alt: 'Manta Voladora', name: 'MANTA VOLADORA', style: 'Oil on canvas', author: 'Pierossi', status: 'Available' },
    { src: image2, alt: 'Image 2', name: 'Artwork 2', style: 'Landscape', author: 'Pierossi', status: 'Available' },
    { src: image3, alt: 'Image 3', name: 'VIVERN FAMILY', style: 'Portrait', author: 'Pierossi', status: 'Available' },
    { src: image5, alt: 'Espera Con Gato - Óleo sobre canvas 150x200, Loc. Boston USA 2005', name: 'ESPERA CON GATO', style: 'Oil on canvas', author: 'Pierossi', status: 'Sold' },
    { src: image6, alt: 'Fuga Hacia Andromeda', name: 'FUGA HACIA ANDROMEDA', style: 'Oil on canvas', author: 'Pierossi', status: 'Available' },
    { src: image7, alt: 'Vitesse', name: 'VITESSE', style: 'Oil on canvas', author: 'Pierossi', status: 'Available' },
    // Add more image data as needed
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 39) {
        goToNextSlide();
      } else if (event.keyCode === 37) {
        goToPrevSlide();
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);  

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
  }; 

  const handleImageClick = () => {
    setIsImageClicked(true);
  };

  const handleOverlayClick = () => {
    setIsImageClicked(false);
  };

  return (
    <div className={`slider ${isImageClicked ? 'image-clicked' : ''}`}>
      <button className="slider-arrow" onClick={goToPrevSlide}>
        &lt;
      </button>
      <div className="slider-image-container">
        <img
          className='slider-image'
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          onClick={handleImageClick}
        />
        <p className="image-name">{images[currentImageIndex].name}</p>
      </div>
      <div className="image-description">
        <p className="image-details">Style: {images[currentImageIndex].style}</p>
          <p className='asterisc'>*</p>
          <p className='image-details'>Author: {images[currentImageIndex].author}</p>
        <p className='asterisc'>*</p>
        <p className="image-status">{images[currentImageIndex].status.toUpperCase()}</p>
      </div>
      <button className="slider-arrow" onClick={goToNextSlide}>
        &gt;
      </button>
      {isImageClicked && (
        <div className="overlay" onClick={handleOverlayClick}>
          <img
          className='image-clicked'
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          onClick={handleImageClick}
        />
        </div>
      )}
    </div>
  );
};

export default Slider;
