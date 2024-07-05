import React from "react";
import "../style.css";

const About = () => {
  return (
    <section className="about" id="about-section">
      <div className="hero-image" style={{ float: "right" }}>
        <img src="/assets/Images/avatar.png" alt="avatar" />
      </div>
      <h2>Job Title</h2>
      <p>Murtaza Tankiwala, MERN Stack Learner</p>
      <br />
      <h2>Mantra</h2>
      <p>Consistency is the key to success.</p>
      <br />
      <h2>Education</h2>
      <p>
        Murtaza is a graduate of the University of Indore, India, where he
        received a B.A in English Literature.
      </p>
      <br />
      <h2>Biography</h2>
      <p>
        I'm Murtaza, passionate about coding and creating innovative solutions.
        Currently, I'm on a journey to become a proficient full-stack developer
        with a focus on the MERN stack. I believe in continuous learning and
        strive to expand my knowledge in web development technologies. My goal
        is to contribute meaningfully to the tech community and build impactful
        projects that solve real-world problems.
      </p>
      <br />
    </section>
  );
};

export default About;
