import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImageHolder, Header } from "../../components";
import { MdDownload } from "react-icons/md";

import {
  ProfessionalHeadshot,
  FallbackProfessionalHeadshot,
  githubIcon,
  linkedinIcon,
  mailIcon,
  
} from "../../assets";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header title="About Me" />
      <Container fluid className={styles.container}>
        <Row className={styles.alignCenter}>
          {/* Left Description Column */}
          <Col md={6} className={styles.colCenter}>
            <div className={styles.textDesc}>
              <p className={styles.titleText}>Full Stack Developer</p>
              <h1 className={styles.greetingText}>Hello!👋 I'm</h1>
              <h1 className={styles.nameText}>Nishansha Negi</h1>
              <p>
              I am a passionate developer with expertise in creating user-friendly web applications and leveraging
               data analytics to drive insights and improve user experiences.
               
                If you're interested in collaborating or want to know more about my work, feel free to reach out!
              </p>
            </div>
            <a
              href="/resume.pdf"
              download
              className={styles.downloadButton}
              rel="noopener noreferrer"
            >
              Resume 
              <MdDownload />
            </a>
          </Col>

          {/* Image and Icons Side by Side */}
          <Col md={6} className={styles.imageCol}>
            <div className={styles.imageAndIconsWrapper}>
              
              
              <ImageHolder
                primarySource={ProfessionalHeadshot}
                secondarySource={FallbackProfessionalHeadshot}
                alt="Nishansha Negi IMG"
                className={styles.professionalHeadshot}
              />

              {/* Social Icons */}
              <div className={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/nishansha-negi-b224a3193/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
                </a>
                <a
                  href="https://github.com/nishanshanegi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" className={styles.icon} />
                </a>
                <a
                  href="mailto:nishanegi16112001@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={mailIcon} alt="Email" className={styles.icon} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
