function Paragraph({contentItem}) {
    const paragraph = Object.values(contentItem)[0];
    return (<p className="tab-switcher__content__description"> {paragraph} </p>);

    
}

export default Paragraph;