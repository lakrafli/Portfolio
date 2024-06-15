import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  Bonjour à tous, je suis <span className="purple">Lakrafli Ismail</span>.
  <br />
  Je suis étudiant en deuxième année d'informatique à l'Université  Sorbonne Paris Nord, où je prépare mon diplôme de BUT INFO ("Bachelor Université de Technologies").
  <br />
  <br />

  En dehors de la programmation, voici quelques autres activités que j'aime faire !
</p>
<ul>
  <li className="about-activity">
    <ImPointRight /> Jouer à des jeux
  </li>

  <li className="about-activity">
    <ImPointRight /> Jouer au football
  </li>
</ul>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">ismail</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
