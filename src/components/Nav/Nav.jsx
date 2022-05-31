import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav__header">KoThu</div>
      <ul className="nav__group">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">Skill</a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">Home</a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">Home</a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
