import React from "react";
import MyImage from "../../assets/ninja.png";

const Footer = () => {
  return (
    <section>
      <div className="container">
        <div className="logo">
          <img src={MyImage} alt="" />
        </div>
        <div className="website__links">
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
        <div className="copyright__content">
          <h2>KoThu Portfolio</h2>
          <p>&copy; All rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
