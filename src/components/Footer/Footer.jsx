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
    <footer>
      <div className="container footer__container">
        <div className="logo">
          <h2>KoThu Portfolio</h2>
          {/* <img src={MyImage} alt="" /> */}
        </div>
        <div className="website__links">
          <h2>Information</h2>
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
        <div className="social__links">
          <div className="social__links-items">
            <a href="">
              <FaFacebookSquare />
            </a>
          </div>
          <div className="social__links-items">
            <a href="">
              <FaInstagramSquare />
            </a>
          </div>
          <div className="social__links-items">
            <FaTwitterSquare />
          </div>
          <div className="social__links-items">
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright__content">
        <h2>KoThu Portfolio</h2>
        <p>&copy; All rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
