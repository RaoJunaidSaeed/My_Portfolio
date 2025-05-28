import React from "react";

const About = () => (
  <section id="about" className="about-section">
    <h2>About Me</h2>
    <div className="about-content">
      <div className="about-image">
        <img src="/images/myimage.jpg" alt="Profile" />
      </div>
      <div className="about-text">
        <p>
          I'm a MERN stack developer with a passion for building web applications.
          I love solving problems and creating user-friendly experiences.
        </p>
        <p>
          With a strong foundation in JavaScript, React, Node.js, and MongoDB,
          I specialize in creating full-stack web applications that are both
          functional and visually appealing.
        </p>
        <p>
          When I'm not coding, I enjoy exploring new technologies,
          contributing to open-source projects, and sharing my knowledge with
          others.
        </p>
      </div>
    </div>
  </section>
);

export default About;
