import React from "react";
import "./Portfolio.css";
import SPortfolio from "../../assets/portfolio6.jpg";
import { FaThList } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      id: "1",
      image: SPortfolio,
      title: "Lorem ipsum dolor sit.",
      projectdesc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: "2",
      image: SPortfolio,
      title: "Lorem ipsum dolor sit.",
      projectdesc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: "3",
      image: SPortfolio,
      title: "Lorem ipsum dolor sit.",
      projectdesc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: "4",
      image: SPortfolio,
      title: "Lorem ipsum dolor sit.",
      projectdesc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];
  return (
    <section id="portfolio" className="bg__container">
      <div className="heading__section">
        <div className="heading__text">
          <h5>About me</h5>
          <h2>React Developer</h2>
        </div>
        <div className="heading__icon">
          <FaThList />
        </div>
      </div>
      <div className="container portfolio__container">
        {projects.map(({ id, image, title, projectdesc }) => {
          return (
            <article className="portfolio__item" key={id}>
              <img src={SPortfolio} alt="" />
              <h2>{title}</h2>
              <p>{projectdesc}</p>

              <button className="btn">View</button>
              <button className="btn">Demo</button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
