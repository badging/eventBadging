/* eslint-disable react/prop-types */
import React from "react";
import "../../assets/styles/global.scss";
import { chaossBadgingLogoBlack } from "../../assets/images";
import { Link } from "react-router-dom";
import "./Header.scss";
import { routes } from "../../routes";

const Header = ({ pathName }) => {
  return (
    <>
      <nav className="navigation flex-row">
        <div className="logo">
          <Link to="/">
            <img src={chaossBadgingLogoBlack} alt="chaoss-logo" />
          </Link>
        </div>

        <section className="navigation-menu">
          <ul className="flex-row ">
            {routes.map((route) => {
              let { pathname, path, id } = route;
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
            <a href="https://chaoss.community/diversity-and-inclusion-badging/">
              Apply for a Badge
            </a>
          </button>
        </section>
      </nav>
    </>
  );
};

export default Header;
