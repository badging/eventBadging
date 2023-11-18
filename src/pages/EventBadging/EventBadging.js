import React from "react";
import { Header, Footer } from "../../components";
import "./EventBadging.scss";
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

import { Faq } from "../../components";
import { faqData } from "../../components/faq/FAQData";

const EventBadging = () => {
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
              Make your open source event more diverse and inclusive with our DEI badges.
               Gain valuable feedback from our reviewers to enhance your event.{" "}
              </p>
            </div>
            <div className="hero-main-buttons">
              <button className="button badged-event" type="button">
                <Link className="link" to="/badged-events">
                  Badged Events
                </Link>
              </button>

              <button className="button apply" type="button">
                {/*<Link className="link" to="/apply">
                  Apply for a Badge
      </Link> */}
      <a href="https://chaoss.community/diversity-and-inclusion-badging/">
              Apply for a Badge
            </a>
              </button>
            </div>
          </div>
          <div className="hero-logo">
            <img src={award} alt="rect" />
          </div>
        </div>
      </div>
      <div className="section-5 ">
        <div className="event-badging">
          <h2>Event Badging</h2>
          <p>
          The goal of the Diversity, Equity & Inclusion (DEI) Badging initiative is to help open source events
           enhance their inclusivity and nurture a system that promotes leadership, self-reflection, 
           and self-improvement on issues critical to building the Internet as a social good.
          </p>
        </div>

        <div className="event-badging-image">
          <img src={eventBadging} alt="Event badging" />
        </div>
      </div>
      <div className="section-4">
        <div className="badging-level">
          <h2>Badge Levels</h2>
          <p>
         Each badge level represents specific DEI efforts within an open source community. 
          Awarded events can proudly display their badge to show the open source community 
          their commitment to fostering healthy DEI practices for all participants.{" "}
          </p>
        </div>
        <div className="badging-image-container">
          <img src={goldBadge} alt="gold" />
          <img src={silverBadge} alt="gold" />
          <img src={passingBadge} alt="gold" />
          <img src={pendingBadge} alt="gold" />
        </div>
      </div>

      <div className="section-6">
        <div className="faq-container" id="faqs">
          <div className="title">
            <h2>FAQs</h2>
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

export default EventBadging;
