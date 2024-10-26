import React from "react";
import "../style.css";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="text">
        <h1 className="author">Murtaza Tankiwala</h1>
        <p className="role">
          Murtaza Tankiwala is a junior .NET developer at Badshah Software
          Solutions with a strong foundation in the MERN stack (MongoDB,
          Express.js, React.js, Node.js). While focusing on .NET development
          professionally, Murtaza is passionate about expanding his skills
          across full-stack technologies and enjoys sharing knowledge and
          experiences with others interested in web development.
        </p>
      </div>
      <div className="hero-image">
        <img src="/assets/Images/avatar.png" alt="avatar" />
      </div>
    </section>
  );
};

export default Hero;
