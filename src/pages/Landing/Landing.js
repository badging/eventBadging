import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="button-container">
        <button className="button">
          <Link to="/event-badging">Event Badging</Link>
        </button>
        <button className="button">Project Badging</button>
      </div>
    </div>
  );
};

export default Landing;
