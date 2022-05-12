import React from 'react';
import './footer.css';
import logo from '../../images/white-logo.svg';
import SocialIcons from './socialIcons';

const Footer = () => {
  return (
    <div className="easybank__footer page__section-in">
      <div className="easybank__footer-group one">
        <img src={logo} alt="logo" />
        <div>
          <SocialIcons />
        </div>
      </div>
      <div className="easybank__footer-group two">
        <div className="link-two">
          <p>
            <a href="#about-us">About Us</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
          <p>
            <a href="#blog">Blog</a>
          </p>
        </div>
        <div className="link-two">
          <p>
            <a href="#careers">Careers</a>
          </p>
          <p>
            <a href="#support">Support</a>
          </p>
          <p>
            <a href="#privacy-policy">Privacy Policy</a>
          </p>
        </div>
      </div>
      <div className="easybank__footer-group three">
        <button type="button" className="gradient__ltr">
          Request Invite
        </button>
        <span>&copy; Easybank. All Rights Reserved</span>
      </div>
      <div class="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/claude1018">claude</a>.
      </div>
    </div>
  );
};

export default Footer;
