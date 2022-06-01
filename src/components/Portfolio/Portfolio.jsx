import React from "react";
import "./Portfolio.css";
import SPortfolio from "../../assets/portfolio6.jpg";

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
    <section>
      asdf
      <div className="heading__section">
        <h5>Projects</h5>
        <h2>Personal Projects</h2>
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
