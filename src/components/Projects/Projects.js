import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="restaurant website"
              description="I'am proud to present to you my website that I created using HTML, CSS, and JavaScript. It is a unique platform that combines both fast food and culinary learning. After three weeks of intensive coding, here is the final result"
              ghLink="https://github.com/lakrafli/Site-restauration.github"
              demoLink="https://but-info.xyz/ismail-lakrafli/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" wedding website"
              description="This wedding website was crafted using CSS3 and HTML5, complemented by some JavaScript development. It marks my inaugural venture into web development "
              ghLink="https://github.com/lakrafli/Site-de-Mariage"
              demoLink="https://lakrafli.github.io/Site-de-Mariage/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Python Project: Implementation of the Brélaz Algorithm"
              description="Creating a Python Application Utilizing the Brélaz Algorithm for Graph Coloring, Illustrating Complex Concepts in Algorithmics. Using uing Python, Numpy, Matplotlib, Seaborn, Pandas, SciPy"
              ghLink="https://github.com/lakrafli/SAE_BUT_1/tree/main/Semestre%202/Algortithe-de-limites-central-python--main"
              demoLink="https://github.com/lakrafli/SAE_BUT_1/blob/main/Semestre%202/Algortithe-de-limites-central-python--main/Project%20Version%20finale_1.ipynb"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=" The Magic Slate of Farida (Java)"
              description="The goal of this project was to develop a Java application for managing a virtual slate where various geometric shapes can be stored and displayed, incorporating concepts such as inheritance, method overriding, and polymorphism"
              ghLink="https://github.com/lakrafli/SAE_Java2.01"

            />  
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="LaMSN Website Project "
              description="Explore the website project I've developed for LaMSN - the Maison des Sciences Numériques at Sorbonne Paris Nord University. This site provides an immersive experience to explore the latest news, access a variety of interactive training courses, and meet teams working on innovative projects. With an intuitive design and user-friendly interface, this site aims to offer users an engaging dive into the world of digital science. Explore the future of technology with LaMSN"
              demoLink="https://lamsn.fr"
              ghLink="https://github.com/lakrafli/La-maison-des-Science-Num-rique"

            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="My Portfolio"
              description="Welcome to my portfolio, a showcase of my skills and projects where technology and creativity converge.This project was built using these technologies.

              React.js
              Node.js
              Express.js
              CSS3
              VsCode
              Vercel"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
