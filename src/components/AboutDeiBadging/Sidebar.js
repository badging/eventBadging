import { NavLink } from "react-router-dom";
import { arrowRight } from "../../assets/images";
import { useState } from "react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <ul>
      <li>
        <div className="main__link">
          <NavLink
            exact="true"
            to="/about"
            id="what-is-dei-badging"
            end
            onClick={() => setIsActive(1)}
          >
            What is All-In CHAOSS DEI...
          </NavLink>
          <img src={arrowRight} alt="arrow" />
        </div>
        {isActive === 1 && (
          <div className="sub__links">
            <NavLink exact="true" to="/about">
              What is DEI Project Badging?
            </NavLink>
          </div>
        )}
      </li>

      <li>
        <div className="main__link">
          <NavLink
            exact="true"
            to="/about/application-process"
            onClick={() => setIsActive(2)}
          >
            How it Works
          </NavLink>
          <img src={arrowRight} alt="arrow" />
        </div>
        {isActive === 2 && (
          <div className="sub__links">
            <NavLink exact="true" to="/about/application-process">
              Self-Assessment & Documen...
            </NavLink>
            <NavLink exact="true" to="/about/application-process">
              Project Application
            </NavLink>
            <NavLink exact="true" to="/about/application-process">
              Badging Evaluation
            </NavLink>
            <NavLink exact="true" to="/about/application-process">
              Recognition and Badging
            </NavLink>
            <NavLink exact="true" to="/about/application-process">
              Continued Engagement
            </NavLink>
          </div>
        )}
      </li>
      <li>
        <div className="main__link">
          <NavLink exact="true" to="/about/dei-file">
            DEI.md File
          </NavLink>
          <img src={arrowRight} alt="arrow" />
        </div>
      </li>
      <li>
        <div className="main__link">
          <NavLink
            exact="true"
            to="/about/dei-badge"
            onClick={() => setIsActive(4)}
          >
            DEI Badges
          </NavLink>
          <img src={arrowRight} alt="arrow" />
        </div>
        {isActive === 4 && (
          <div className="sub__links">
            <NavLink exact="true" to="/about/dei-badge">
              Bronze Badge
            </NavLink>
            <NavLink exact="true" to="/about/dei-badge">
              Criteria
            </NavLink>
            {/* commented out as only bronze badge is being introduced at the moment */}
            {/* <NavLink exact="true" to="/about/dei-badge">
							Silver Badge
						</NavLink>
						<NavLink exact="true" to="/about/dei-badge">
							Criteria
						</NavLink>
						<NavLink exact="true" to="/about/dei-badge">
							Gold Badge
						</NavLink>
						<NavLink exact="true" to="/about/dei-badge">
							Criteria
						</NavLink>
						<NavLink exact="true" to="/about/dei-badge">
							Platinum Badge
						</NavLink>
						<NavLink exact="true" to="/about/dei-badge">
							Criteria
						</NavLink> */}
          </div>
        )}
      </li>
    </ul>
  );
};

export default Sidebar;
