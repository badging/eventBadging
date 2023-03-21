import ToggleIcon from './icons/toggle-icon.png';

export default function Item({ tab, index, activeTab, onTabChange}) {
    const isActive = index === activeTab;
    const activeTabClass = isActive ? "active-tab" : "";
    console.log(tab);

    return (
        <li className={`tab-switcher__label ${activeTabClass}`} 
            onClick={() => onTabChange(index)}>
                <span>{tab.label}</span>
                <img src={ToggleIcon} alt="toggle-icon" />
        </li>
    );
}
  