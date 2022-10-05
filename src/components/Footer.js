import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/variables.scss";
import Mylogo from "../../assets/logos/chaoss-white.png";
import ReactReadMoreReadLess from "react-read-more-read-less";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
// import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="main-div">
        <img src={Mylogo} alt="chaoss logo" className="logo" />
        <div className="minidiv">
          <div className="innerdiv">
            <h2>Community</h2>
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={"Learn more "}
              readLessText={"Show less "}
              readMoreClassName="readMoreClassName"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&aposs standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </ReactReadMoreReadLess>
          </div>
          <div className="innerdiv">
            <h2>Join us</h2>
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={"Learn more"}
              readLessText={"Show less"}
              readMoreClassName="readMoreClassName"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&aposs standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </ReactReadMoreReadLess>
          </div>
          <div className="innerdiv">
            <h2>Quick Links</h2>
            <NavLink className="links" to="/about">
              About
            </NavLink>
            <NavLink className="links" to="/event">
              Event badging
            </NavLink>
            <NavLink className="links" to="/contact">
              Contact us
            </NavLink>
            <NavLink className="links" to="/project">
              Project badging
            </NavLink>
            <NavLink className="links" to="/faq">
              FAQs
            </NavLink>
            <NavLink className="links" to="/site">
              Site map
            </NavLink>
          </div>
          <div className="innerdiv">
            <h2>Social Media</h2>
            <a href="https://twitter.com">
              <FontAwesomeIcon
                icon={faTwitter}
                className="social-media-black"
              />
            </a>
            <a href="https://facebook.com">
              <FontAwesomeIcon
                icon={faFacebook}
                className="social-media-black"
              />
            </a>
            <a href="https://linkedin.com">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="social-media-black"
              />
            </a>
            <a href="https://slack.com">
              <FontAwesomeIcon icon={faSlack} className="social-media-black" />
            </a>
          </div>
        </div>
        <hr />
        <p>2022 Copyright &#169; CHAOSS community | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
