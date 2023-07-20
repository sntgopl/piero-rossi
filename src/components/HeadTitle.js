import React from 'react';
import firmap from '../assets/images/firmap.jpeg';
import { Link } from 'react-router-dom';

const HeadTitle = ({ handlePageChange }) => {
  
  const handleItemClick = (page) => {
    handlePageChange(page);
  };

  return (
    <div className="head-title">
      <Link to="/" onClick={() => handleItemClick('slider')}>
        <img
          className="head-title-image"
          src={firmap}
          alt="Firma"
        />
      </Link>
    </div>
  );
};

export default HeadTitle;
