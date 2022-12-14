import React, { useState } from "react";
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

export default Faq;
