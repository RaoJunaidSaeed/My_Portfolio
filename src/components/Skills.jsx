import React, { useEffect, useRef } from "react";

const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 85 },
  { name: "JavaScript", percent: 80 },
  { name: "React", percent: 75 },
  { name: "Node.js", percent: 70 },
  { name: "MongoDB", percent: 65 },
];

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach((el, index) => {
      if (el) {
        el.style.setProperty("--width", `${skills[index].percent}%`);
      }
    });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="skill"
            data-percent={skill.percent}
            ref={(el) => (skillRefs.current[idx] = el)}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
