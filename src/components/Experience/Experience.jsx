import React from "react";
import MyImage from "../../assets/me-about.jpg";

import "./Experience.css";

const Experience = () => {
  return (
    <section>
      <div className="heading__section">
        <h5>Projects</h5>
        <h2>Personal Projects</h2>
      </div>
      <div className="container experience__container">
        <div className="current__experience">
          {/* Grid Section with Image will be used    */}
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

          <h2>My Other Profienccies:</h2>
          <div className="progress__section">
            <h1>html</h1>
            <div className="single__progress">
              <div className="progress html">50%</div>
            </div>
          </div>
          <div className="progress__section">
            <h1>html</h1>
            <div className="single__progress">
              <div className="progress html">50%</div>
            </div>
          </div>
          <div className="progress__section">
            <h1>html</h1>
            <div className="single__progress">
              <div className="progress html">50%</div>
            </div>
          </div>
          <div className="progress__section">
            <h1>html</h1>
            <div className="single__progress">
              <div className="progress html">50%</div>
            </div>
          </div>
          <div className="progress__section">
            <h1>html</h1>
            <div className="single__progress">
              <div className="progress html">50%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
