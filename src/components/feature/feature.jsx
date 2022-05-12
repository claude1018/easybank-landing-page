import React from 'react';
import './feature.css';

const Feature = ({ img, title, body }) => {
  return (
    <div className="easybank__feature">
      <img src={img} alt="feature icon" />
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Feature;
