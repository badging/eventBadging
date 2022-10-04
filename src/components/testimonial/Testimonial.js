import React from "react";
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

export default Testimonial;
