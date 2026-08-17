import { Link } from "react-router-dom";
import "./Membership.css";

function Membership() {
  const generalPlans = [
    {
      duration: "MONTHLY",
      original: "₹1000",
      price: "₹900",
    },
    {
      duration: "3 MONTHS",
      original: "₹2700",
      price: "₹2400",
    },
    {
      duration: "6 MONTHS",
      original: "₹5000",
      price: "₹4500",
    },
    {
      duration: "YEARLY",
      original: "₹9500",
      price: "₹8000",
    },
  ];

  const studentsPlans = [
    {
      duration: "MONTHLY",
      original: "₹900",
      price: "₹800",
    },
    {
      duration: "3 MONTHS",
      original: "₹2400",
      price: "₹2200",
    },
    {
      duration: "6 MONTHS",
      original: "₹4500",
      price: "₹4000",
    },
    {
      duration: "YEARLY",
      original: "₹8500",
      price: "₹7000",
    },
  ];

  const extras = [
    {
      title: "ADMISSION",
      category: "GENERAL",
      original: "₹500",
      price: "₹300",
    },
    {
      title: "ADMISSION",
      category: "STUDENTS & LADIES",
      original: "₹250",
      price: "₹150",
    },
  ];

  return (
    <main className="membership-page">
      {/* BACKGROUND */}
      <div className="membership-glow membership-glow-one"></div>
      <div className="membership-glow membership-glow-two"></div>

      <div className="membership-grid-bg"></div>

      {/* HERO */}
      <section className="membership-hero">
        <div className="membership-label">
          <span></span>
          MEMBERSHIP PLANS
          <span></span>
        </div>

        <h1>
          INVEST IN YOUR
          <br />
          <span>EVOLUTION.</span>
        </h1>

        <p className="membership-intro">
          Choose the membership that fits your goals. Train with
          professional guidance, quality equipment, and a motivating
          environment at Evolution Gym Fitness.
        </p>
      </section>

      {/* GENERAL MEMBERSHIP */}
      <section className="pricing-section">
        <div className="pricing-section-heading">
          <div>
            <p>01 / MEMBERSHIP</p>
            <h2>
              <span>GENERAL</span>
              MEMBERSHIP
            </h2>
          </div>

          <div className="pricing-heading-line"></div>
        </div>

        <div className="pricing-grid">
          {generalPlans.map((plan, index) => (
            <div
              className={`price-card ${
                index === 3 ? "featured-price-card" : ""
              }`}
              key={plan.duration}
            >
              {index === 3 && (
                <div className="popular-badge">BEST VALUE</div>
              )}

              <div className="price-number">
                0{index + 1}
              </div>

              <h3>{plan.duration}</h3>

              <div className="original-price">
                {plan.original}
              </div>

              <div className="offer-label">OFFER PRICE</div>

              <div className="offer-price">
                {plan.price}
              </div>

              <div className="price-bottom">
                <span>EVOLUTION GYM FITNESS</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STUDENTS & LADIES */}
      <section className="pricing-section students-section">
        <div className="pricing-section-heading">
          <div>
            <p>02 / SPECIAL PLANS</p>
            <h2>
              <span>STUDENTS</span> &<br />
              LADIES
            </h2>
          </div>

          <div className="pricing-heading-line"></div>
        </div>

        <div className="pricing-grid">
          {studentsPlans.map((plan, index) => (
            <div className="price-card" key={plan.duration}>
              <div className="price-number">
                0{index + 1}
              </div>

              <h3>{plan.duration}</h3>

              <div className="original-price">
                {plan.original}
              </div>

              <div className="offer-label">OFFER PRICE</div>

              <div className="offer-price">
                {plan.price}
              </div>

              <div className="price-bottom">
                <span>STUDENTS & LADIES</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRAS */}
      <section className="extras-section">
        <div className="extras-heading">
          <p>03 / EXTRAS</p>

          <h2>
            ADMISSION
            <span>FEES.</span>
          </h2>
        </div>

        <div className="extras-grid">
          {extras.map((item) => (
            <div className="extra-card" key={item.category}>
              <div className="extra-icon">+</div>

              <div className="extra-content">
                <p>{item.category}</p>
                <h3>{item.title}</h3>
              </div>

              <div className="extra-prices">
                <span className="extra-original">
                  {item.original}
                </span>

                <strong>{item.price}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="membership-benefits">
        <div className="benefits-heading">
          <p>WHY EVOLUTION?</p>

          <h2>
            MORE THAN
            <br />
            <span>A MEMBERSHIP.</span>
          </h2>
        </div>

        <div className="benefits-grid">
          <div className="benefit">
            <span>01</span>
            <h3>EXPERT GUIDANCE</h3>
            <p>
              Train with professional guidance and experienced
              trainers who understand your fitness journey.
            </p>
          </div>

          <div className="benefit">
            <span>02</span>
            <h3>QUALITY EQUIPMENT</h3>
            <p>
              Access quality gym equipment designed for strength,
              muscle building, cardio, and overall fitness.
            </p>
          </div>

          <div className="benefit">
            <span>03</span>
            <h3>DIET GUIDANCE</h3>
            <p>
              Get practical guidance to help support your training,
              nutrition, and transformation goals.
            </p>
          </div>

          <div className="benefit">
            <span>04</span>
            <h3>PERSONAL TRAINING</h3>
            <p>
              Receive focused support and structured training to
              help you stay consistent and improve.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT / LOCATION */}
      <section className="membership-contact">
        <div className="contact-top">
          <p>READY TO START?</p>

          <h2>
            START YOUR
            <br />
            <span>EVOLUTION.</span>
          </h2>

          <p className="contact-description">
            Visit Evolution Gym Fitness or contact us to know more
            about membership and training.
          </p>
        </div>

        <div className="contact-grid">
          {/* LOCATION */}
          <div className="contact-card">
            <div className="contact-card-number">01</div>

            <div>
              <p>VISIT US</p>

              <h3>OUR LOCATION</h3>

              <address>
                SAGAR NIDHI COMPLEX,
                <br />
                2ND FLOOR, POST KULAI,
                <br />
                <strong>HOSABETTU - 575019</strong>
              </address>
            </div>
          </div>

          {/* PHONE */}
          <a
            href="tel:7760024061"
            className="contact-card contact-link"
          >
            <div className="contact-card-number">02</div>

            <div>
              <p>CALL US</p>

              <h3>PHONE</h3>

              <strong className="contact-phone">
                7760024061
              </strong>
            </div>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/evolutiongymfitness_hosabettu"
            target="_blank"
            rel="noreferrer"
            className="contact-card contact-link"
          >
            <div className="contact-card-number">03</div>

            <div>
              <p>FOLLOW US</p>

              <h3>INSTAGRAM</h3>

              <strong className="instagram-name">
                @EVOLUTIONGYMFITNESS_HOSABETTU
              </strong>
            </div>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="membership-cta">
        <div className="cta-line"></div>

        <p>TRAIN. TRANSFORM. EVOLVE.</p>

        <h2>
          YOUR JOURNEY
          <br />
          STARTS <span>NOW.</span>
        </h2>

        <div className="cta-buttons">
          <a href="tel:7760024061" className="membership-primary-btn">
            CALL TO JOIN
            <span>→</span>
          </a>

          <Link to="/trainers" className="membership-secondary-btn">
            MEET OUR TRAINERS
          </Link>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div className="membership-footer">
        <span>EVOLUTION GYM FITNESS</span>

        <span>TRAIN. TRANSFORM. EVOLVE.</span>

        <span>HOSABETTU - 575019</span>
      </div>
    </main>
  );
}

export default Membership;