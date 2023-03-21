import React, { useState } from 'react';
import LabelItem from './LabelItem';
import TabContent from './TabContent';

export default function TabSwitcher({ tabs }){
  const [activeTab, setActiveTab] = useState(0);

  const onTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <ul className='tab-switcher'>
        {tabs.map((tab, index) => {
            return (
                <React.Fragment key={index}>
                    <LabelItem
                        tab={tab}
                        index={index}
                        activeTab={activeTab}
                        onTabChange={onTabChange}
                        key={index}
                    />
                    { index === activeTab ? <TabContent content={tabs[activeTab].content} /> : <></>}
                </React.Fragment>
            );
        })}
    </ul>
);
}
 
