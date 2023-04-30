/* eslint-disable react/prop-types */
import React from "react";
import "../../assets/styles/global.scss";
import { chaossLogo } from "../../assets/images";
import { Link } from "react-router-dom";
import "./Header.scss";
import { navPaths } from "../../data";

const Header = ({ pathName }) => {
  return (
    <>
      <nav className="navigation flex-row">
        <div className="logo">
          <Link to="/">
            <img src={chaossLogo} alt="chaoss-logo" />
          </Link>
        </div>

        <section className="navigation-menu">
          <ul className="flex-row ">
            {navPaths.map((navItems) => {
              let { pathname, path, id } = navItems;
              return (
                <li className="nav-items" key={id}>
                  <Link
                    to={path}
                    className={`nav-link ${
                      pathname === pathName && "activenav"
                    }`}
                  >
                    {" "}
                    {pathname}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className="apply">
            <Link to="/apply">Apply for a Badge</Link>
          </button>
        </section>
      </nav>
    </>
  );
};

export default Header;
