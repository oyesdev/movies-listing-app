import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//Menu:
import { MenuList } from "./MenuList";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navHandler = () => {
    setNavOpen((prev) => !prev);
  };

  const menuList = MenuList.map(({ title, url }, idx) => {
    return (
      <li key={idx} className="nav__list-items">
        <NavLink
          exact
          to={url}
          className="nav__link"
          activeClassName="active-link"
        >
          {title}
        </NavLink>
      </li>
    );
  });

  return (
    <div className="navigation">
      <nav className="nav">
        <div className="logo-container">
          <NavLink
            exact
            to="/"
            className="nav__link"
            activeClassName="active-link"
          >
            <h3 className="logo">MovieInfo</h3>
          </NavLink>
        </div>
        <ul className={`nav__list ${navOpen ? "navOpen" : ""}`}>{menuList}</ul>
        <div className="burger" onClick={navHandler}>
          <div className={`${navOpen ? "toggle__line1" : "line1"}`}></div>
          <div className={`${navOpen ? "toggle__line2" : "line2"}`}></div>
          <div className={`${navOpen ? "toggle__line3" : "line3"}`}></div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
