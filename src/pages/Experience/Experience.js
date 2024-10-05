import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../components"; 
import styles from "./Experience.module.css";
import { KV3, UR, PU, VR, NU } from "../../assets";

const Experience = () => {
  

  return (
    <React.Fragment>
      <Header title="Experience" />
      <Container fluid className={styles.container}>
        <Row className={styles.row}>
          {/* Left Side - Education */}
          <Col md={6} className={styles.section}>
            <div className={styles.card}>
              <h2 className={styles.title}>Education</h2>
              <div className={styles.item}>
                <img src={PU} alt="Poornima University" className={styles.icon} />
                <div>
                <p className={styles.heading}>Masters in Computer Applications</p>
                  <p>Poornima University</p>
                  <p>2022 - 2024</p>
                </div>
              </div>
              <div className={styles.item}>
                <img src={UR} alt="University of Rajasthan" className={styles.icon} />
                <div>
                <p className={styles.heading}>Bachelors in Computer Applications</p>
                  <p>University of Rajasthan</p>
                  <p>2019 - 2022</p>
                </div>
              </div>
              <div className={styles.item}>
                <img src={KV3} alt="Kendriya Vidyalaya No. 3 Jaipur" className={styles.icon} />
                <div>
                  <p>Kendriya Vidyalaya No. 3 Jaipur</p>
                  <p>2019</p>

                </div>
              </div>
            </div>
          </Col>

          {/* Right Side - Internships */}
          <Col md={6} className={styles.section}>
            <div className={styles.card}>


              <h2 className={styles.title}>Internships</h2>
              <div className={styles.item}>
                <img src={NU} alt="Nupeak IT Solutions" className={styles.icon} />
                <div>
                  
                <p className={styles.heading}>SAS Developer Intern</p>
                  <p>Nupeak IT Solutions Pvt Ltd</p>
                   <p>Feb 2024 - Aug 2024</p> <br/>
                   <p className={styles.skill}>Skill: SAS Base, SAS VA, Python, JavaScript</p>
                </div>
              </div>
              <div className={styles.item}>
                <img src={VR} alt="Veersa Technologies" className={styles.icon} />
                <div>
                <p className={styles.heading}>Python Developer Intern</p>
                  <p>Veersa Technologies</p>
                  
                  <p>May 2023 - July 2023</p>
                  <br/>
                  <p className={styles.skill}>Skill: Python, JavaScript</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Experience;
