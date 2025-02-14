import React from "react";
import "./skills.css";
import tailwind from './tailwind.png';

const skills = [
  // Frontend Skills
  {
    name: "HTML",
    logo: "https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png",
  },
  {
    name: "CSS",
    logo: "https://www.mvps.net/docs/wp-content/uploads/2019/10/css.png",
  },
  {
    name: "ReactJS",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
 
  {
    name: "TailwindCSS",
    logo: tailwind ,
  },
 
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },

  // Backend Skills
  {
    name: "NodeJS",
    logo: "https://www.pixelbird.com.au/wp-content/uploads/2020/02/nodejs-image.png",
  },
  {
    name: "ExpressJS",
    logo: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
  },
  
  {
    name: "MySQL",
    logo: "https://dev.mysql.com/common/logos/logo-mysql-170x115.png",
  },
  {
    name: "C",
    logo: "https://www.pngkit.com/png/full/101-1010012_download-png.png",
  },
  {
    name: "Python",
    logo: "https://pnghq.com/wp-content/uploads/png-image-of-python-logo-no-text-included-7-300x300.png",
  },

  // Tools & Version Control
  {
    name: "Git",
    logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    name: "GitHub",
    logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
  },
  {
    name: "Tableau",
    logo: "https://iconape.com/wp-content/png_logo_vector/tableau-software.png",
  },
  {
    name: "Postman",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },

  // Machine Learning
  

  // Java
  {
    name: "Java",
    logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  },
];

function Skills() {
  return (
    <div id="skills" className="skills-container">
      <div className="m-1 p-0 flex pagename-div flex-row justify-center items-center text-center">
        <span className="font-bold  w-fit text-black p-2 px-5 text-2xl rounded-3xl">
          SKILLS
        </span>
      </div>
      <div className="skills-grid justify-center flex flex-wrap">
        {skills.map((skill, index) => (
          <div className="skill-item  shadow-md" key={index}>
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
