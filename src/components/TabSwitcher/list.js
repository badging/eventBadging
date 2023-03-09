function List({contentItem}) {
    const list = Object.values(contentItem)[0];
    return (
        <ul className="tab-switcher__content__list"> 
            {list.map((item, index) => {
                return (<li key={index}> {item} </li>);
            })}
        </ul>);
}

export default List;