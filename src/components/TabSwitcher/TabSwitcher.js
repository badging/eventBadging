import { lazy, useEffect, useState, Suspense } from 'react';
import "./tabSwitcher.css";

const importTabContentCompnent = ( contentItem ) => {
  const tabContentComponent = Object.keys(contentItem)[0];
  return  lazy(() => import(`./${tabContentComponent}`));
}

export default function TabSwitcher( {data} ) {
  const [tabViews, setTabViews] =   useState([]);

  useEffect(() => { 
        const tabsContent = data.map((tabData, index) => {
          const TabLabel = importTabContentCompnent(tabData);  
          return (
            <div key={index} className="tab-switcher__container">
              <TabLabel data={tabData.label}/>
              <div className="tab-switcher__content">
                {tabData.content.map((contentItem, i) => {
                  const TabContent = importTabContentCompnent(contentItem);
                  return (
                      <TabContent key={i} contentItem={contentItem} />
                  );
                })}
              </div>
            </div>
          );
        });
        setTabViews(tabsContent);

  }, [data]);



  return (
    <div className="tab-switcher">
      <Suspense fallback={<div>Loading...</div>}>
        {tabViews}
      </Suspense>
    </div>
  );
  
  
  
} 

/* <div className="tab-switcher__content__title">
<h4>{console.log(data)}</h4>
</div>
<div className="tab-switcher__info__description">
<p>testing</p>
</div> */