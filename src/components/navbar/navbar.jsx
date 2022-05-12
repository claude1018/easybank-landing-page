import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/logo.svg';
import Hamburger from '../hamburger/hamburger';
import Menu from './menu';

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <nav className="easybank__nav" aria-label="easybank top nav">
      <div className="easybank__nav-links">
        <figure className="easybank__nav-links_logo">
          <img src={logo} alt="logo" />
        </figure>
        <div className="easybank__nav-links_container">
          <Menu />
        </div>
        <div className="easybank__nav-links_invite">
          <button className="gradient__ltr">Request Invite</button>
        </div>
        <div
          className="easybank__nav-menu_burger"
          onClick={() =>
            !burgerOpen ? setBurgerOpen(true) : setBurgerOpen(false)
          }
        >
          <Hamburger isOpen={burgerOpen} />
        </div>
        {burgerOpen ? (
          <div className="easybank__nav-mobile_menu scale-up-center">
            <Menu />
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
