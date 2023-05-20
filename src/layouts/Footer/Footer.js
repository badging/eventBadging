import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/variables.scss";
import ReactReadMoreReadLess from "react-read-more-read-less";
import {
  slackLogo,
  linkedinLogo,
  twitterLogo,
  facebookLogo,
  chaossBadgingLogo,
} from "../../assets/images";

const Footer = () => {
  return (
    <footer>
      <div className="main-div">
        <img src={chaossBadgingLogo} alt="chaoss logo" className="logo" />
        <div className="minidiv">
          <div className="innerdiv">
            <h2>Community</h2>
            <ReactReadMoreReadLess
              charLimit={320}
              readMoreText={"Learn more "}
              readMoreClassName="readMoreClassName"
            >
              CHAOSS is an open source project at the Linux Foundation focused
              on creating analytics and metrics to help define community health.
              Work in the CHAOSS Project community is largely organized around
              software and metrics. More
            </ReactReadMoreReadLess>
          </div>
          <div className="innerdiv">
            <h2>Join us</h2>
            <ReactReadMoreReadLess
              charLimit={320}
              readMoreText={"Learn more"}
              readMoreClassName="readMoreClassName"
            >
              CHAOSS is an open source project at the Linux Foundation focused
              on creating analytics and metrics to help define community health.
              Work in the CHAOSS Project community is largely organized around
              software and metrics. More
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
            <a
              className="links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://badging.allinopensource.org"
            >
              Project Badging
            </a>
            <a className="links" href="/#faqs">
              FAQs{" "}
            </a>
          </div>
          <div className="innerdiv">
            <h2>Social Media</h2>
            <div className="social-media">
              <a
                href="https://twitter.com/chaossproj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="40px" src={twitterLogo} alt="slack logo" />
              </a>
              <a href="https://facebook.com">
                <img width="43px" src={facebookLogo} alt="slack logo" />
              </a>
              <a
                href="https://www.linkedin.com/company/chaoss?original_referer="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="40px" src={linkedinLogo} alt="slack logo" />
              </a>

              <a
                href="https://join.slack.com/t/chaoss-workspace/shared_invite/zt-1fah5gu35-5oUQEPT32O2Zt~3MFVNMlw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="40px" src={slackLogo} alt="slack logo" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p>
          2023 Copyright{" "}
          <a
            href="https://chaoss.community"
            target="_blank"
            rel="noopener noreferrer"
          >
            CHAOSS Community
          </a>{" "}
          | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
