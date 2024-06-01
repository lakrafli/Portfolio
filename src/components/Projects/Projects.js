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
import SAE from "../../Assets/Projects/SAE.png";


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
    imgPath={leaf}
    isBlog={false}
    title=" The Magic Slate of Farida (Java)"
    description={
      <>
        The goal of this project was to develop a 
        <span style={{ color: '#E34F26' }}> Java</span> application for managing a virtual slate where various geometric shapes can be stored and displayed, incorporating concepts such as inheritance, method overriding, and polymorphism
      </>
    }
    ghLink="https://github.com/lakrafli/SAE_Java2.01"
  />  
</Col>



<Col md={4} className="project-card">
  <ProjectCard
    imgPath={editor}
    isBlog={false}
    title="Python Project: Implementation of the Brélaz Algorithm"
    description={
      <>
        Creating a Python Application Utilizing the Brélaz Algorithm for Graph Coloring, Illustrating Complex Concepts in Algorithmics. Using  
        <span style={{ color: '#E34F26' }}>  Python</span>,
        <span style={{ color: '#E34F26' }}>  Numpy</span>, 
        <span style={{ color: '#E34F26' }}>  Matplotlib</span>, 
        <span style={{ color: '#E34F26' }}>  Seaborn</span>,
        <span style={{ color: '#E34F26' }}>  Pandas</span>, 
        <span style={{ color: '#E34F26' }}>  SciPy</span>.


      </>
    }
    ghLink="https://github.com/lakrafli/SAE_BUT_1/tree/main/Semestre%202/Algortithe-de-limites-central-python--main"
    demoLink="https://github.com/lakrafli/SAE_BUT_1/blob/main/Semestre%202/Algortithe-de-limites-central-python--main/Project%20Version%20finale_1.ipynb"              
  />
</Col>



<Col md={4} className="project-card">
  <ProjectCard
    imgPath={SAE}
    isBlog={false}
    title="Tactic Vision's Dynamic Website "
    description={
      <>
        Experience the power of Perform Vision's new website designed to connect trainers with ease. Crafted with 
        <span style={{ color: '#E34F26' }}>PHP</span>, 
          <span style={{ color: '#E34F26' }}>JS</span>, and 
        <span style={{ color: '#E34F26' }}>HTML/CSS</span>, it's the ultimate platform for trainers to showcase their services effortlessly.
      </>
    }
    ghLink="https://drive.google.com/drive/folders/1Lfv4IfA93pprPU3EkkZwYp8ivE6qEhQb"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={suicide}
    isBlog={false}
    title="LaMSN Website Project"
    description={
      <>
        Explore the LaMSN website, a hub for digital science enthusiasts. Discover the latest news, interactive courses, and innovative projects. Crafted with HTML, CSS, JavaScript, React.js, and 
        <span style={{ color: '#E34F26' }}> SQL </span> for an immersive user experience.
      </>
    }
    ghLink="https://github.com/lakrafli/La-maison-des-Science-Num-rique"
  />
</Col>




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
    imgPath={emotion}
    isBlog={false}
    title="My Portfolio"
    description={
      <>
        Welcome to my portfolio, a showcase of my skills and projects where technology and creativity converge. This project was built using these technologies: <br/>
        <span style={{ color: '#E34F26' }}> React.js</span> ,  
        <span style={{ color: '#E34F26' }}> Node.js</span> , 
        <span style={{ color: '#E34F26' }}> Express.js</span> and 
        <span style={{ color: '#E34F26' }}>   Vercel</span>.
      </>
    }
  />
</Col>

         
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
