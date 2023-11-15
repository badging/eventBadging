import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/global.scss";
import "./jumbotron.scss";
const Jumbotron = ({
  title,
  description,
  img,
  subheading = null,
  subtitle,
  children,
}) => {
  return (
    <div className="jumbotron">
      <div className="jumbo-main">
        {img} <h1>{title}</h1>
        <p className="sub">{subtitle}</p>
      </div>

      <div>
        {subheading && <h3>{subheading}</h3>}
        <p>{description}</p>
      </div>
      {/* add any other children */}
      {children}
    </div>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  children: PropTypes.node,
  img: PropTypes.any,
  subtitle: PropTypes.string,
};

export default Jumbotron;
