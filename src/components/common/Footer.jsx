import React from "react";
import { Link } from "react-router-dom";
import "../../style.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a
          target="_blank"
          href="https://github.com/murtazatankiwala456"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/murtaza-tankiwala-486782268/"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
      <p className="credits">
        <small>built by</small>
        <img src="/assets/Images/signature.png" height="50" alt="signature" />
      </p>
    </footer>
  );
};

export default Footer;
