import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/variables.scss";
import mylogo from "../../assets/logos/chaoss-logo.svg";

const Footer = () => {
  return (
    <footer>
    <div className="main-div">

      <img src={mylogo} alt="chaoss logo" />
      <div className="minidiv">
        <div className="innerdiv">
          <h2>Community</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&aposs standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="innerdiv">
          <h2>Join us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&aposs standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
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
        </div>
      </div>
      <hr />
      <p>2022 Copyright &#169; CHAOSS community | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
