import React from "react";
import MyImage from "../../assets/me-about.jpg";

const Experience = () => {
  return (
    <section>
      <div className="container">
        <div className="current__experience">
          {/* Grid Section with Image will be used    */}
          <article>
            <img src={MyImage} alt="" />
          </article>
        </div>
        <div className="acquired__skills">
          {/* Tables with other Profiency will be displayed */}
          <ul>
            <li>Skills:</li>
            <li>Skills:</li>
            <li>Skills:</li>
            <li>Skills:</li>
            <li>Skills:</li>
            <li>Skills:</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
