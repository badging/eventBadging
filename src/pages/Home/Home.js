import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Header, Footer } from "../../components";

const Home = () => {
  return (
    <>
      <Header />
      <div className="homepage">
        <div className="button-container">
          <button className="button">
            <Link to="/event">Event Badging</Link>
          </button>
          <button className="button">
            <Link to="/project">Project Badging</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
