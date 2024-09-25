import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImageHolder } from "../../components";

import {
  ProfessionalHeadshot,
  FallbackProfessionalHeadshot,
  githubIcon,
  linkedinIcon,
  mailIcon,
  resumeIcon,
} from "../../assets";
import styles from "./Home.module.css";
import Typed from "typed.js"; 

const Home = () => {
  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: [
        "ReactJS Developer",
        "Full Stack Developer",
        "Python Developer",
        ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
    };
    const typed = new Typed(".role", options);

    // Cleanup function to destroy the Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container fluid className={styles.container}>
      <Row className={styles.alignCenter}>
        <Col md={9} className={styles.colCenter}>
         <p> Hi! I'm Nishansha Negi. I am a..</p>
          <div className={`${styles.headingOne} ${styles.nameText}`}>
            <span className="role"></span>
          </div>
          <br />
          <div className={`${styles.textWhite} ${styles.headingThree} ${styles.smallText}`}>
            <p>I hold a Master's in Computer Application and have worked on diverse projects,</p>
            <p>including web applications, data analytics solutions, and dynamic dashboards.</p>
            <p>I thrive in collaborative environments and enjoy tackling complex challenges.</p>
            <p> I am currently looking for opportunities in my field where I can apply my skills and knowledge.</p>
            <p>Explore my portfolio to see my work, and feel free to connect!</p>
          </div>
          <br/>
          <Row className={styles.socialIcons}>
            <Col>
              <a href="https://www.linkedin.com/in/nishansha-negi-b224a3193/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
              </a>
              <a href="https://github.com/nishanshanegi" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className={styles.icon} />
              </a>
              <a href="mailto:nishanegi16112001@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={mailIcon} alt="Email" className={styles.icon} />
              </a>
              <a href="./resume.pdf" target="_blank" rel="noopener noreferrer">
                <img src={resumeIcon} alt="Resume" className={styles.icon} />
              </a>
            </Col>
          </Row>
          <Row>
            {/* Additional content can go here */}
          </Row>
        </Col>
        <Col md={3} className={styles.imageCol}>
          <div className={styles.imageBackground}></div>
          <ImageHolder
            primarySource={ProfessionalHeadshot}
            secondarySource={FallbackProfessionalHeadshot}
            alt="Professional Headshot of Nishansha Negi"
            className={styles.professionalHeadshot}
          />
        </Col>
      </Row>
      <footer className={styles.footer}>
        <span>Made with </span>
        <img src={require('../../assets/heart.png')} alt="Love" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '5px' }} /> 
      </footer>
    </Container>
  );
};

export default Home;
