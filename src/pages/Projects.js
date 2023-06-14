import React from "react";
import Section1 from "../assets/Section 1.png";
import AICTE1 from "../assets/AICTE.png";
import Ecommerce1 from "../assets/Ecommerce1.png";
// import Ecommerce2 from "../assets/Ecommerce1.png";

import Algo1 from "../assets/algo1.png";
import Algo2 from "../assets/algo2.png";
import Algo3 from "../assets/algo3.png";

import ArrowLeft from "../assets/leftarrow.png";
import ArrowRight from "../assets/rightarrow.png";
import Fade from "react-reveal/Fade";

function Projects() {
  function slideLeft(e) {
    let list = e.target.parentElement.nextElementSibling.children;
    let index = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].classList.contains("active")) {
        index = i;
      }
    }
    list[index].classList.remove("active");
    if (index === 0) {
      index = list.length;
    }
    list[index - 1].classList.add("active");

    let imgs =
      e.target.parentElement.parentElement.previousElementSibling.children[0]
        .children;
    index = 0;
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].classList.contains("active")) {
        index = i;
      }
    }
    imgs[index].classList.remove("active");
    if (index === 0) {
      index = imgs.length;
    }
    imgs[index - 1].classList.add("active");
  }

  function slideRight(e) {
    let list = e.target.parentElement.previousElementSibling.children;
    let index = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].classList.contains("active")) {
        index = i;
        break;
      }
    }
    list[index].classList.remove("active");
    if (index === list.length - 1) {
      index = -1;
    }
    list[index + 1].classList.add("active");

    let imgs =
      e.target.parentElement.parentElement.previousElementSibling.children[0]
        .children;
    index = 0;
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].classList.contains("active")) {
        index = i;
        break;
      }
    }
    imgs[index].classList.remove("active");
    if (index === imgs.length - 1) {
      index = -1;
    }
    imgs[index + 1].classList.add("active");
  }

  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <Fade left>
            <h2 className="section-title">Projects</h2>
          </Fade>
          <div className="personal-projects">
            <Fade left>
              <div className="title">
                <h3>Personal Projects </h3>
              </div>
            </Fade>
            <div className="project">
              <Fade left>
                <div className="project-details">
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">E-Commerce</h3>
                    <div>
                      <div className="tech-stack">
                        <div className="tech">React</div>
                        <div className="tech">Express</div>
                        <div className="tech">NodeJS</div>
                        <div className="tech">MongoDB</div>
                      </div>
                      <p>Description</p>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href="https://shreevinayakarts-a2c33.web.app/"
                    >
                      See Live
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href="https://github.com/Swastik-Patil/ShreeVinayakArts"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="wrapper">
                  <div className="project-img-container">
                    <div className=" project-wrapper__image">
                      <div className="slideshow">
                        <img
                          src={Ecommerce1}
                          className="active"
                          alt="Ecommerce"
                        />
                        {/* <img
                          src={Ecommerce1}
                          className="active"
                          alt="Ecommerce"
                        /> */}
                      </div>
                    </div>
                    <div className="slideBtn">
                      <div className="leftarrow">
                        <img
                          src={ArrowLeft}
                          alt="arrow"
                          onClick={(e) => slideLeft(e)}
                        />
                      </div>
                      <ul>
                        <li className="active">|</li>
                        <li className="">|</li>
                      </ul>
                      <div className="leftarrow">
                        <img
                          src={ArrowRight}
                          alt="arrow"
                          onClick={(e) => slideRight(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="project">
              <Fade left>
                <div className="project-details">
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">
                      Algorithm Visualizer
                    </h3>
                    <div>
                      <div className="tech-stack">
                        <div className="tech">JavaScript</div>
                        <div className="tech">HTML</div>
                        <div className="tech">CSS</div>
                      </div>
                      <p>
                        It is a way of learning Algorithms through visualization
                        which help the students and teachers also. Algorithm
                        Visualizer allows the human to visualize an algorithm
                        and extend human intellect.
                        <br />
                        Threre are four algorithms : Depth First Search (DFS),
                        Restoring division, Non-Restoring division, and Booths
                        multiplication.
                      </p>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href="https://algovisualizr.web.app/"
                    >
                      See Live
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href="https://github.com/Swastik-Patil/AlgoVisualizr"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="wrapper">
                  <div className="project-img-container">
                    <div className="project-wrapper__image">
                      <div className="slideshow">
                        <img src={Algo1} className="active" alt="test" />
                        <img src={Algo2} className="" alt="test" />
                        <img src={Algo3} className="" alt="test" />
                      </div>
                    </div>
                    <div className="slideBtn">
                      <div className="leftarrow">
                        <img
                          src={ArrowLeft}
                          alt="arrow"
                          onClick={(e) => slideLeft(e)}
                        />
                      </div>
                      <ul>
                        <li className="active">|</li>
                        <li>|</li>
                        <li>|</li>
                      </ul>
                      <div className="leftarrow">
                        <img
                          src={ArrowRight}
                          alt="arrow"
                          onClick={(e) => slideRight(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="group-projects">
            <Fade left>
              <div className="title">
                <h3>Group Projects </h3>
              </div>
            </Fade>
            <div className="project">
              <Fade left>
                <div className="project-details">
                  <div className=" project-wrapper__text">
                    <h3 className="project-wrapper__text-title">
                      Goverment Polytecnic Pen, Portal
                    </h3>
                    <div>
                      <div className="tech-stack">
                        <div className="tech">React</div>
                        <div className="tech">Firebase</div>
                        <div className="tech">Bootstrap</div>
                      </div>
                      <p className="bold">
                        Collaborators:{" "}
                        <span className="italics">
                          Yash Dabhade, Swapnil Chavan
                        </span>
                      </p>
                      <p>
                        It is an online portal for students where they can fill
                        out a form online for getting a bonafide Certificate
                        from their college, where students don't need to go to
                        college for collecting their certificates in person,
                        Certificates will be generated online.
                      </p>
                      <p className="italics note">
                        Note: The app has an authentication so use the username:
                        test@gmail.com and password: test123 to explore the app
                        with cached dummy data. Also, the source code is on one
                        of our team member's GitHub.
                        <br /> i.e.,
                        https://github.com/Yash-Dabhade/gppenPortal.
                      </p>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href="https://gov-poly-pen-portal.web.app/"
                    >
                      See Live
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href="https://github.com/Yash-Dabhade/gppenPortal"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="wrapper">
                  <div className="project-img-container">
                    <div className=" project-wrapper__image">
                      <div className="slideshow">
                        <img src={Section1} className="active" alt="section1" />
                      </div>
                    </div>
                    <div className="slideBtn">
                      <div className="leftarrow">
                        <img
                          src={ArrowLeft}
                          alt="arrow"
                          onClick={(e) => slideLeft(e)}
                        />
                      </div>
                      <ul>
                        <li className="active">|</li>
                        <li>|</li>
                        <li>|</li>
                      </ul>
                      <div className="leftarrow">
                        <img
                          src={ArrowRight}
                          alt="arrow"
                          onClick={(e) => slideRight(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="project">
              <Fade left>
                <div className="project-details">
                  <div className=" project-wrapper__text">
                    <h3 className="project-wrapper__text-title">
                      AICTE Portal for Curriculum - SIH22
                    </h3>
                    <div>
                      <div className="tech-stack">
                        <div className="tech">React</div>
                        <div className="tech">Firebase</div>
                        <div className="tech">Tailwind</div>
                      </div>
                      <p className="bold">
                        Collaborators:
                        <span className="italics">
                          Yash, Swapnil, Sakshi, Arya, Harshal
                        </span>
                      </p>
                      <p>
                        <li>
                          This project fills the gap between the technologies
                          used in the market and the technologies/subjects
                          taught in the college.
                        </li>
                        <li>
                          It has an intelligent algorithm that is capable of
                          finding the best fit for a particular subject of a
                          given course in a curriculum considering the new
                          subject/technology prerequisites.
                        </li>
                      </p>
                      <p className="italics note">
                        Note: The app has an authentication, Use the username:
                        admin@gmail.com and password: admin123 to explore the
                        app with cached dummy data. Also, the source code is on
                        one of our team member's GitHub. <br />
                        i.e.,
                        https://github.com/Yash-Dabhade/AICTE_PORTAL_SIH22.
                      </p>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href="https://aicte-portal.web.app/"
                    >
                      See Live
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href="https://github.com/Yash-Dabhade/AICTE_PORTAL_SIH22"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="wrapper">
                  <div className="project-img-container">
                    <div className=" project-wrapper__image">
                      <div className="slideshow">
                        <img src={AICTE1} className="active" alt="section1" />
                      </div>
                    </div>
                    <div className="slideBtn">
                      <div className="leftarrow">
                        <img
                          src={ArrowLeft}
                          alt="arrow"
                          onClick={(e) => slideLeft(e)}
                        />
                      </div>
                      <ul>
                        <li className="active">|</li>
                        <li>|</li>
                        <li>|</li>
                      </ul>
                      <div className="leftarrow">
                        <img
                          src={ArrowRight}
                          alt="arrow"
                          onClick={(e) => slideRight(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
