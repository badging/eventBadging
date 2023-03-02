import { useState } from 'react';
import { roadmapInfo } from "./roadmap-info";
import line from "../../assets/images/event-badging/line.png";
import "./roadmap.css";


export default function Roadmap(){
  const [activeItem, setActiveItem] = useState({
    id: 1,
    status: 'active-item'
  });

  const onActive = (index) => {
    setActiveItem({id: index, status:'active-item'});
  }

  return (
    <div className="roadmap-section">
      <h2>Badging Roadmap</h2>
      <div className="roadmap">
        <div className="roadmap-screenshot">
            <p>
                Screenshot of Step {activeItem.id}
            </p>
        </div>
        <div>{
            roadmapInfo.map((item, index) => {
              return (
                <div className={`roadmap-item ${index+1 === activeItem.id ? activeItem.status : ""}`} 
                      key={index} 
                      onClick={() => onActive(index+1)}
                      onMouseOver={() => onActive(index+1)}>
                  <div className="roadmap-item-count">
                    <p>{index + 1}</p>
                  </div>
                  <img src={line}/> 
                  <div className="roadmap-item-details">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

