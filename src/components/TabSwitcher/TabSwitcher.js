import tabSwitcherIcon from "../../assets/images/event-badging/icons/toggle-icon.png";
import "./tabSwitcher.css";
export default function TabSwitcher() {
  return (
    <div className="tab-switcher">
      <div className="tab-switcher__container">
        
        <div className="tab-switcher__label">
          <img src={tabSwitcherIcon} alt="tab-switcher-icon" />
        </div>
        <div className="tab-switcher__info">
          <div className="tab-switcher__info__title">
            {tabs.title}
          </div>
          <div className="tab-switcher__info__description">
            {tabs.description}
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
} 