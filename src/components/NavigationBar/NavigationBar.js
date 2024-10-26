import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{
        padding: "0.5em",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.5)",
        backgroundColor: "#dbedf7",  // Updated background color
      }}
    >
      <Container fluid>
        <Navbar.Brand style={{ color: "black", fontWeight: "500" }}>
          Nishansha Negi
        </Navbar.Brand>
        <Navbar.Toggle
          className="ms-auto"
          aria-controls="basic-navbar-nav"
          style={{ color: "black" }}  // Black text for the toggle button
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            activeKey={props.currentTab}
            onSelect={(key) => props.setCurrentTab(key)}
          >
            <Nav.Link
              eventKey="home"
              className={
                props.currentTab === "home"
                  ? styles.activeLink
                  : styles.inactiveLink
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              eventKey="projects"
              className={
                props.currentTab === "projects"
                  ? styles.activeLink
                  : styles.inactiveLink
              }
            >
              Projects
            </Nav.Link>

            <Nav.Link
              eventKey="involvements"
              className={
                props.currentTab === "involvements"
                  ? styles.activeLink
                  : styles.inactiveLink
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              eventKey="experience"
              className={
                props.currentTab === "experience"
                  ? styles.activeLink
                  : styles.inactiveLink
              }
            >
              Experience
            </Nav.Link>
            
           

            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
