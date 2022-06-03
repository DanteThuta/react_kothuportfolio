import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contactbg__container">
      <div className="container contact__container">
        {/* Form Section */}
        <div className="contact__form">
          <h2>Email me from Here:</h2>
          <form action="" className="contact__formlist">
            <input type="text" placeholder="Enter your Name" />
            <input type="email" placeholder="Enter your Email" />
            <textarea
              name=""
              id=""
              cols="20"
              rows="5"
              placeholder="Enter your Thoughts about me"
            ></textarea>

            <button className="btn">Submit</button>
          </form>
        </div>
        {/* Contact Shortcut Section */}
        <div className="shortcut__contact">
          <article className="contact__item">
            <h5>Lorem ipsum dolor sit.</h5>
            <h2>Facebook</h2>
            <button className="btn contact__btn">Message Me</button>

            <a href=""></a>
          </article>
          <article className="contact__item">
            <h5>Lorem ipsum dolor sit.</h5>
            <h2>Twitter</h2>
            <button className="btn contact__btn">Message Me</button>

            <a href=""></a>
          </article>
          <article className="contact__item">
            <h5>Lorem ipsum dolor sit.</h5>
            <h2>Instagram</h2>
            <button className="btn contact__btn">Message Me</button>

            <a href=""></a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
