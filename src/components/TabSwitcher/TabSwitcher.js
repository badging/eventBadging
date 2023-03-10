import React, { lazy, useEffect, useState, Suspense } from 'react';
import tabSwitcherIcon from "../../assets/images/event-badging/icons/toggle-icon.png";
import "./tabSwitcher.css";


export default function TabSwitcher({ tabs, activeTab, onTabChange }){
  return (
  <div className='tab-switcher'>
    <ul className='tab-labels'>
      {tabs.map((tab, index) => {
        return (
          <li key={index} className={activeTab === tab ? 'active' : ''} onClick={() => onTabChange(tab)}>
            <span>{tab.label}</span>
            <img src={tabSwitcherIcon} alt="tab-switcher-icon" />
          </li>
        )
      })}
    </ul>
    <div className="tab-content">{tabs[activeTab].content}</div>
  </div>)
}
 
