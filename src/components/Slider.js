import React, { useState, useEffect, useCallback } from 'react';
import HeadTitle from './HeadTitle';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
// import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';
import image8 from '../assets/images/image8.jpeg';
import image9 from '../assets/images/image9.jpeg';
import image10 from '../assets/images/image10.jpeg';

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageClicked, setIsImageClicked] = useState(false);

  const images = [
    { src: image4, alt: 'CARNEVALLE CROMATTICO 1.45X1.30cm oil on canvas ', name: 'CARNAVLLE CROMATTICO', style: 'Oil on canvas (1.45x1.30m)', author: 'Pierossi', status: 'Disponible' },
    { src: image1, alt: 'Manta Voladora', name: 'MANTA VOLADORA', style: 'Oil on canvas (1.00x1.40m)', author: 'Pierossi', status: 'Disponible' },
    { src: image2, alt: 'LUNA AZUL  090x140cm oil and canvas', name: 'LUNA AZUL', style: 'Oil on canvas (.90x1.40m)', author: 'Pierossi', status: 'Disponible' },
    { src: image3, alt: 'Movimiento crómatico y penumbras (1x1.20m)', name: 'MOVIMIENTO CROMÁTICO Y PENUNBRAS', style: 'Oil on canvas (1x1.20m)', author: 'Pierossi', status: 'Disponible' },
    // { src: image5, alt: 'Espera Con Gato - Óleo sobre canvas 150x200, Loc. Boston USA 2005', name: 'ESPERA CON GATO', style: 'Oil on canvas (1.50x2m)', author: 'Pierossi', status: 'Vendido' },
    { src: image6, alt: 'FUGA HACIA ANDRÓMEDA- Oíl on canvas/ 150X150m', name: 'FUGA HACIA ANDROMEDA', style: 'Oil on canvas (1.50x1.50m)', author: 'Pierossi', status: 'Disponible' },
    { src: image7, alt: 'Vitesse', name: 'VITESSE', style: 'Oil on canvas (1.50x1.50m)', author: 'Pierossi', status: 'Disponible' },
    { src: image8, alt: 'LUNA AMARILLA  090x140cm', name: 'LUNA AMARILLA', style: 'Oil on canvas (.90x1.40m)', author: 'Pierossi', status: 'Disponible' },
    { src: image9, alt: 'VUELO PARALELO - 1.30X1.30', name: 'VUELO PARALELO', style: 'Oil on canvas (1.30x1.30m)', author: 'Pierossi', status: 'Disponible' },
    { src: image10, alt: 'ALASKA -90X1.40cm Oíl on canvas', name: 'ALASKA', style: 'Oil on canvas (0.90x1.40m)', author: 'Pierossi', status: 'Disponible' },
    // Add more image data as needed
  ];

  const goToNextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
  }, [images.length]);

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
  }, [goToNextSlide, goToPrevSlide]);

  const handleImageClick = () => {
    setIsImageClicked(true);
  };

  const handleOverlayClick = () => {
    setIsImageClicked(false);
  };

  return (
    <div className="slider-container">
    <HeadTitle />
    <div className={`slider ${isImageClicked ? 'image-clicked' : ''}`}>
      <ArrowButton direction="left" onClick={goToPrevSlide} />
      <div className="slider-image-container">
        <img
          className="slider-image"
          src={images[currentImageIndex].src}
          alt={`Slide ${currentImageIndex + 1}`}
          onClick={handleImageClick}
        />
        <p className="image-name">{images[currentImageIndex].name}</p>
      </div>
      <div className="image-description">
        <p className="asterisc">*</p>
        <p className="image-details">{images[currentImageIndex].style}</p>
        <p className="asterisc">*</p>
        <p className="image-details">{images[currentImageIndex].author}</p>
        <p className="asterisc">*</p>
        <p className="image-status">{images[currentImageIndex].status.toUpperCase()}</p>
      </div>
      <ArrowButton direction="right" onClick={goToNextSlide} />
      {isImageClicked && (
        <div className="overlay" onClick={handleOverlayClick}>
          <img
            className="image-clicked"
            src={images[currentImageIndex].src}
            alt={`Slide ${currentImageIndex + 1}`}
            onClick={handleImageClick}
          />
        </div>
      )}
    </div>
    </div>
  );
};

const ArrowButton = ({ direction, onClick }) => {
  return (
    <button className={`slider-arrow ${direction}`} onClick={onClick}>
      {direction === 'left' ? '<' : '>'}
    </button>
  );
};

export default Slider;
