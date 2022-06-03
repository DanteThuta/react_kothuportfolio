import React from "react";
import MyImage from "../../assets/ninja.png";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg__container">
      <div className="container footer__container">
        <div className="logo">
          <h2>My Portfolio</h2>
          <h5>dantethuta97@gmail.com</h5>
          <p>&copy; All rights Reserved.</p>
          {/* <img src={MyImage} alt="" /> */}
        </div>
        <div className="website__links">
          <h2>Information</h2>
          <ul>
            <li>Skill</li>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="social__links">
          <div className="social__links-items">
            {/* <a href=""> */}
            <FaFacebookSquare />
            {/* </a> */}
          </div>
          <div className="social__links-items">
            {/* <a href=""> */}
            <FaInstagramSquare />
            {/* </a> */}
          </div>
          <div className="social__links-items">
            <FaTwitterSquare />
          </div>
          <div className="social__links-items">
            {/* <a href=""> */}
            <FaLinkedin />
            {/* </a> */}
          </div>
          <div className="social__links-items">
            {/* <a href=""> */}
            <FaLinkedin />
            {/* </a> */}
          </div>
          <div className="social__links-items">
            {/* <a href=""> */}
            <FaLinkedin />
            {/* </a> */}
          </div>
        </div>
      </div>
      <div className="end__footer">
        <p> 2022 &copy; All rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
