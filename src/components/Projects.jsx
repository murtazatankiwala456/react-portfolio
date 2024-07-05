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
            href="https://murtazatankiwala456.github.io/niceapp-bootstrap/"
            rel="noopener noreferrer"
          >
            <h3 className="project-title">Niceapp website</h3>
          </a>
        </li>
        <p className="project-description">
          NiceApp is an exciting web project crafted using Bootstrap, a
          versatile front-end framework. Our website aims to redefine user
          experiences by offering a visually stunning and user-friendly
          platform. Leveraging the power of Bootstrap, NiceApp boasts a
          responsive design, ensuring seamless navigation and compatibility
          across various devices. Whether you're accessing the site on a
          desktop, tablet, or smartphone, you can expect a polished and
          intuitive interface. NiceApp brings together the latest technologies
          and design principles to create an engaging environment for users to
          explore and enjoy.
        </p>
      </ul>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://murtazatankiwala456.github.io/recipe/"
            rel="noopener noreferrer"
          >
            <h3 className="project-title">Recipe Site</h3>
          </a>
        </li>
        <p className="project-description">
          Welcome to our recipe haven, where culinary delights await! Our recipe
          website is your go-to destination for all things gastronomy. Whether
          you're a seasoned chef or a novice in the kitchen, our extensive
          collection of recipes caters to all tastes and skill levels. From
          mouthwatering mains to delectable desserts, we've got you covered with
          step-by-step instructions, ingredient lists, and helpful tips to
          ensure culinary success. Explore our diverse range of cuisines, from
          international flavors to comforting classics, and discover new
          favorites to delight your taste buds. Join our thriving community of
          food enthusiasts, share your culinary creations, and embark on a
          flavorful journey with us.
        </p>
      </ul>
    </section>
  );
};

export default Projects;
