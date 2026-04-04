import React from "react";

const EventPartners = () => {
  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        .ep-hero {
          padding: 90px 0 50px;
          text-align: center;
        }

        .ep-hero h1 {
          font-weight: 700;
          margin-bottom: 10px;
        }

        .ep-hero p {
          max-width: 820px;
          margin: 10px auto 0;
          color: #444;
          font-size: 16px;
        }

        .ep-section {
          padding: 70px 0;
        }

        .ep-section h2 {
          font-weight: 600;
          margin-bottom: 15px;
        }

        .ep-section p {
          max-width: 900px;
          color: #444;
        }

        .logo-grid {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 40px;
          align-items: center;
        }

        .logo-card {
          height: 110px;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .logo-card:hover {
          transform: translateY(-6px);
        }

        .logo-text {
          font-size: 14px;
          color: #777;
        }

        .ep-cta {
          text-align: center;
          padding: 70px 20px;
        }

        .ep-cta h3 {
          margin-bottom: 15px;
        }

        .cta-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 28px;
          background: #198754;
          color: #fff;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>

      {/* HERO */}
      <section className="ep-hero">
        <div className="container">
          <h1>The Alliance Behind the Event</h1>
          <p>
            The event partners collaborating to shape the future of food security
            at Food Security SummitX.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="ep-section">
        <div className="container">
          <h2>Building Impact Through Event Partnerships</h2>
          <p>
            Food Security SummitX is powered by a strong network of event partners —
            including exhibitors, sponsors, media partners, technology providers,
            and industry collaborators — all working together to deliver a
            world-class platform for innovation, dialogue, and business exchange.
          </p>
          <p>
            These event partners play a critical role in shaping the SummitX
            experience — enabling knowledge sharing, showcasing solutions, and
            fostering meaningful connections across the global agri-food ecosystem.
          </p>
        </div>
      </section>

      {/* EVENT PARTNERS GRID */}
      <section className="ep-section">
        <div className="container">
          <h2>Event Partners & Participating Organizations</h2>
          <p>
            Exhibitors, sponsors, media partners, and collaborating organizations
            supporting Food Security SummitX 2026.
          </p>

          <div className="logo-grid">
            <div className="logo-card"><span className="logo-text">Event Partner</span></div>
            <div className="logo-card"><span className="logo-text">Event Partner</span></div>
            <div className="logo-card"><span className="logo-text">Event Partner</span></div>
            <div className="logo-card"><span className="logo-text">Event Partner</span></div>
            <div className="logo-card"><span className="logo-text">Event Partner</span></div>
            <div className="logo-card"><span className="logo-text">Event Partner</span></div>
            <div className="logo-card"><span className="logo-text">Event Partner</span></div>
            <div className="logo-card"><span className="logo-text">Event Partner</span></div>
          </div>
        </div>
      </section>

      {/* STRONGER TOGETHER */}
      <section className="ep-section">
        <div className="container">
          <h2>Stronger Together</h2>
          <p>
            Every event partner plays a vital role in strengthening the SummitX
            ecosystem — supporting collaboration, innovation, and business
            connections that extend far beyond the event itself. Together, these
            partnerships help transform conversations into action and ideas into
            measurable impact.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="ep-cta">
        <div className="container">
          <h3>Be part of the event ecosystem driving the future of food.</h3>
          <a href="/register" className="cta-btn">Register Now</a>
        </div>
      </section>
    </>
  );
};

export default EventPartners;
