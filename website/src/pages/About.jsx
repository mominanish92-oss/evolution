import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import gymVideo from "../assets/videos/gym-interior1.mp4";

function About() {
  const facilities = [
    {
      title: "Strength Training",
      description:
        "Build strength, confidence, and consistency with structured training and expert guidance.",
    },
    {
      title: "Cardio Training",
      description:
        "Improve endurance and overall fitness with effective cardio training options.",
    },
    {
      title: "Personal Training",
      description:
        "Get focused one-to-one guidance designed around your individual fitness goals.",
    },
    {
      title: "Diet Guidance",
      description:
        "Receive practical diet guidance to support your fitness and transformation journey.",
    },
    {
      title: "Free Weights",
      description:
        "Train with a wide range of free weights for strength, muscle building, and performance.",
    },
    {
      title: "Quality Machines",
      description:
        "Train using quality gym equipment designed to support effective and comfortable workouts.",
    },
  ];
  const animatedText =
  "Evolution Gym Fitness is more than just a place to work out. It is a place where discipline, consistency, knowledge, and dedication come together to create real transformation.";

const [displayedText, setDisplayedText] = useState("");

useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
    setDisplayedText(animatedText.slice(0, index + 1));
    index++;

    if (index === animatedText.length) {
      clearInterval(interval);
    }
  }, 20);

  return () => clearInterval(interval);
}, []);
useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);

  return (
    <main className="about-page">
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <section className="about-hero">
        <p className="about-small-title">KNOW OUR STORY</p>

        <h1>
          BUILT FOR <span>EVOLUTION.</span>
        </h1>

       <p className="about-hero-text animated-about-text">
         {displayedText}
         <span className="typing-cursor">|</span>
       </p>
      </section>

      <section className="about-container reveal">
        <div className="about-story">
          <div className="section-label">
            <span></span>
            OUR STORY
          </div>

          <h2>
            WHERE YOUR <span>TRANSFORMATION</span> BEGINS.
          </h2>

          <p>
            Evolution Gym Fitness was established on{" "}
            <strong>March 1, 2023</strong>, with a vision to create a
            motivating environment where people can become stronger,
            healthier, and more confident.
          </p>

          <p>
            With <strong>2 dedicated and experienced trainers</strong>,
            <strong> Avinash P. Suvarna</strong> and{" "}
            <strong>Aishwarya Suvarna</strong>, our members receive
            friendly support, professional guidance, and expert guidance.
          </p>

          <div className="about-highlight">
            <div>
              <strong>2023</strong>
              <span>ESTABLISHED</span>
            </div>

            <div>
              <strong>2</strong>
              <span>EXPERT TRAINERS</span>
            </div>

            <div>
              <strong>4+</strong>
              <span>YEARS TRAINING</span>
            </div>
          </div>
        </div>

        <div className="about-video-section">
          <div className="video-border"></div>

          <div className="video-container">
            <video controls playsInline>
              <source src={gymVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="video-caption">
            <span>01</span>

            <div>
              <p>STEP INSIDE</p>
              <h3>EVOLUTION GYM FITNESS</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section reveal">
        <div className="why-heading">
          <p>WHAT MAKES US DIFFERENT?</p>

          <h2>
            MORE THAN A GYM.
            <br />
            <span>A PLACE TO EVOLVE.</span>
          </h2>
        </div>

        <div className="facility-grid">
          {facilities.map((facility, index) => (
            <div className="facility-card" key={index}>
              <span className="facility-number">
                0{index + 1}
              </span>

              <h3>{facility.title}</h3>

              <p>{facility.description}</p>

              <div className="facility-arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      <section className="philosophy-section reveal">
        <div className="philosophy-line"></div>

        <p className="philosophy-small">OUR PHILOSOPHY</p>

        <h2>
          DISCIPLINE CREATES <span>RESULTS.</span>
        </h2>

        <p>
          At Evolution Gym Fitness, we believe that real transformation
          comes from consistency, proper training, dedication, and the
          willingness to improve every day.
        </p>
      </section>

      <section className="about-cta reveal">
        <p>YOUR JOURNEY STARTS WITH ONE DECISION.</p>

        <h2>
          START YOUR <span>EVOLUTION.</span>
        </h2>

        <Link to="/membership" className="about-cta-btn">
          EXPLORE MEMBERSHIP <span>→</span>
        </Link>
      </section>
    </main>
  );
}

export default About;