import React from "react";
import "../style.css";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="text">
        <h1 className="author">Murtaza Tankiwala</h1>
        <p className="role">
          Murtaza Tankiwala is an aspiring developer and avid learner focused on
          mastering the MERN (MongoDB, Express.js, React.js, Node.js) stack.
          Murtaza is passionate about sharing his knowledge and experiences with
          others interested in web development.
        </p>
      </div>
      <div className="hero-image">
        <img src="/assets/Images/avatar.png" alt="avatar" />
      </div>
    </section>
  );
};

export default Hero;
