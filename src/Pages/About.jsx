import React from "react";
import "../css/about.css";
import emreSoyluPhoto from "../assets/img/emresoylu2.png";
import productCards from "../assets/img/product-cards.png";
import restoranWebSitePhoto from "../assets//img/Qrispy.png";
import scssWebSitePhoto from "../assets//img/Scss-Example.png";
import movieAppPhoto from "../assets//img/MovieApp.png";
import englishResume from "../assets//Download File/Emre_Soylu_Resume.pdf";
import turkishResume from "../assets//Download File/Emre_Soylu_Ozgecmis.pdf";

const About = () => {
  return (
    <>
      {/* Home */}
      <section className="home about-container" id="home">
        <div className="home-content">
          <div className="home-img">
            <img src={emreSoyluPhoto} alt="Emre-Soylu-Image" title="Hey! 🙋🏽‍♂️" />
          </div>
          <div className="home-text">
            <h3>Hello</h3>
            <h2>I'm Emre</h2>
            <p>I'm Frontend Developer</p>
            <p>
              I can make a Web Site with special designs according to your
              wishes. <br />I am building these Websites using Javascript and
              React.
            </p>
            {/* Social */}
            <div className="social">
              <a href="https://linkedin.com/in/emre-soylu/" target="_blank">
                <i className="fa-brands fa-linkedin-in fa-2x" />
              </a>
              <a href="tel:+905433730780">
                <i className="fas fa-phone fa-2x" />
              </a>
              <a href="https://github.com/soyluemre/" target="_blank">
                <i className="fa-brands fa-github fa-2x" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section className="aboutPage about-container" id="about">
        <h2 className="heading">About</h2>
        <div className="aboutPage-content">
          <div className="aboutPage-data text-center">
            <h2>Web Developer</h2>
            <span>Download Resume</span>
            <div className="cv text-center">
              <a
                href={englishResume}
                className="btn"
                download="Emre_Soylu_Resume"
                title="Click to download!"
              >
                English
                <i className="download-icon fas fa-regular fa-file-arrow-down" />
              </a>
              <a
                href={turkishResume}
                className="btn"
                download="Emre_Soylu_Ozgecmis"
                title="Click to download!"
              >
                Turkish
                <i className="download-icon fas fa-regular fa-file-arrow-down" />
              </a>
            </div>
          </div>
          <div className="aboutPage-text">
            <p>
              I'm from Istanbul, Turkey. I make Web Sites with original designs.
            </p>
            <p>
              I Believe Life is All About The Contributions and Connections We
              make, and Knowledge Sharing is a Great Way to Do Both.
            </p>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className="portfolio about-container" id="portfolio">
        {/*Heading */}
        <h2 className="heading">Projects</h2>
        {/* Porjects Content*/}
        <div className="portfolio-content">
          <div className="portfolio-box">
            <img src={movieAppPhoto} alt="" className="portfolio-img" />
            {/* Overlay*/}
            <div className="portfolio-overlay">
              <h2>React Movie App</h2>
              <a
                href="https://soyluemre.github.io/react-movie-app/"
                target="_blank"
              >
                <i className="text-white fa-solid fa-up-right-from-square" />
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={scssWebSitePhoto} alt="img" className="portfolio-img" />
            {/* Overlay*/}
            <div className="portfolio-overlay">
              <h2>Scss Example</h2>
              <a href="https://soyluemre.github.io/sass-pages/" target="_blank">
                <i className="text-white fa-solid fa-up-right-from-square" />
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={productCards} alt="img" className="portfolio-img" />
            {/* Overlay*/}
            <div className="portfolio-overlay">
              <h2>Product Cards</h2>
              <a
                href="https://soyluemre.github.io/responsive-product-card/"
                target="_blank"
              >
                <i className="text-white fa-solid fa-up-right-from-square" />
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img
              src={restoranWebSitePhoto}
              alt="img"
              className="portfolio-img"
            />
            {/* Overlay*/}
            <div className="portfolio-overlay">
              <h2>Restaurant Website</h2>
              <a
                href="https://qrispy-restaurant.netlify.app/#heroSlider"
                target="_blank"
              >
                <i className="text-white fa-solid fa-up-right-from-square" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="contact about-container" id="contact">
        {/* Heading */}
        <div className="text-center">
          <h2 className="heading">Contact</h2>
        </div>
        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xvongnod"
          method="POST"
          className="contact-form"
          id="contact-form"
        >
          <input
            name="fullname"
            type="text"
            placeholder="Full Name"
            className="name"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="email"
            required
          />
          <textarea
            name="textarea"
            cols={30}
            rows={10}
            placeholder="Write message Here.."
            className="message"
            required
            defaultValue={""}
          />
          <button disabled type="submit" className="send-btn w-100">
            SEND
          </button>
        </form>
      </section>
      {/* Footer */}
      <section className="footer about-container" id="footer">
        <div className="social social-footer">
          <a href="https://linkedin.com/in/emre-soylu/" target="_blank">
            <i className="fa-brands fa-linkedin-in fa-2x" />
          </a>
          <a href="tel:+905433730780">
            <i className="fas fa-phone fa-2x" />
          </a>
          <a href="https://github.com/soyluemre/" target="_blank">
            <i className="fa-brands fa-github fa-2x" />
          </a>
        </div>
        {/* Scroll Top */}
        <a href="#home" className="scroll-top">
          <i className="bx fa-solid fa-up-long" />
        </a>
      </section>
      {/* Link To JS */}
    </>
  );
};

export default About;
