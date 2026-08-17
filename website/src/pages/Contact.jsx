import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal");

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

  const googleMapsLink =
    "https://maps.app.goo.gl/E2bf1ci3HiBhK7747";

  return (
    <main className="contact-page">
      {/* BACKGROUND GLOWS */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      {/* HERO */}
      <section className="contact-hero contact-reveal">
        <p className="contact-small-title">GET IN TOUCH</p>

        <h1>
          LET'S START YOUR <span>EVOLUTION.</span>
        </h1>

        <p className="contact-hero-text">
          Have questions about membership, personal training, or your
          fitness journey? Get in touch with Evolution Gym Fitness
          and take the first step toward becoming stronger.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-container contact-reveal">
        {/* CONTACT INFORMATION */}
        <div className="contact-info">
          <div className="contact-section-label">
            <span></span>
            CONTACT US
          </div>

          <h2>
            YOUR FITNESS
            <br />
            <span>STARTS HERE.</span>
          </h2>

          <p className="contact-description">
            Whether you are starting your fitness journey, looking for
            personal training, or simply want to know more about our gym,
            we are here to help.
          </p>

          {/* PHONE */}
          <div className="contact-detail">
            <div className="contact-icon">☎</div>

            <div>
              <span>CALL US</span>
              <a href="tel:+919448511174">
                +91 94485 11174
              </a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="contact-detail">
            <div className="contact-icon">✉</div>

            <div>
              <span>EMAIL US</span>
              <a href="mailto:evolutiongymfitness@gmail.com">
                evolutiongymfitness@gmail.com
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="contact-detail">
            <div className="contact-icon">⌖</div>

            <div>
              <span>OUR LOCATION</span>
              <p>EVOLUTION GYM FITNESS</p>
              <p>Visit us at our gym location.</p>
            </div>
          </div>
        </div>

        {/* LOCATION CARD */}
        <div className="contact-location-card">
          <div className="location-card-glow"></div>

          <div className="location-number">01</div>

          <p className="location-label">FIND US</p>

          <h3>
            EVOLUTION
            <br />
            <span>GYM FITNESS</span>
          </h3>

          <div className="location-line"></div>

          <p className="location-text">
            Ready to train, transform, and evolve?
            <br />
            Find our gym and visit us today.
          </p>

          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            VIEW LOCATION ON GOOGLE MAPS
            <span>→</span>
          </a>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="contact-quick contact-reveal">
        <div className="quick-heading">
          <p>WHY WAIT?</p>

          <h2>
            TAKE THE FIRST
            <br />
            <span>STEP.</span>
          </h2>
        </div>

        <div className="quick-actions">
          <a href="tel:+919448511174" className="quick-card">
            <span className="quick-number">01</span>

            <div>
              <h3>CALL US</h3>
              <p>Speak with our team</p>
            </div>

            <strong>→</strong>
          </a>

          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="quick-card"
          >
            <span className="quick-number">02</span>

            <div>
              <h3>VISIT US</h3>
              <p>Open our gym location</p>
            </div>

            <strong>→</strong>
          </a>

          <Link to="/membership" className="quick-card">
            <span className="quick-number">03</span>

            <div>
              <h3>JOIN US</h3>
              <p>Explore membership</p>
            </div>

            <strong>→</strong>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-cta contact-reveal">
        <p>EVOLUTION GYM FITNESS</p>

        <h2>
          TRAIN.
          <br />
          TRANSFORM.
          <br />
          <span>EVOLVE.</span>
        </h2>

        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-cta-button"
        >
          FIND OUR GYM
          <span>→</span>
        </a>
      </section>
    </main>
  );
}

export default Contact;