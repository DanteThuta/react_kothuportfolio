import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleToggle = () => {
    setNavToggle((prev) => !prev);
  };
  return (
    <nav>
      <div className="nav__header">KoThu</div>
      <ul className={navToggle === true ? "nav__group active" : "nav__group"}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Skill
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Experience
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav__menu" onClick={handleToggle}>
        <AiOutlineMenu />
      </div>
    </nav>
  );
};

export default Nav;
