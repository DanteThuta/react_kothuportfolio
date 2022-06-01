import React from "react";
import MyImage from "../../assets/me.png";
import "./BackDrop.css";

const BackDrop = () => {
  return (
    <section>
      <h5>About me</h5>
      <h2>React Developer</h2>
      <div className="container backdrop__container">
        <div className="image__section">
          <img src={MyImage} alt="" />
        </div>
        <div className="content__section">
          <h5>Lorem, ipsum dolor.</h5>
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laudantium, placeat!
          </p>
          <button className="btn">View</button>
        </div>
      </div>
    </section>
  );
};

export default BackDrop;
