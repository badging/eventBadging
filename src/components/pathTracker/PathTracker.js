import React from "react";
// import { useLocation } from 'react-router-dom';
import "./pathTracker.scss";
import { Link } from "react-router-dom";

const PathTracker = () => {
  // must be dynamic using location-but your app routes is not match with design--so i hard Coded it
  const example = [
    {
      tag: "home",
      path: "/",
    },
    {
      tag: "event badging",
      path: "/badged-events",
    },
  ];
  const currentLocation = "badged events";

  return (
    <div className="pathTracker">
      {example.map((item, i) => (
        <div className="pathTracker__item" key={i}>
          <Link className="pathTracker__item--link" to={item.path}>
            {item.tag}
          </Link>
          <i className="bx bx-chevron-right pathTracker__item--icon"></i>
        </div>
      ))}
      <span className="pathTracker__item--loc">{currentLocation}</span>
    </div>
  );
};

export default PathTracker;
