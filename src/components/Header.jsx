// Header.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import logo from '../assets/logo.png'; // Import the logo image

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsHeaderVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`main-header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
      <div className="logo-container">
        <img src={logo} alt="YourLogo" className="logo" />
        <span className="logo-text">Ecowiser</span>
      </div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/SignIn">SignIn</Link>
        <Link to="/SignUp">SignUp</Link>
        <div className="center-menu">
          <Link to="/dinner">Dinner</Link>
          <Link to="/dessert">Dessert</Link>
          <Link to="/drinks-cocktails">Drinks | Cocktails</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
