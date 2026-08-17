import { useEffect, useState } from "react";
import "./Certification.css";

import certificate1 from "../assets/certificates/certificate1.jpg";
import certificate2 from "../assets/certificates/certificate2.jpg";
import certificate3 from "../assets/certificates/certificate3.jpg";
import certificate4 from "../assets/certificates/certificate4.jpg";

function Certification() {
      const animatedText =
    "Professional knowledge, continuous learning, and certified expertise behind every training session at Evolution Gym Fitness.";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(animatedText.slice(0, index + 1));
      index++;

      if (index === animatedText.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: "01",
      image: certificate1,
      title: "CERTIFICATION 01",
    },
    {
      id: "02",
      image: certificate2,
      title: "CERTIFICATION 02",
    },
    {
      id: "03",
      image: certificate3,
      title: "CERTIFICATION 03",
    },
    {
      id: "04",
      image: certificate4,
      title: "CERTIFICATION 04",
    },
  ];

  return (
    <main className="certification-page">
      <div className="certification-glow certification-glow-one"></div>
      <div className="certification-glow certification-glow-two"></div>

      {/* HERO */}
      <section className="certification-hero">
        <p className="certification-small-title">
          PROFESSIONAL CREDENTIALS
        </p>

        <h1>
          TRAINING WITH <span>EXPERIENCE.</span>
        </h1>

        <p className="certification-animated-text">
            {displayedText}
            <span className="certification-cursor">|</span>
        </p>
      </section>

      {/* CERTIFICATES */}
      <section className="certificate-section">
        <div className="certificate-heading">
          <p>OUR CERTIFICATIONS</p>

          <h2>
            KNOWLEDGE.
            <br />
            <span>EXPERTISE.</span>
          </h2>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <button
              type="button"
              className="certificate-card"
              key={certificate.id}
              onClick={() => setSelectedCertificate(certificate)}
              aria-label={`View ${certificate.title}`}
            >
              <div className="certificate-image-wrapper">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                />

                <div className="certificate-overlay">
                  <span>VIEW CERTIFICATE</span>
                  <strong>+</strong>
                </div>
              </div>

              <div className="certificate-card-bottom">
                <span>{certificate.id}</span>
                <h3>{certificate.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* BOTTOM MESSAGE */}
      <section className="certification-message">
        <p>EVOLUTION GYM FITNESS</p>

        <h2>
          TRAIN SMART.
          <br />
          <span>EVOLVE STRONGER.</span>
        </h2>
      </section>

      {/* FULLSCREEN CERTIFICATE */}
      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="certificate-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate"
            >
              ×
            </button>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="certificate-large-image"
            />

            <p>{selectedCertificate.title}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Certification;