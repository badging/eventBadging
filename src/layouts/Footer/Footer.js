import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/variables.scss";
import ReactReadMoreReadLess from "react-read-more-read-less";
import {slackLogo, linkedinLogo, twitterLogo, facebookLogo, DEIBadgingLogo, DEIMiniLogo} from "../../assets/images";


const Footer = () => {
  return (
    <footer>
      <div className="main-div">
        <img src={DEIBadgingLogo} alt="chaoss logo" className="logo" />
        <div className="minidiv">
          <div className="innerdiv">
            <h2>Community</h2>
            <ReactReadMoreReadLess
              charLimit={220}
              readMoreText={"Learn more "}
              readLessText={"Show less "}
              readMoreClassName="readMoreClassName"
            >
              CHAOSS is an open source project at the Linux Foundation focused on creating analytics and metrics to help define community health. Work in the CHAOSS Project community is largely organized around software and metrics. More
            </ReactReadMoreReadLess>
          </div>
          <div className="innerdiv">
            <h2>Join us</h2>
            <ReactReadMoreReadLess
              charLimit={220}
              readMoreText={"Learn more"}
              readLessText={"Show less"}
              readMoreClassName="readMoreClassName"
            >
              CHAOSS is an open source project at the Linux Foundation focused on creating analytics and metrics to help define community health. Work in the CHAOSS Project community is largely organized around software and metrics. More
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
            <NavLink className="links" to="/faq">
              FAQs
            </NavLink>
          </div>
          <div className="innerdiv">
            <h2>Social Media</h2>
            <div className="social-media">
              <a href="https://twitter.com">
                <img width="40px" src={twitterLogo} alt="slack logo" />
              </a>
              <a href="https://facebook.com">
                <img width="43px" src={facebookLogo} alt="slack logo" />
              </a>
              <a href="https://linkedin.com">
                <img width="40px" src={linkedinLogo} alt="slack logo" />
              </a>
              <a href="https://slack.com">
                <img width="40px" src={slackLogo} alt="slack logo" />
              </a>
            </div>
            <div className="dei1" ><img src={DEIMiniLogo} alt="Dei  logo" /> </div>
          </div>
        </div>
        <hr />
        <p>2023 Copyright CHAOSS Community | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

