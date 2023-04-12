import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/variables.scss";
import logo from "../assets/logos/chaoss-white.png";
import Deilogo from "../assets/logos/dei-logo.png";
import ReactReadMoreReadLess from "react-read-more-read-less";
import SearchIcon from "@mui/icons-material/Search";
import slack2 from "../assets/social/slack.png";
import facebook from "../assets/social/facebook.png";
import twitter from "../assets/social/twitter.png";
import linkedin from "../assets/social/linkedin.png";

const Footer = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <footer>
      <div className="main-div">
        <div className="top">
          <img src={logo} alt="chaoss logo" className="logo1" />
          <img src={Deilogo} alt="Dei  logo" className="logo2" />
        </div>
        <div className="search">
          <SearchIcon fontSize="large" />
          <input
            placeholder="What are you looking for"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
        <div className="minidiv">
          <div className="innerdiv">
            <h2>Community</h2>
            <ReactReadMoreReadLess
              charLimit={220}
              readMoreText={"Learn more "}
              readLessText={"Show less "}
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
              charLimit={220}
              readMoreText={"Learn more"}
              readLessText={"Show less"}
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
            <div className="social-media">
              <a href="https://twitter.com">
                <img width="40px" src={twitter} alt="slack logo" />
              </a>
              <a href="https://facebook.com">
                <img width="43px" src={facebook} alt="slack logo" />
              </a>
              <a href="https://linkedin.com">
                <img width="40px" src={linkedin} alt="slack logo" />
              </a>
              <a href="https://slack.com">
                <img width="40px" src={slack2} alt="slack logo" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p>2023 Copyright CHAOSS Community | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
