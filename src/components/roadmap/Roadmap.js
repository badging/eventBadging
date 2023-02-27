import { roadmapInfo } from "./roadmap-info";
import line from "../../assets/images/event-badging/line.png";
import "./roadmap.css";




export default function Roadmap(){
  return (
    <div className="roadmap-section">
      <h2>Badging Roadmap</h2>
      <div className="roadmap">
        <div className="roadmap-screenshot">
            <p>
                Screenshot of each step as they get hoverd
            </p>
        </div>
        <div>{
            roadmapInfo.map((item, index) => {
              return (
                <div className="roadmap-item">
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

