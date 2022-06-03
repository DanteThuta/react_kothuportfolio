import React from "react";
import MyImage from "../../assets/me-about.jpg";
import { GiLifeBar } from "react-icons/gi";

import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="bg__container">
      <div className="heading__section">
        <div className="heading__text">
          <h5>About me</h5>
          <h2>React Developer</h2>
        </div>
        <div className="heading__icon">
          <GiLifeBar />
        </div>
      </div>
      <div className="container experience__container">
        <div className="current__experience">
          {/* Grid Section with Image will be used    */}
          {/* I will use l35 here */}
          <h2>Experience Session</h2>
          <div className="grid__gallery">
            <article className="grid__item">
              <img src={MyImage} alt="" />
              <p>Lorem ipsum dolor sit.</p>
            </article>
            <article className="grid__item">
              <img src={MyImage} alt="" />
              <p>Lorem ipsum dolor sit.</p>
            </article>
            <article className="grid__item">
              <img src={MyImage} alt="" />
              <p>Lorem ipsum dolor sit.</p>
            </article>
            <article className="grid__item">
              <img src={MyImage} alt="" />
              <p>Lorem ipsum dolor sit.</p>
            </article>
          </div>
        </div>
        {/* End of Gallery Section  */}
        <div className="acquired__skills">
          {/* Tables with other Profiency will be displayed */}

          <h2>Other Profiencies</h2>
          <div className="progress__section">
            <h1>English</h1>
            <div className="single__progress">
              <div className="progress english">70%</div>
            </div>
          </div>
          <div className="progress__section">
            <h1>Japanese</h1>
            <div className="single__progress">
              <div className="progress japanese">50%</div>
            </div>
          </div>
          <div className="progress__section">
            <h1>Presentation</h1>
            <div className="single__progress">
              <div className="progress presentation">80%</div>
            </div>
          </div>
          <div className="progress__section">
            <h1>Teamwork</h1>
            <div className="single__progress">
              <div className="progress teamwork">100%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
