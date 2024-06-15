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
        Projets  <strong className="purple">Récents </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={leaf}
    isBlog={false}
    title=" The Magic Slate of Farida (Java)"
    description={
      <>
        Le but de ce projet était de développer une application  
        <span style={{ color: '#E34F26' }}> Java</span> pour gérer une ardoise virtuelle où diverses formes géométriques peuvent être stockées et affichées, en incorporant des concepts tels que l'héritage, la redéfinition de méthode et le polymorphisme.
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
        Création d'une application Python utilisant l'algorithme de Brélaz pour la coloration de graphes, illustrant des concepts complexes en algorithmique. Utilisation de
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
            Découvrez le pouvoir du nouveau site web de Perform Vision conçu pour connecter les entraîneurs avec facilité. Conçu avec 
            <span style={{ color: '#E34F26' }}> PHP</span>, 
            <span style={{ color: '#E34F26' }}> JS</span> et 
            <span style={{ color: '#E34F26' }}> HTML/CSS</span>, c'est la plateforme ultime pour les entraîneurs pour présenter leurs services sans effort.
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
        Explorez le site web de LaMSN,  un hub pour les passionnés de sciences numériques. Découvrez les dernières nouvelles, des cours interactifs et des projets innovants. Conçu avec HTML, CSS, JavaScript, React.js et
      <span style={{ color: '#E34F26' }}> SQL</span> pour une expérience utilisateur immersive.
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
              description="Je suis fier de vous présenter mon site web que j'ai créé en utilisant HTML, CSS et JavaScript. C'est une plateforme unique qui combine à la fois la restauration rapide et l'apprentissage culinaire. Après trois semaines de codage intensif, voici le résultat final."
              ghLink="https://github.com/lakrafli/Site-restauration.github"
              demoLink="https://but-info.xyz/ismail-lakrafli/"
            />
          </Col>

         



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" wedding website"
              description="Ce site web de mariage a été conçu en utilisant CSS3 et HTML5, complété par un peu de développement JavaScript. Il marque ma première aventure dans le développement web."
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
            Bienvenue sur mon portfolio, une vitrine de mes compétences et projets où la technologie et la créativité se rencontrent. Ce projet a été réalisé en utilisant les technologies suivantes : <br/>
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
