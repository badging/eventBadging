import LabelItem from './LabelItem';

export default function TabLabels({ tabs, activeTab, onTabChange }) {
    return (
        <ul className='tab-switcher__labels'>
            {tabs.map((tab, index) => (
                <LabelItem
                    tab={tab}
                    index={index}
                    activeTab={activeTab}
                    onTabChange={onTabChange}
                    key={index}
                />
            ))}
        </ul>
    );
}
  