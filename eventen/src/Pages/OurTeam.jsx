import React from "react";

const OurTeam = () => {
  return (
    <>
      {/* INLINE CSS */}
      <style>{`
        .team-hero {
          padding: 80px 0 40px;
          text-align: center;
        }

        .team-hero h1 {
          font-weight: 700;
        }

        .team-hero p {
          max-width: 700px;
          margin: 15px auto 0;
          color: #555;
        }

        .team-section {
          padding: 60px 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 40px;
        }

        .team-card {
          text-align: center;
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
        }

        .team-image {
          width: 100%;
          aspect-ratio: 3 / 4;
          background: #e5e5e5; /* IMAGE PLACEHOLDER */
          margin-bottom: 15px;
        }

        .team-name {
          font-weight: 600;
          margin-bottom: 4px;
        }

        .team-role {
          font-size: 14px;
          color: #198754; /* site green */
        }
      `}</style>

      {/* HERO */}
      <section className="team-hero">
        <div className="container">
          <h1>Our Team</h1>
          <p>
            Meet the people driving Food Security SummitX forward — a diverse
            group of leaders, strategists, and innovators shaping the future of
            global food systems.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="team-section">
        <div className="container">
          <div className="team-grid">

            {/* TEAM MEMBER */}
            <div className="team-card">
              <div className="team-image">{/* IMAGE */}</div>
              <div className="team-name">Shubham</div>
              <div className="team-role">Founder & Visionary Leader</div>
            </div>

            <div className="team-card">
              <div className="team-image"></div>
              <div className="team-name">Team Member Name</div>
              <div className="team-role">Strategy & Partnerships</div>
            </div>

            <div className="team-card">
              <div className="team-image"></div>
              <div className="team-name">Team Member Name</div>
              <div className="team-role">Operations & Growth</div>
            </div>

            <div className="team-card">
              <div className="team-image"></div>
              <div className="team-name">Team Member Name</div>
              <div className="team-role">Marketing & Communications</div>
            </div>

            <div className="team-card">
              <div className="team-image"></div>
              <div className="team-name">Team Member Name</div>
              <div className="team-role">Global Partnerships</div>
            </div>

            <div className="team-card">
              <div className="team-image"></div>
              <div className="team-name">Team Member Name</div>
              <div className="team-role">Technology & Innovation</div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
