import React from "react";

const Resume = () => (
  <section id="resume" className="resume-section">
    <h2>Resume</h2>
    <div className="resume-content">
      <p>
        Download my resume to learn more about my skills, experience, and
        qualifications.
      </p>
      <div className="resume-buttons">
        <a href="/images/mycv.pdf" target="_blank" className="btn">
          <i className="fas fa-eye"></i> View Resume
        </a>
        <a href="/images/mycv.pdf" download="Junaid.pdf" className="btn">
          <i className="fas fa-download"></i> Download Resume
        </a>
      </div>
    </div>
  </section>
);

export default Resume;