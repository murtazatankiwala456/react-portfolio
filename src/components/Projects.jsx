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
              (Server-Side-Rendering)
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
        <li>
          <a
            target="_blank"
            href="https://task-manager-with-api.infinityfree.me/frontend/login/index.html"
            rel="noopener noreferrer"
          >
            <h3 className="project-title">
              PHP Task Manager With Registration And Login System (With PHP API)
            </h3>
          </a>
        </li>

        <p className="project-description">
          Our Task Manager Application (modernized version) now uses a PHP-based
          REST API with a JavaScript frontend, replacing traditional server-side
          rendering with dynamic API-driven updates. User registration, login
          are still handled securely via the PHP backend and MySQL database, but
          all data interactions now occur asynchronously through API calls —
          meaning the page no longer reloads with every action. This version
          demonstrates how to separate the frontend and backend layers for
          better scalability and responsiveness. The interface is built using
          standard HTML, CSS, and JavaScript to fetch and display task data
          dynamically. To visually distinguish this modern API-driven
          implementation from the earlier server-rendered PHP version, the UI
          theme has been updated with a green color scheme.
        </p>
      </ul>
    </section>
  );
};

export default Projects;
