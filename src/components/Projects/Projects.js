import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="FindDoc"
              description="A platform connects patients with top-rated physicians, allowing them to easily search, compare, and book appointments. It leverages advanced algorithms and user data to provide personalized recommendations and streamline the healthcare experience. Tech Stack: React, Springboot, and MongoDB."
              ghLink="https://github.com/Sivaraman-Ravichandran/College-Project-HMS"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Shield Android"
              description="A mobile application that enchance the women safety by navigating them into the safest location with police controlling in the dashboard. Tech Stack : React Native, flask, MongoDB."
              ghLink="https://github.com/Sivaraman-Ravichandran/shield-mobile-application"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Shield Police Dashboard"
              description="A Web Based application that monitors the activities from the mobile application shield to enhance women (safety) which is mentioned last. And also this application monitors the public CCTV for threats and risk with real time integration like gender classification, Gesture Recognition.Tech Stack: React, Flask, MediaPipe(gesture recognition), Mapbox(map integration), MongoDB."
              ghLink="https://github.com/Sivaraman-Ravichandran/shield-police-dashboard.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Bharath College"
              description="Portfolio-site for bharath medical college. build this web application for the client during internship."
              ghLink="https://github.com/Sivaraman-Ravichandran/Bharath-College-Project"
              demoLink="https://sivaraman-ravichandran.github.io/Bharath-College-Project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Simon Game"
              description="Try this and immerse yourself in the nostalgic delight of the Simon Game, where memory meets melody. Follow the mesmerizing sequence of vibrant lights and tones, testing your recall skills with each level. Tech Stack: HTML, CSS, JS, JQuery"
              ghLink="https://github.com/Sivaraman-Ravichandran/Simon-Game"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
