function Header({contentItem}) {
    const header = Object.values(contentItem)[0];
    return (<h3 className="tab-switcher__content__title"> {header} </h3>);
}

function List({contentItem}) {
    const list = Object.values(contentItem)[0];
    return (
        <ul className="tab-switcher__content__list"> 
            {list.map((item, index) => {
                return (<li key={index}> {item} </li>);
            })}
        </ul>);
}

function Paragraph({contentItem}) {
    const paragraph = Object.values(contentItem)[0];
    return (<p className="tab-switcher__content__description"> {paragraph} </p>);
}

export { Header, List, Paragraph };