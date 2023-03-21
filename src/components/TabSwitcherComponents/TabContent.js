

export default function TabContent( { content }){
  return (<div className="tab-switcher__content">
    {content !== undefined
        ? content.map((item, index)=> {
            return (<p>content</p>);
         })
        : <></>
    }

  </div>);
}