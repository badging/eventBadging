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

        {/* <p>
          The primary motivation to apply for a CHAOSS D&I Badge is the badge
          itself! The awarded event can show the open source community that they
          foster healthy D&I practices with a CHAOSS badge.{" "}
        </p> */}
        <div className="buttons">
          <button>
            {/* <Link className="link" to="/apply">
              Apply for a Badge
            </Link> */}
            <a href="https://chaoss.community/diversity-and-inclusion-badging/">
              Apply for a Badge
            </a>
          </button>
          <button>
            <Link className="link" to="/badged-events">
              Badged Events
            </Link>
          </button>
        </div>
        <p>
        Applying for a badge signifies your event&apos;s commitment to 
        enhancing its practices and demonstrates a willingness to foster
        DEI within the event and beyond, like these events:
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
    </Box>
  );
};

export default SubmitEvent;
