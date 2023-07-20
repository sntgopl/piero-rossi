import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ handlePageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (page) => {
    handlePageChange(page);
    setIsOpen(false);
  };

  return (
    <div className="navigation-bar">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={isOpen ? 'line line-1' : 'line'}></div>
        <div className={isOpen ? 'line line-2' : 'line'}></div>
        <div className={isOpen ? 'line line-3' : 'line'}></div>
      </div>
      {isOpen && (
        <div className="menu-items">
          <Link to="/" className="nav-button" onClick={() => handleItemClick('slider')}>
            Galería
          </Link>
          <Link to="/biography" className="nav-button" onClick={() => handleItemClick('biography')}>
            Biografía
          </Link>
          <Link to="/contact" className="nav-button" onClick={() => handleItemClick('contact')}>
            Contacto
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
