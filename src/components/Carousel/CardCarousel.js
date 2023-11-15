import React, { useState, useCallback } from "react";
import { loginArrow } from "../../assets/images";
import "./carousel.scss";

const cardItems = [
  {
    id: 1,
    hidden_title: <p>Step I</p>,
    title: (
      <p>
        <b>Step I:</b> Project Demographics
      </p>
    ),
    copy: "",
    // button: <button className="card-carousel-btn">Get Started </button>,
    blankDiv: (
      <div className="blank_div">
        <div className="mobile_blank">
          <div className="row1">
            <div className="small_rec1"></div>
            <div className="small_rec2"></div>
          </div>
          <div className="row2">
            <div className="small_rec1"></div>
            <div className="small_rec2"></div>
          </div>
          <div className="row3">
            <div className="small_rec1"></div>
            <div className="small_rec2"></div>
          </div>
          <div className="hr_mb_line"></div>
          <div className="row4">
            <div className="small_rec1"></div>
            <div className="small_rec2"></div>
          </div>
        </div>
        <div className="desktop_blank">
          <div className="first_blank">
            <div className="blank_left">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <div className="blank_right">
              <div className="rec1"></div>
              <div className="rec3"></div>
            </div>
          </div>
          <div className="hr"></div>
          <div className="second_blank">
            <div className="blank_left">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <div className="blank_right">
              <div className="rec1"></div>
              <div className="rec3"></div>
            </div>
          </div>
          <div className="third_blank">
            <div className="blank_left">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <div className="blank_right">
              <div className="rec1"></div>
              <div className="rec3"></div>
            </div>
          </div>
          <div className="hr2"></div>
          <div className="fourth_blank">
            <div className="blank_left">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <div className="blank_right">
              <div className="rec1"></div>
              <div className="rec3"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    hidden_title: <p>Step II</p>,
    title: (
      <p>
        <b>Step II:</b> Project Review
      </p>
    ),
    copy: "",
    blankDiv: (
      <div className="blank_div">
        <div className="mobile_blank">
          <div className="row1">
            <div className="small_rec1"></div>
            <div className="small_rec2"></div>
          </div>
          <div className="row2">
            <div className="small_rec1"></div>
            <div className="small_rec2"></div>
          </div>
          <div className="row3">
            <div className="small_rec1"></div>
            <div className="small_rec2"></div>
          </div>
          <div className="hr_mb_line"></div>
          <div className="row4">
            <div className="small_rec1"></div>
            <div className="small_rec2"></div>
          </div>
        </div>
        <div className="desktop_blank">
          <div className="first_blank">
            <div className="blank_left">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <div className="blank_right">
              <div className="rec1"></div>
              <div className="rec3"></div>
            </div>
          </div>
          <div className="hr"></div>
          <div className="second_blank">
            <div className="blank_left">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <div className="blank_right">
              <div className="rec1"></div>
              <div className="rec3"></div>
            </div>
          </div>
          <div className="third_blank">
            <div className="blank_left">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <div className="blank_right">
              <div className="rec1"></div>
              <div className="rec3"></div>
            </div>
          </div>
          <div className="hr2"></div>
          <div className="fourth_blank">
            <div className="blank_left">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <div className="blank_right">
              <div className="rec1"></div>
              <div className="rec3"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    hidden_title: <p>Step III</p>,
    title: (
      <p>
        {" "}
        <b>Step III:</b> DEI Badge{" "}
      </p>
    ),
    copy: "",
    blankDiv: (
      <div className="blank_div">
        <div className="mobile_blank">
          <div className="row1">
            <div className="small_rec1"></div>
            <div className="small_rec2"></div>
          </div>
          <div className="row2">
            <div className="small_rec1"></div>
            <div className="small_rec2"></div>
          </div>
          <div className="row3">
            <div className="small_rec1"></div>
            <div className="small_rec2"></div>
          </div>
          <div className="hr_mb_line"></div>
          <div className="row4">
            <div className="small_rec1"></div>
            <div className="small_rec2"></div>
          </div>
        </div>
        <div className="desktop_blank">
          <div className="first_blank">
            <div className="blank_left">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <div className="blank_right">
              <div className="rec1"></div>
              <div className="rec3"></div>
            </div>
          </div>
          <div className="hr"></div>
          <div className="second_blank">
            <div className="blank_left">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <div className="blank_right">
              <div className="rec1"></div>
              <div className="rec3"></div>
            </div>
          </div>
          <div className="third_blank">
            <div className="blank_left">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <div className="blank_right">
              <div className="rec1"></div>
              <div className="rec3"></div>
            </div>
          </div>
          <div className="hr2"></div>
          <div className="fourth_blank">
            <div className="blank_left">
              <div className="rec1"></div>
              <div className="rec2"></div>
            </div>
            <div className="blank_right">
              <div className="rec1"></div>
              <div className="rec3"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}
const CardCarousel = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 2,
    currentIndex: 0,
    nextIndex: 1,
  });
  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  return (
    <div className="carousel-container">
      <div className="getStarted-button">
        <button type="button">
          Get Started{" "}
          <span>
            <img className="arrow" src={loginArrow} alt="arrow icon" />
          </span>
        </button>
      </div>
      <ul className="card-carousel">
        {cardItems.map((card, index) => (
          <li
            role="presentation"
            key={card.id}
            className={`card ${determineClasses(indexes, index)}`}
            onClick={() => handleCardTransition()}
          >
            <div className="card-details-container">
              <div className="hidden_title">{card.hidden_title}</div>
              <div className="card-title">{card.title}</div>
              <p>{card.button}</p>
              <div className="copy">{card.copy}</div>
            </div>
            {card.blankDiv}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCarousel;
