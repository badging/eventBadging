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
<<<<<<< HEAD
    <Box
      as="section"
      className="badge-events"
      backgroundImage={submitSectionBg}
    >
      <Box
        p="3rem 10rem"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        backgroundColor="rgba(7,0,16,0.9)"
      >
        <h2> Submit your Event for a DEI Badge</h2>
=======
    <div className="badge-events">
      <h2> Submit your Event for a DEI Badge</h2>
>>>>>>> 9183e33 (ch(about-page): implement responsiveness)

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
<<<<<<< HEAD
      </Box>
    </Box>
=======
      </div>
    </div>
>>>>>>> 9183e33 (ch(about-page): implement responsiveness)
  );
};

export default SubmitEvent;
