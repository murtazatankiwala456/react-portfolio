import React from "react";
import "../style.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Featured Projects and Content</h2>

      <ul>
        <li>
          <a
            target="_blank"
            href="https://main--my-ecommerce-frontend.netlify.app/"
            rel="noopener noreferrer"
          >
            <h3 className="project-title">Ecommerce Frontend</h3>
          </a>
        </li>

        <p className="project-description">
          Our e-commerce frontend, built with React, Redux Toolkit, and Tailwind
          CSS, delivers a streamlined shopping experience. It includes user
          authentication for easy login and signup, efficient product browsing
          with pagination, filtering, and sorting options. The shopping cart
          functionality allows quick addition of items with real-time updates,
          and the checkout process ensures a smooth order management and
          confirmation. The responsive design, powered by Tailwind CSS,
          guarantees a consistent and visually appealing experience across all
          devices.
        </p>
      </ul>
    </section>
  );
};

export default Projects;
