import React from "react";
import "../style.css";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="text">
        <h1 className="author">Murtaza Tankiwala</h1>
        <p className="role">
          Murtaza Tankiwala is a junior developer with a strong full-stack
          foundation spanning the MERN stack (MongoDB, Express.js, React.js,
          Node.js), .NET development, and growing proficiency in PHP. While
          focusing on .NET professionally, Murtaza is passionate about expanding
          his skills across various backend and frontend technologies. His
          knowledge includes working with both relational databases and NoSQL
          solutions. Murtaza enjoys sharing his diverse technical expertise and
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
