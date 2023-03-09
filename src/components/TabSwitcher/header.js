function Header({contentItem}) {
    const header = Object.values(contentItem)[0];
    return (<h3 className="tab-switcher__content__title"> {header} </h3>);
}

export default Header;