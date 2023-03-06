import tabSwitcherIcon from "../../assets/images/event-badging/icons/toggle-icon.png";

function TabLabel( {data}) {
  return (
    <div className="tab-switcher__label">
      <h3>{data}</h3>
      <img src={tabSwitcherIcon} alt="tab-switcher-icon" />
    </div>);
}

export default TabLabel;

