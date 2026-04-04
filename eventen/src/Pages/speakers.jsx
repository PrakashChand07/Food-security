import { useEffect, useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";
import "../css/speakers.css";

function Speakers() {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/speakers")
      .then((res) => res.json())
      .then((data) => setSpeakers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Pagehelmet pageTitle="Speakers" />

      <Breadcrumb
        title="Speakers"
        bgImage="assets/images/apply/Pitch.jpg"
        style={{ color: "black" }}
      />

      <section className="speakers-section">
        <div className="container">

          {/* HEADER */}
          <div className="speakers-header">
            <p>SUMMIT SPEAKERS</p>
            <h2 className="speakers-title">
              <span className="title-slash">/</span>
              <span>2025 Speakers</span>
            </h2>
          </div>

          {/* GRID */}
          <div className="speakers-grid">
            {speakers.map((speaker) => (
              <div className="speaker-card" key={speaker._id}>

                {/* IMAGE */}
                <div className="speaker-image">
                  <img
                    src={speaker.image || "https://via.placeholder.com/400x500"}
                    alt={speaker.name}
                  />
                </div>

                {/* CONTENT — NOTHING MISSING */}
                <div className="speaker-meta">
                  <h5 className="speaker-name">
                    {speaker.name}
                  </h5>

                  <p className="speaker-designation">
                    {speaker.designation}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Speakers;
