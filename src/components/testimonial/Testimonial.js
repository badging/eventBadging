import React from "react";
import PropTypes from "prop-types";
import "./testimonial.css";

const Testimonial = ({ image, name, title, message }) => {
  return (
    <div className="testimonial">
      <div className="user">
        <img src={image} alt="id" />
        <div className="user-details">
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
      <div className="message">
        <p>{message}</p>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)])
    .isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Testimonial;
