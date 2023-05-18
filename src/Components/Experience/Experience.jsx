import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experince.css";

const FEskills = [
  { name: "Html", experience: "Experienced" },
  { name: "CSS", experience: "Intermediate" },
  { name: "JavaScript", experience: "Experienced" },
  { name: "React", experience: "Experienced" },
  { name: "Bootstrap", experience: "Experienced" },
  { name: "Tailwind", experience: "Experienced" },
];

const BEskills = [
  { name: "PHP", experience: "Experienced" },
  { name: "MySql", experience: "Experienced" },
  { name: "Node JS", experience: "Experienced" },
  { name: "MongoDB", experience: "Experienced" },
  { name: "Python", experience: "Intermediate" },
];

function Experience() {
  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <article key={index} className="experience_details">
        <BsFillPatchCheckFill className="experience_details-icon" />
        <div>
          <h4>{skill.name}</h4>
          <small className="text-color-light">{skill.experience}</small>
        </div>
      </article>
    ));
  };

  return (
    <section id="Experience">
      <h5 data-aos="fade-right">What Skills I Have</h5>
      <h2 data-aos="fade-left">My Experience</h2>
      <div className="container experience_container">
        <div data-aos="fade-up" className="experience_frontend">
          <h3>FrontEnd Experience</h3>
          <div className="experience_content">
            {renderSkills(FEskills)}
          </div>
        </div>
        <div data-aos="fade-up" className="experience_backend">
          <h3>BackEnd Experience</h3>
          <div className="experience_content">
            {renderSkills(BEskills)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
