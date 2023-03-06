function Header({contentItem}) {
    const header = Object.values(contentItem)[0];
    return (<h3> {header} </h3>);
}

export default Header;