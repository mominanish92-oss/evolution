
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h2>
            EVOLUTION <span>GYM FITNESS</span>
          </h2>

          <p>
            Train with discipline, transform with consistency, and become
            the strongest version of yourself.
          </p>

          <div className="footer-motto">
            TRAIN. TRANSFORM. <span>EVOLVE.</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>QUICK LINKS</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/certification">Certification</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h3>OUR SERVICES</h3>

          <p>Personal Training</p>
          <p>Strength Training</p>
          <p>Muscle Building</p>
          <p>Fat Loss</p>
          <p>Diet Guidance</p>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>CONTACT US</h3>

          <p>
            <span>📍</span> Evolution Gym Fitness
          </p>

          <p>
            <span>📞</span> Contact us for membership details
          </p>

          <p>
            <span>✉️</span> Your fitness journey starts here
          </p>

          <Link to="/contact" className="footer-contact-btn">
            CONTACT US →
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 Evolution Gym Fitness. All Rights Reserved.
        </p>

        <p>
          Built for <span>Evolution.</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

