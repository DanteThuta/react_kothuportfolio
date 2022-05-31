import React from "react";
import MyImage from "../../assets/me.png";

const BackDrop = () => {
  return (
    <section>
      <div className="container">
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
          <button>View</button>
        </div>
      </div>
    </section>
  );
};

export default BackDrop;
