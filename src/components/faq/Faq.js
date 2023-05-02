import React, { useState } from "react";
import PropTypes from "prop-types";
import "./faq.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Faq = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="faq">
      <div className="head">
        <header>{question}</header>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
      </div>
      <div className="answer">
        {showAnswer && <p className="ans">{answer}</p>}
      </div>
    </div>
  );
};

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Faq;
