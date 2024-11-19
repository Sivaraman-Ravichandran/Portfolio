import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sivaraman </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />
            I am pursuing Bachelor's Degree in Computer Science and Engineering
            specialization with Cyber Security.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A genius is the man who can do the average thing when everyone else
            around him is login his mind."{" "}
          </p>
          <footer className="blockquote-footer">Sherlock Holmes</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
