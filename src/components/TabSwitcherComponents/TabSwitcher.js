import { useState } from 'react';
import TabLabels from './TabLabels';

export default function TabSwitcher({ tabs }){
  const [activeTab, setActiveTab] = useState(0);

  const onTabChange = (index) => {
    setActiveTab(index);
  };

  console.log(tabs);
  return (
  <div className='tab-switcher'>
    <TabLabels tabs={tabs} activeTab={activeTab} onTabChange={onTabChange}/>
    {/* <div className="tab-content">{tabs[activeTab].content}</div> */}
  </div>);
}
 
