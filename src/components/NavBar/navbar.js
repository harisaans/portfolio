import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { to: 'intro', label: 'Home', offset: -80 },
  { to: 'skills', label: 'Skills', offset: -50 },
  { to: 'experience', label: 'Experience', offset: -50 },
  { to: 'works', label: 'Projects', offset: -50 },
  { to: 'certifications', label: 'Certifications', offset: -50 },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <Link to="intro" spy={true} smooth={true} offset={-80} duration={500} className="logo mono">
        HA<span className="logoDot">.</span>
      </Link>
      <div className="desktopMenu">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            activeClass="active"
            to={link.to}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className="desktopMenuListItem"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="desktopMenuBtn"
      >
        Contact
      </Link>
      <button className="mobMenuBtn" onClick={() => setShowMenu(!showMenu)} aria-label="Toggle menu">
        {showMenu ? <HiX size={26} /> : <HiMenu size={26} />}
      </button>
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            activeClass="active"
            to={link.to}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
