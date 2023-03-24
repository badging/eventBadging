import React, { useState } from "react";
import { Header, Footer } from "../layouts";
// import "../assets/styles/global.css";
import "../assets/styles/home.css";
import heroBackground from "../assets/images/hero-bg.png";
import heroLogoTwo from "../assets/images/dei-02.png";
import heroLogoOne from "../assets/images/dei-01.png";
import gold from "../assets/images/gold.png";
import silver from "../assets/images/silver.png";
import passing from "../assets/images/passing.png";
import pending from "../assets/images/pending.png";
import eventBadging from "../assets/images/event-badging.png";
import { Link } from "react-router-dom";

import { Testimonial, Faq } from "../components";
import { testimonialData } from "../components/testimonial/testimonialData";
import { faqData } from "../components/faq/FAQData";
import { useSnapCarousel } from "react-snap-carousel";
// import Faq from "../components/faq/Faq";
// import Testimonial from "../components/testimonial/Testimonial";

const Home = () => {
  const { scrollRef } = useSnapCarousel();
  return (
    <div className="home">
      <Header />
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-section-text">
          <div className="hero-main">
            <img src={heroLogoOne} />
            <div className="hero-main-text">
              <p>
                The primary motivation to apply for a CHAOSS D&I event or
                project Badge, is for the badge itself! The awarded event or
                project can show the open source community that they foster
                healthy D&I practices with a CHAOSS badge.{" "}
              </p>
            </div>
            <div className="hero-main-buttons">
              <button type="button">
                <Link className="link" to={"#"}>
                  Badged Events
                </Link>
              </button>

              <button type="button">
                <Link className="link" to={"#"}>
                  Apply for badging
                </Link>
              </button>
            </div>
          </div>
          <div className="hero-logo">
            <img src={heroLogoTwo} alt="rect" />
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
            practices with a CHAOSS badge{" "}
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
          <div className="carosel-container" ref={scrollRef}>
            {testimonialData.map((item, id) => {
              let { image, name, title, message } = item;

              return (
                <div className="carosel-testimonials">
                  <Testimonial
                    image={image}
                    name={name}
                    title={title}
                    message={message}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="faq-container">
          <div className="title">
            <h2>FAQ</h2>
          </div>

          <div className="faqs">
            {faqData.map(({ question, answer }, id) => {
              return <Faq key={id} question={question} answer={answer} />;
            })}
          </div>
        </div>
      </div>
      <div className="section-7">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
