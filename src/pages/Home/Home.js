import React from "react";
import { Header, Footer } from "../../layouts";
import "../../assets/styles/global.scss";
import { Link } from "react-router-dom";

import {
  pendingBadge,
  passingBadge,
  silverBadge,
  goldBadge,
  eventBadging,
  DEIBadgingLogo,
  award,
  heroOne,
} from "../../assets/images";

import { Testimonial, Faq } from "../../components";
import { testimonialData } from "../../components/testimonial/testimonialData";
import { faqData } from "../../components/faq/FAQData";
// import Faq from "../components/faq/Faq";
// import Testimonial from "../components/testimonial/Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Header pathName="Home" />
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${heroOne})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-section-text">
          <div className="hero-main">
            <img src={DEIBadgingLogo} alt="DEI Badging Logo" />
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
                <Link className="link" to="/badged-events">
                  Badged Events
                </Link>
              </button>

              <button className="button apply" type="button">
                <Link className="link" to="/apply">
                  Apply for a Badge
                </Link>
              </button>
            </div>
          </div>
          <div className="hero-logo">
            <img src={award} alt="rect" />
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
          <img src={goldBadge} alt="gold" />
          <img src={silverBadge} alt="gold" />
          <img src={passingBadge} alt="gold" />
          <img src={pendingBadge} alt="gold" />
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
                  key={id}
                  image={image}
                  name={name}
                  title={title}
                  message={message}
                />
              );
            })}
          </div>
        </div>

        <div className="faq-container" id="faqs">
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
      <Footer />
    </div>
  );
};

export default Home;
