import ToggleIcon from './icons/toggle-icon.png';

export default function Item({ tab, index, activeTab, onTabChange}) {
    const isActive = index + 1 === activeTab.id;
    const activeClass = isActive ? activeTab.status : "";

    return (
        <li 
            className={activeClass=== tab ? 'active' : ''} 
            onClick={() => onTabChange(tab)}>
            <span>{tab.label}</span>
            <img src={ToggleIcon} alt="toggle-icon" />
        </li>
    );
}
  