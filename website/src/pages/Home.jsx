import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import gymLogo from "../assets/logo/logo.jpg";
import avinashImage from "../assets/trainers/avinash3.jpg";

function Home() {
  const messages = [
    "Established on March 1, 2023.",
    "Professional training with expert guidance.",
    "Personal training and diet guidance.",
    "Strength. Discipline. Transformation.",
    "Train hard. Stay consistent. Evolve every day.",
  ];

  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentMessage.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex === currentMessage.length) {
            setTimeout(() => setDeleting(true), 1800);
          }
        } else {
          setText(currentMessage.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex === 0) {
            setDeleting(false);
            setMessageIndex(
              (prev) => (prev + 1) % messages.length
            );
          }
        }
      },
      deleting ? 35 : 65
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, messageIndex]);

  return (
    <section className="premium-home">

      {/* =================================
          HERO LOGO BACKGROUND
      ================================= */}

      <div
        className="hero-logo-background"
        style={{
          backgroundImage: `url(${gymLogo})`,
        }}
      ></div>

      {/* SLIGHT DARK OVERLAY */}
      <div className="hero-logo-overlay"></div>

      {/* =================================
          BACKGROUND EFFECTS
      ================================= */}

      <div className="home-glow glow-one"></div>
      <div className="home-glow glow-two"></div>

      <div className="grid-overlay"></div>

      {/* =================================
          MAIN HERO CONTENT
      ================================= */}

      <div className="home-container">

        {/* LEFT CONTENT */}

        <div className="home-left">

          <div className="welcome-box">
            <span></span>
            WELCOME TO
          </div>

          <h1>
            EVOLUTION
            <br />
            <span>GYM FITNESS</span>
          </h1>

          <p className="main-tagline">
            TRAIN. TRANSFORM. <strong>EVOLVE.</strong>
          </p>

          <p className="home-description">
            A place where discipline meets dedication. Train with
            professional guidance, quality equipment, personal training,
            and expert diet support.
          </p>

          {/* TYPING MESSAGE */}

          <div className="typing-box">
            <span className="typing-icon">⚡</span>

            <span>{text}</span>

            <span className="cursor">|</span>
          </div>

          {/* BUTTONS */}

          <div className="home-buttons">

            <Link to="/membership" className="primary-btn">
              JOIN THE EVOLUTION
              <span>→</span>
            </Link>

            <Link to="/about" className="secondary-btn">
              EXPLORE OUR GYM
            </Link>

          </div>

          {/* STATS */}

          <div className="home-stats">

            <div className="stat">
              <h3>2023</h3>
              <p>ESTABLISHED</p>
            </div>

            <div className="stat-line"></div>

            <div className="stat">
              <h3>2</h3>
              <p>EXPERT TRAINERS</p>
            </div>

            <div className="stat-line"></div>

            <div className="stat">
              <h3>4+</h3>
              <p>YEARS TRAINING</p>
            </div>

          </div>

        </div>

        {/* =================================
            RIGHT TRAINER IMAGE
        ================================= */}

        <div className="home-right">

          <div className="trainer-circle"></div>

          <div className="image-glow"></div>

          <img
            src={avinashImage}
            alt="Evolution Gym Fitness Trainer"
            className="trainer-main-image"
          />

          {/* TRAINER INFO */}

          <div className="trainer-info-card">

            <div className="small-line"></div>

            <div>
              <p>CHAMPION TRAINER</p>
              <h3>AVINASH P. SUVARNA</h3>
            </div>

          </div>

          {/* CHAMPION BADGE */}

          <div className="champion-badge">

            <span>★</span>

            <div>
              <small>PROUDLY LED BY</small>
              <strong>MR INDIA</strong>
            </div>

          </div>

        </div>

      </div>

      {/* =================================
          BOTTOM FITNESS MARQUEE
      ================================= */}

      <div className="fitness-strip">

        <div>
          STRENGTH TRAINING
          <span>✦</span>

          PERSONAL TRAINING
          <span>✦</span>

          DIET GUIDANCE
          <span>✦</span>

          CARDIO
          <span>✦</span>

          MUSCLE BUILDING
          <span>✦</span>

          TRANSFORM YOURSELF
        </div>

      </div>

      {/* =================================
          LOGO WATERMARK
      ================================= */}

      <img
        src={gymLogo}
        alt="Evolution Gym Fitness Logo"
        className="home-logo-watermark"
      />

    </section>
  );
}

export default Home;