import React, { useState } from "react";
import { Header, Footer } from "../components";
import "../../assets/styles/home.css";
import heroPic from "../../assets/images/Rectangle6.png";
import DI from "../../assets/images/Group 13.png";
import osDI from "../../assets/images/Frame 68.png";
import gold from "../../assets/images/Frame 46.png";
import silver from "../../assets/images/Frame 49.png";
import passing from "../../assets/images/Frame 50.png";
import pending from "../../assets/images/Frame 51.png";
import eventBadging from "../../assets/images/Frame 40.png";
import man from "../../assets/images/man.png";
import { testimonialData } from "../components/testimonial/testimonialData";
import { Link } from "react-router-dom";
import { FAQData } from "../components/faq/FAQData";
import FaqItem from "../components/faq/FaqItem";
import Testimonial from "../components/testimonial/Testimonial";

const Home = () => {
  return (
    <div className="home">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${heroPic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-section-text">
          <div className="hero-main">
            <img src={osDI} />
            <div className="hero-main-text">
              <p>
                The primary motivation to apply for a CHAOSS D&I event or
                project Badge, is for the badge itself! The awarded event or
                project can show the open source community that they foster
                healthy D&I practices with a CHAOSS badge.{" "}
              </p>
            </div>
            <div className="hero-main-buttons">
              <button className="button badged-event" type="button">
                <Link className="link" to={"#"}>
                  Badged Events
                </Link>
              </button>

              <button className="button apply" type="button">
                <Link className="link" to={"#"}>
                  Apply for badging
                </Link>
              </button>
            </div>
          </div>
          <div className="hero-logo">
            <img src={DI} alt="rect" />
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="badging-level">
          <h2>Badging Levels</h2>
          <p>
            The primary motivation to apply for a CHAOSS D&I event or project
            Badge, is for the badge itself! The awarded event or project can
            show the open source community that they foster healthy D&I
            practices with a CHAOSS badge.{" "}
          </p>
        </div>
        <div className="badging-image-container">
          <img src={gold} alt="gold" />
          <img src={silver} alt="gold" />
          <img src={passing} alt="gold" />
          <img src={pending} alt="gold" />
        </div>
      </div>
      <div className="section-5 ">
        <div className="event-badging">
          <h2>Event Badging</h2>
          <p>
            The goal of the Diversity & Inclusion Badging Program is to
            encourage events to obtain D&I badges for reasons of leadership,
            self-reflection, and self-improvement on issues critical to building
            the Internet as a social good.
          </p>
        </div>

        <div className="event-badging-image">
          <img src={eventBadging} alt="Event badging" />
        </div>
      </div>
      <div className="section-6">
        <div className="testimonial-container">
          <div className="title">
            <h2>-Testimonial-</h2>
          </div>
          <div className="testimonials">
            {testimonialData.map((item, id) => {
              let { image, name, title, message } = item;

              return (
                <Testimonial
                  image={image}
                  name={name}
                  title={title}
                  message={message}
                />
              );
            })}
          </div>
        </div>

        <div className="faq-container">
          <div className="title">
            <h2>FAQ</h2>
          </div>

          <div className="faqs">
            {FAQData.map(({ question, answer }, id) => {
              return <FaqItem key={id} question={question} answer={answer} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
