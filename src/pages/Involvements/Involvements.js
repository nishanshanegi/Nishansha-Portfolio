import React, { useEffect } from "react";
import { Header } from "../../components";
import styles from "./Involvements.module.css";
import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  pythonIcon,
  djangoIcon,
  tailwindIcon,
  MySQLIcon,
  CppIcon,
  ExpressIcon,
  GitIcon,
  reduxIcon,
  mongodbIcon,
  SASIcon,
  
  PostmanIcon,
  NodeJSIcon,
} from "../../assets"; 

const Skills = () => {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Cleanup function to enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const skills = [
    { icon: CppIcon, name: "C++" },
    { icon: pythonIcon, name: "Python" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: mongodbIcon, name: "MongoDB" },
    { icon: htmlIcon, name: "HTML" },
    { icon: cssIcon, name: "CSS" },
    { icon: reactIcon, name: "React" },
    { icon: reduxIcon, name: "Redux" },
    { icon: NodeJSIcon, name: "NodeJS" },
    { icon: ExpressIcon, name: "Express" },
    { icon: tailwindIcon, name: "Tailwind CSS" },
    { icon: djangoIcon, name: "Django" },
 
    { icon: MySQLIcon, name: "MySQL" },
    { icon: GitIcon, name: "Git" },
    { icon: SASIcon, name: "SAS VA" },
   
    { icon: PostmanIcon, name: "Postman" },
  ];

  return (
    <div className={styles.blobWrapper}>
      <div className={styles.blobStyle}></div>
      <Header title="Skills" />
      <p className={styles.introText}>
      From languages and frameworks to libraries, tools, databases, and software—these are the core technologies I've worked with, explored, and am constantly growing in—fueling my projects and internships.
      </p>

      <div className={styles.skillGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillContainer}>
            <img
              src={skill.icon}
              alt={skill.name}
              className={`${styles.skillIcon} ${skill.name === "SAS VA" ? styles.sasIcon : ""}`} // Apply sasIcon styling conditionally
            />
            <span className={styles.tooltip}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
