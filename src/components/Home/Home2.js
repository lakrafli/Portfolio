import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';

// Code JSX pour l'icône Gmail
<SiGmail />


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
  PERMETTEZ-MOI DE <span className="purple"> ME PRÉSENTER </span>
</h1>
<p className="home-about-body">
  Je suis tombé amoureux de la programmation et j'ai au moins appris quelque chose, je pense... 🤷‍♂️
  <br />
  <br />Je suis fluent dans les classiques comme
  <i>
    <b className="purple"> C++, Javascript, Java, Python, SQL, PHP, HTML, CSS.</b>
  </i>
  <br />
  <br />
  Mes domaines d'intérêt sont la création de nouvelles &nbsp;
  <i>
    <b className="purple">technologies web et produits</b> 
  </i>
  <br />
  <br />
  Chaque fois que possible, j'applique également ma passion pour développer des produits avec 
  <b className="purple">Node.js</b> et
  <i>
    <b className="purple">les bibliothèques et frameworks Javascript modernes</b>
  </i>
  &nbsp; comme
  <i>
    <b className="purple">React.js et Next.js</b>
  </i>
  <br />
  <br />
  <p>En plus de mes compétences techniques, j'ai développé une profonde compréhension du fonctionnement d'Internet et des concepts fondamentaux de l'informatique tels que la vision binaire et la pensée algorithmique. Cette solide base théorique me permet d'aborder et de comprendre les concepts complexes de l'informatique avec confiance.</p>
  <br />
  <br />
  Je suis également à la recherche d'une alternance pour ma troisième année.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <h1>TROUVEZ-MOI SUR</h1>
          <p>
               N'hésitez pas à <span className="purple">me contacter</span>
          </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/lakrafli"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              


              <li className="social-icons">
  <a
    href="lakraflii.ismail@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="icon-colour  home-social-icons"
    
  >
    <SiGmail />
  </a>
</li>
              <li className="social-icons">
                <a
                  href="https://x.com/ILakraflii"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ismail-lakrafli-535b5023a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iamnotsmain"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
