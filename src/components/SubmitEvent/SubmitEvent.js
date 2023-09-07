import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./SubmitEvent.scss";
import {
  linuxFoundationLogo,
  osSustainAfricaLogo,
  chaossWhiteLogo,
  sheCodeAfricaLogo,
  submitSectionBg,
} from "../../assets/images";

const SubmitEvent = () => {
  return (
    <section className="badge-events">
      <Box
        p="3rem 10rem"
        backgroundImage={submitSectionBg}
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
      >
        <h2> Submit your Event for a DEI Badge</h2>

        <p>
          The primary motivation to apply for a CHAOSS D&I Badge is the badge
          itself! The awarded event can show the open source community that they
          foster healthy D&I practices with a CHAOSS badge.{" "}
        </p>
        <div className="buttons">
          <button>
            <Link className="link" to="/apply">
              Apply for a Badge
            </Link>
          </button>
          <button>
            <Link className="link" to="/badged-events">
              Badged Events
            </Link>
          </button>
        </div>
        <p>
          Applying for a badge supports D&I efforts within an open source
          community by expressing that your event is willing to improve the ways
          the work. These efforts can have affects to D&I practices in your
          event and even outside of your project space. Like these events
        </p>
        <div className="logos">
          <div className="image-container">
            <img src={chaossWhiteLogo} alt="CHAOSS white logo" />
          </div>
          <div className="image-container">
            <img src={linuxFoundationLogo} alt="Linux Foundation logo" />
          </div>
          <div className="image-container-os">
            <img src={osSustainAfricaLogo} alt="OSS Africa logo" />
          </div>
          <div className="image-container-sca">
            <img src={sheCodeAfricaLogo} alt="She Code Africa logo" />
          </div>
        </div>
      </Box>
    </section>
  );
};

export default SubmitEvent;
