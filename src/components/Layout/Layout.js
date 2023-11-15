/* eslint-disable react/prop-types */
import React from "react";
import { Footer, Header } from "../../components";
import { getBadgedFullBG, getBadgedMobile } from "../../assets/images";
import "./Layout.scss";

// Pass the child props
const Layout = ({ children, className }) => {
  return (
    <div>
      <Header />
      <div className="requirements">
        {/* Attaching all file components */}

        <div className="section-one">
          <img
            className="bg-getStarted"
            src={getBadgedFullBG}
            alt="hero section desktop background"
          />
          <img
            className="bg-mobile-getStarted"
            src={getBadgedMobile}
            alt="hero section mobile background"
            // style={{ width: '100%' }}
          />
        </div>
        {/* <div className="section-two"> */}
        <div className={className}>{children} </div>
        {/* {children} */}
        {/* </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
