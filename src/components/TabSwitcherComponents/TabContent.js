import { Header, Paragraph, List } from "./ContentItems";

export default function TabContent( { content }){
  return (
    <div className="tab-switcher__content">
        {
            content !== undefined
            ?   content.map((item, index)=> {
                    switch(Object.keys(item)[0]){
                        case 'header': 
                            return <Header key={index} contentItem={item}/>;
                        case 'list': 
                            return <List key={index} contentItem={item}/>;
                        case 'paragraph':
                            return <Paragraph key={index} contentItem={item}/>
                        default:
                            return <></>
                    }
                })
            : <></>
    }
  </div>);
}