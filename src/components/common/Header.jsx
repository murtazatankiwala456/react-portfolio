import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container">
      <div className="logo">
        <img src="/assets/Images/signature.png" alt="signature" height="50" />
      </div>
      <nav className={` main-nav ${menuOpen ? "open" : " "}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <a
          target="_blank"
          href="https://github.com/murtazatankiwala456"
          rel="noopener noreferrer"
          onClick={toggleMenu}
        >
          Github
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/murtaza-tankiwala-486782268/"
          rel="noopener noreferrer"
          onClick={toggleMenu}
        >
          LinkedIn
        </a>
      </nav>
      <nav
        className={`hamburger-icons ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </nav>
    </header>
  );
};

export default Header;
