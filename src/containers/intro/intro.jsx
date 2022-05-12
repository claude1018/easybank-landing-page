import React from 'react';
import './intro.css';
import mockups from '../../images/image-mockups.png';

const Intro = () => {
  return (
    <div className="easybank__intro" id="home">
      <div className="easybank__intro-image">
        <img src={mockups} alt="mockups" />
      </div>
      <div className="easybank__intro-content page__section-in">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button type="button" className="gradient__ltr">
          Request Invite
        </button>
      </div>
    </div>
  );
};

export default Intro;
