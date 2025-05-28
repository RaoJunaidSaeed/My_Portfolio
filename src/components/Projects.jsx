import React from "react";

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Projects</h2>
    <div className="projects-container">
      <div className="project-card">
        <img src="/images/natours.png" alt="Project 1" />
        <h3>Natours Website</h3>
        <p>A tour website for purchasing tours</p>
        <a href="https://natoursappbyrao.onrender.com" target="_blank" rel="noreferrer">Live Demo</a>
        <a href="https://github.com/RaoJunaidShahzad/weatherapp1" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="project-card">
        <img src="/images/restaurant.png" alt="Project 2" />
        <h3>Restaurant Website</h3>
        <p>A basic food website for viewing various types of eating products.</p>
        <button className="a-btn" disabled>Not Live Yet</button>
        <a href="https://github.com/RaoJunaidShahzad/Food-Restaurant" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  </section>
);

export default Projects;