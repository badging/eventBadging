import "./Landing.scss";
import { Link } from "react-router-dom";
import { logo, boy, star, github, linkedin, twitter, mail } from "./images";

const Landing = () => {
  return (
    <div className="landing">
      <a href="https://chaoss.community">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <div className="carousel">
        <div className="carousel-header">
          <p>
            <img src={boy} alt="Boy" />
            Maintainer
          </p>
          <img src={star} alt="star" />
        </div>
        <div className="description">
          <p>
            <span className="DEI">DEI </span>
            <span className="initiative">Badging initiative</span>
            <span className="DEI">.</span>
          </p>
          <p className="explanation">
            The DEI Badging initiative is a CHAOSS project that awards badges to
            open-source projects and events. These badges are used to showcase
            commitment to improving and supporting diversity, equity, and
            inclusion.
          </p>
        </div>
      </div>
      <div className="badging-buttons">
        <button type="button" id="event-button">
          <Link to="/home">Event Badging</Link>
        </button>
        <button type="button" id="project-button">
          <a href="https://badging.allinopensource.org">Project Badging</a>
        </button>
      </div>
      <div className="landing-footer">
        <div className="footer-content">
          <div className="social-buttons">
            <a href="https://github.com/badging">
              <img src={github} alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/company/chaoss/">
              <img src={linkedin} alt="linkedin logo" />
            </a>
            <a href="https://twitter.com/chaossproj">
              <img src={twitter} alt="twitter logo" />
            </a>
            <a href="https://chaoss.discourse.group/categories">
              <img src={mail} alt="mail logo" />
            </a>
          </div>
          <p>
            Copyright &copy; <a href="https://chaoss.community">CHAOSS</a>. All
            rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
