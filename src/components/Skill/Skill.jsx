import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <section>
      <div className="container skill__container">
        <div className="first__skills">
          <article className="first__skill">
            <h5>1stLorem ipsum dolor sit.</h5>
            <p>Lorem, ipsum dolor.</p>
          </article>
        </div>
        <div className="major__skills">
          <article>
            <h5>major Lorem ipsum dolor sit amet.</h5>
          </article>
        </div>
        <div className="second__skills">
          <article className="second__skill">
            <h5>2ndLorem ipsum dolor sit.</h5>
            <p>Lorem, ipsum dolor.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skill;
