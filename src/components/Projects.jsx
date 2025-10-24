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
        <li>
          <a
            target="_blank"
            href="https://task-manager.infinityfree.me/"
            rel="noopener noreferrer"
          >
            <h3 className="project-title">
              PHP Task Manager With Registration And Login System
            </h3>
          </a>
        </li>

        <p className="project-description">
          Our Task Manager Application, built entirely with PHP and MySQL
          (accessed directly via standard PHP database functions), will serve as
          a foundational project to master core server-side scripting. It is
          responsible for secure user management, allowing user registration and
          login to manage personalized task lists. The data for users and tasks
          is managed directly in a MySQL database (which you'll interact with
          using phpMyAdmin for setup and verification). The application's core
          logic handles CRUD (Create, Read, Update, Delete) operations for
          tasks. This includes displaying a user's task list Users can create
          new tasks, edit existing task details. The design emphasizes using
          PHP's server-side rendering to generate the HTML, teaching you how PHP
          handles dynamic content, form processing, and direct database
          interaction without an intermediate API layer.
        </p>
      </ul>
    </section>
  );
};

export default Projects;
