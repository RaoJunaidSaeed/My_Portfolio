import React from "react";

const educationData = [
  {
    iconClass: "fas fa-graduation-cap",
    title: "BS Software Engineering",
    institute: "COMSATS University, Sahiwal",
    duration: "2022 - Present",
    details: [
      "7th Semester (Current)",
      "CGPA: 3.69/4.00",
    ],
  },
  {
    iconClass: "fas fa-school",
    title: "FSc Pre-Engineering",
    institute: "Punjab College, Pir Mahal",
    duration: "2019 - 2021",
    details: [
      "Marks: 1043/1100",
    ],
  },
];

const EducationItem = ({ iconClass, title, institute, duration, details }) => (
  <div className="education-item">
    <i className={iconClass}></i>
    <h3>{title}</h3>
    <p><strong>{institute}</strong></p>
    {details.map((info, idx) => (
      <p key={idx}>{info}</p>
    ))}
    <p>{duration}</p>
  </div>
);

const Education = () => (
  <section id="education" className="education-section">
    <h2>Education</h2>
    <div className="education-content">
      {educationData.map((edu, idx) => (
        <EducationItem
          key={idx}
          iconClass={edu.iconClass}
          title={edu.title}
          institute={edu.institute}
          duration={edu.duration}
          details={edu.details}
        />
      ))}
    </div>
  </section>
);

export default Education;
