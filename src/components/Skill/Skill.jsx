import React from "react";
import "./Skill.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

const Skill = () => {
  return (
    <section>
      <div className="heading__section">
        <h5>Skills</h5>
        <h2>Frond & Backend</h2>
      </div>
      <div className="container skill__container">
        <div className="first__skills">
          <h2>Frontend skill</h2>
          <div className="first__skilllist">
            <article className="first__skill">
              <AiOutlineHtml5 className="skill__icon" />
              <div className="skill__detail">
                <h5>Html</h5>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </article>
            <article className="first__skill">
              <AiOutlineHtml5 className="skill__icon" />
              <div className="skill__detail">
                <h5>Html</h5>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </article>
            <article className="first__skill">
              <AiOutlineHtml5 className="skill__icon" />
              <div className="skill__detail">
                <h5>Html</h5>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </article>
          </div>
        </div>
        {/* End of 1st Skill */}
        <div className="major__skills">
          <h2>Focus On: </h2>
          <article className="major__skill">
            <FaReact className="major__skill-icon" />
            {/* <p>React Frontend</p> */}
            <a href="">
              <button>My React Projects</button>
            </a>
          </article>
        </div>
        {/* End of Major Skill */}
        <div className="second__skills">
          <h2>Backend Skills</h2>
          <div className="second__skilllist">
            <article className="second__skill">
              <AiOutlineHtml5 className="skill__icon" />
              <div className="skill__detail">
                <h5>Html</h5>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </article>
            <article className="second__skill">
              <AiOutlineHtml5 className="skill__icon" />
              <div className="skill__detail">
                <h5>Html</h5>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </article>
            <article className="second__skill">
              <AiOutlineHtml5 className="skill__icon" />
              <div className="skill__detail">
                <h5>Html</h5>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
