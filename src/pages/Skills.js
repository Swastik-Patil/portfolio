import React from "react";
import "../App.css";
import JavaScriptLogo from "../assets/JavaScript.png";
import ReactLogo from "../assets/React.png";
import HTML5Logo from "../assets/HTML5.png";
import CSS3Logo from "../assets/CSS3.png";
import GitLogo from "../assets/GitLogo.png";
import ElectronLogo from "../assets/Electron.png";
import FirebaseLogo from "../assets/firebase.png";
import NodeLogo from "../assets/node.png";
import ExpressLogo from "../assets/express.png";
import MongoDBLogo from "../assets/MongoDB.jpg";
import RestfulAPI from "../assets/restfulapi.png";
import Fade from "react-reveal/Fade";
function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Fade left>
          <h2 className="section-title">Skills</h2>
        </Fade>
        <div className="skill_container">
          <Fade left>
            <div className="skills-wrapper__info">
              <h3 className="skills-wrapper__info-text__center">Front End</h3>
              <div className="skill-list">
                <div className="ind-skill">
                  <div className="skill-img-container">
                    <img src={JavaScriptLogo} alt="javascript logo" />
                    JavaScript
                  </div>
                </div>
                <div className="ind-skill">
                  <div className="skill-img-container">
                    <img src={ReactLogo} alt="ReactJS logo" />
                    ReactJS
                  </div>
                </div>
                <div className="ind-skill">
                  <div className="skill-img-container">
                    <img src={HTML5Logo} alt="HTML5 logo" />
                    HTML5
                  </div>
                </div>
                <div className="ind-skill">
                  <div className="skill-img-container">
                    <img src={CSS3Logo} alt="CSS3 logo" />
                    CSS3
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-wrapper__info">
              <h3 className="skills-wrapper__info-text__center">Tools</h3>
              <div className="skill-list">
                <div className="ind-skill">
                  <div className="skill-img-container">
                    <img src={GitLogo} alt="Git logo" />
                    Git
                  </div>
                </div>
                <div className="ind-skill">
                  <div className="skill-img-container">
                    <img src={ElectronLogo} alt="Electron logo" />
                    Electron
                  </div>
                </div>
                <div className="ind-skill">
                  <div className="skill-img-container">
                    <img src={FirebaseLogo} alt="firebase logo" />
                    Firebase
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-wrapper__info">
              <h3 className="skills-wrapper__info-text__center">Back End</h3>
              <div className="skill-list">
                <div className="ind-skill">
                  <div className="skill-img-container">
                    <img src={NodeLogo} alt="Node logo" />
                    NodeJS
                  </div>
                </div>
                <div className="ind-skill">
                  <div className="skill-img-container">
                    <img src={ExpressLogo} alt="Express logo" />
                    Express
                  </div>
                </div>
                <div className="ind-skill">
                  <div className="skill-img-container">
                    <img src={MongoDBLogo} alt="MongoDB logo" />
                    MongoDB
                  </div>
                </div>
                <div className="ind-skill">
                  <div className="skill-img-container">
                    <img src={RestfulAPI} alt="restful logo" />
                    RestfulAPI
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Skills;
