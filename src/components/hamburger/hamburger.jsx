import React from 'react';
import './hamburger.css';

const Hamburger = ({ isOpen }) => {
  return (
    <div className={`hamburger ${isOpen ? 'open' : ''}`}>
      <span></span>
    </div>
  );
};

export default Hamburger;
