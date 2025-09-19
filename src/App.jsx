import { useState } from "react";
import logo from "./assets/peri-logo.png";

const services = [
  {
    title: "Product Strategy & Roadmapping",
    description:
      "Validation sprints that define the right scope, milestones, and metrics before a single sprint kicks off."
  },
  {
    title: "Mobile & Web App Development",
    description:
      "Modern JavaScript, native integrations, and accessible UX patterns tuned for production-scale performance."
  },

  {
    title: "Cloud Infrastructure & Support",
    description:
      "Deployments, observability, and ongoing iteration so your product keeps improving after launch day."
  }
];

const highlights = [
  "TriggerFeed keeps the 2A community informed in real time.",
  "Lean senior team across engineering, product, and delivery.",
  "Transparent roadmaps, weekly demos, and measurable outcomes."
];

function App() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("submitted");
    event.target.reset();
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="peri-page">
      <header className="hero">
        <div className="hero__visual">
          <img src={logo} alt="Peri Media Group" className="hero__logo" />
        </div>
        <div className="hero__content">
          <p className="hero__eyebrow">Full-stack product studio</p>
          <h1 className="hero__title">TriggerFeed &amp; whatever comes next</h1>
          <p className="hero__subtitle">
            Peri Media Group builds and scales digital products. TriggerFeed is our
            flagship platform for the 2A community.
          </p>
          <div className="hero__cta">
            <a className="button button--primary" href="http://triggerfeed.com" target="_blank">
              TriggerFeed.com
            </a>
            <a className="button button--ghost" href="tel:8643729954">
              Call 864-372-9954
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="section section--about" aria-labelledby="about">
          <div className="section__content">
            <h2 id="about" className="section__title">
              From prototype to production
            </h2>
            <p className="section__lead">
              We turn ideas into reality.
            </p>
            <ul className="section__highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--services" aria-labelledby="services">
          <div className="section__content">
            <h2 id="services" className="section__title">
              We do stuff
            </h2>
            <div className="services">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section section--contact"
          aria-labelledby="contact"
          id="contact"
        >
          <div className="section__content section__content--grid">
            <div className="contact-details">
              <h2 id="contact" className="section__title">
                Tell us something
              </h2>
              <p className="section__lead">
                Have an idea?  Dream?  Tell us about it, maybe we can help.
              </p>
              <dl className="contact-info">
                <div className="contact-info__row">
                  <dt>Phone</dt>
                  <dd>
                    <a href="tel:8643729954">864-372-9954</a>
                  </dd>
                </div>
                <div className="contact-info__row">
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:hello@perimediagroup.com">hello@perimediagroup.com</a>
                  </dd>
                </div>
              </dl>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="How should we address you?"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="we@yourcompany.com"
                  required
                  inputMode="email"
                  autoComplete="email"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Project details</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Share context, key features, and timelines."
                  rows={4}
                  required
                />
              </div>

              <div className="form-field form-field--actions">
                <button type="submit" className="button button--primary">
                  Submit inquiry
                </button>
                <p
                  className="form-status"
                  role="status"
                  aria-live="polite"
                  data-state={formStatus}
                >
                  {formStatus === "submitted"
                    ? "Thanks! We'll reach out shortly."
                    : ""}
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <small>&copy; {currentYear} Peri Media Group. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
