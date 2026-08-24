import { useState } from "react";
import "./Trainers.css";

import avinash1 from "../assets/trainers/avinash1.jpg";
import avinash2 from "../assets/trainers/avinash2.jpg";
import avinash3 from "../assets/trainers/avinash3.jpg";
import avinash4 from "../assets/trainers/avinash4.jpg";
import avinash5 from "../assets/trainers/avinash5.jpg";
import avinash6 from "../assets/trainers/avinash6.jpg";
import avinash7 from "../assets/trainers/avinash7.jpg";
import avinash8 from "../assets/trainers/avinash8.jpg";
import avinash9 from "../assets/trainers/avinash9.jpg";
import avinash10 from "../assets/trainers/avinash10.jpg";
import avinash11 from "../assets/trainers/avinash11.jpg";

import aishwarya1 from "../assets/trainers/aishwarya1.jpg";
import aishwarya2 from "../assets/trainers/aishwarya2.jpg";

function Trainers() {
  const [gallery, setGallery] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const avinashAchievements = [
    "Mr Dakshina Kannada - 2017",
    "Mr Karnataka Best Poser - 2019",
    "Mr Karnataka - 2021",
    "Mr Karnataka Most Muscular - 2026",
    "Mr South India - 2026",
    "Mr India - 2026",
  ];

  const trainers = {
    avinash: {
      name: "AVINASH P. SUVARNA",
      images: [avinash1, avinash2, avinash3, avinash4, avinash5, avinash6, avinash7, avinash8, avinash9, avinash10, avinash11],
    },
    aishwarya: {
      name: "AISHWARYA SUVARNA",
      images: [aishwarya1, aishwarya2],
    },
  };

  const openGallery = (trainer) => {
    setGallery(trainer);
    setCurrentImage(0);
  };

  const closeGallery = () => {
    setGallery(null);
    setCurrentImage(0);
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === gallery.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? gallery.images.length - 1 : prev - 1
    );
  };

  return (
    <main className="trainers-page">
      <div className="trainers-glow glow-left"></div>
      <div className="trainers-glow glow-right"></div>

      {/* HERO */}
      <section className="trainers-hero">
        <p className="trainer-small-title">MEET THE EXPERTS</p>

        <h1>
          TRAIN WITH THE <span>BEST.</span>
        </h1>

        <p className="trainers-hero-description">
          Meet the dedicated trainers behind Evolution Gym Fitness.
          Experience professional guidance, motivation, and support
          throughout your fitness journey.
        </p>
      </section>

      {/* TRAINERS */}
      <section className="trainers-grid">

        {/* AVINASH */}
        <article
          className="trainer-card"
          onClick={() => openGallery(trainers.avinash)}
        >
          <div className="trainer-image-wrapper">
            <div className="trainer-image-glow"></div>

            <img
              src={avinash1}
              alt="Avinash P. Suvarna"
              className="trainer-image"
            />

            <div className="trainer-image-overlay">
              <span>01</span>
              <p>CLICK TO VIEW PHOTOS</p>
            </div>
          </div>

          <div className="trainer-content">
            <p className="trainer-role">HEAD TRAINER</p>

            <h2>
              AVINASH P. <span>SUVARNA</span>
            </h2>

            <p className="trainer-description">
              A dedicated fitness professional known for discipline,
              experience, and helping clients become stronger and move
              closer to their fitness goals.
            </p>

            <div className="trainer-specialties">
              <span>STRENGTH</span>
              <span>MUSCLE BUILDING</span>
              <span>PERSONAL TRAINING</span>
            </div>

            <div className="achievement-section">
              <div className="achievement-heading">
                <span>★</span>
                <h3>MAJOR ACHIEVEMENTS</h3>
              </div>

              <div className="achievement-list">
                {avinashAchievements.map((achievement, index) => (
                  <div className="achievement-item" key={index}>
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* AISHWARYA */}
        <article
          className="trainer-card"
          onClick={() => openGallery(trainers.aishwarya)}
        >
          <div className="trainer-image-wrapper">
            <div className="trainer-image-glow"></div>

            <img
              src={aishwarya1}
              alt="Aishwarya Suvarna"
              className="trainer-image"
            />

            <div className="trainer-image-overlay">
              <span>02</span>
              <p>CLICK TO VIEW PHOTOS</p>
            </div>
          </div>

          <div className="trainer-content">
            <p className="trainer-role">FITNESS TRAINER</p>

            <h2>
              AISHWARYA <span>SUVARNA</span>
            </h2>

            <p className="trainer-description">
              A dedicated fitness trainer focused on helping members
              build consistency, confidence, strength, and a healthier
              lifestyle through professional guidance.
            </p>

            <div className="trainer-specialties">
              <span>FITNESS</span>
              <span>FAT LOSS</span>
              <span>PERSONAL TRAINING</span>
            </div>

            <div className="trainer-quote">
              <span>“</span>

              <p>
                Stay consistent, trust the process, and keep becoming
                a stronger version of yourself.
              </p>
            </div>

            <div className="trainer-focus">
              <p>TRAINING APPROACH</p>

              <h3>
                DEDICATION. KNOWLEDGE.
                <br />
                <span>REAL TRANSFORMATION.</span>
              </h3>
            </div>
          </div>
        </article>
      </section>

      {/* TRAINING PHILOSOPHY */}
      <section className="training-philosophy">
        <p>OUR TRAINING PHILOSOPHY</p>

        <h2>
          EVERY BODY HAS THE
          <span> POTENTIAL TO EVOLVE.</span>
        </h2>

        <div className="philosophy-points">
          <div>
            <span>01</span>
            <h3>EXPERT GUIDANCE</h3>
            <p>
              Train with proper knowledge and professional support.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>PERSONAL APPROACH</h3>
            <p>
              Guidance focused on your individual fitness goals.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>CONSISTENCY</h3>
            <p>
              Build sustainable habits and progress step by step.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="trainers-cta">
        <p>YOUR TRANSFORMATION STARTS HERE.</p>

        <h2>
          TRAIN. TRANSFORM. <span>EVOLVE.</span>
        </h2>

        <a href="/membership" className="trainers-cta-btn">
          JOIN THE EVOLUTION <span>→</span>
        </a>
      </section>

      {/* PHOTO GALLERY MODAL */}
      {gallery && (
        <div
          className="trainer-gallery-backdrop"
          onClick={closeGallery}
        >
          <div
            className="trainer-gallery"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="gallery-close"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              ×
            </button>

            <div className="gallery-header">
              <p>TRAINER GALLERY</p>
              <h2>{gallery.name}</h2>
            </div>

            <div className="gallery-image-container">
              <img
                src={gallery.images[currentImage]}
                alt={`${gallery.name} ${currentImage + 1}`}
                className="gallery-main-image"
              />

              {gallery.images.length > 1 && (
                <>
                  <button
                    className="gallery-arrow gallery-prev"
                    onClick={previousImage}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>

                  <button
                    className="gallery-arrow gallery-next"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            <div className="gallery-counter">
              {currentImage + 1} / {gallery.images.length}
            </div>

            <div className="gallery-thumbnails">
              {gallery.images.map((image, index) => (
                <button
                  key={index}
                  className={
                    index === currentImage
                      ? "gallery-thumbnail active"
                      : "gallery-thumbnail"
                  }
                  onClick={() => setCurrentImage(index)}
                >
                  <img
                    src={image}
                    alt={`${gallery.name} thumbnail ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Trainers;