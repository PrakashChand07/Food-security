import Breadcrumb from "../Components/Breadcrumb";
import "../css/about.css";
// import Pagehelmet from "../Components/Pagehelmet";

function About() {
  return (
    <div>
      <Breadcrumb
        title="About Food Security SummitX 2026"
        subtitle="Securing the Future of Food, Together"
        bgImage="/assets/images/about/About.jpg"
      />

      <section className="overview pb-0">
        <div className="container">
          <div className="inner-overview pb-10 position-relative border-dashed-bottom-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="overview-left text-center text-lg-start">
                  <div className="overview-title pb-4">

                    <p>
                      <b>Food Security SummitX, organized by VertalisX</b>,
                      stands as a global meeting point for leaders, innovators,
                      and changemakers shaping the future of agriculture and
                      food systems.
                    </p>
                    <p className="mb-2">
                      In 2026, the Summit returns{" "}
                      <b>bigger and bolder in Dubai on 15 or 16 Sep</b>, uniting the
                      entire food value chain — from AgTech innovators and
                      farmers to investors, policymakers, NGOs, and
                      sustainability advocates — under one powerful vision:
                    </p>
                    <p>
                      <b>
                        to revolutionize how the world grows, distributes, and
                        sustains food for all.
                      </b>
                    </p>
                  </div>
                  <div className="overview-event-info pb-6 g-4 text-start position-absolute">
                    <div className="row justify-content-around ">
                      <div className="col-lg-6 col-md-6">
                        <a href="/">
                          <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                            <div className="event-info-icon text-center ">
                              <i
                                className="fa fa-map-marker  bg-pink rounded-circle me-3"
                                style={{ color: "white" }}
                              ></i>
                            </div>
                            <div className="location-info">
                              <h5 className="mb-1">WHERE</h5>
                              <small className="text-muted">Dubai, UAE</small>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <a
                          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Food+Security+SummitX+%7C+Dubai+%7C+2026&dates=20260915T000000Z/20260916T235959Z&details=Food+Security+SummitX+in+Dubai+-+September+15-16,+2026&location=Dubai+-+United+Arab+Emirates"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Add Awesome Event to Google Calendar"
                        >
                          <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                            <div className="event-info-icon text-center">
                              <i
                                className="fa fa-calendar-o  bg-pink rounded-circle me-3"
                                style={{ color: "white" }}
                              ></i>
                            </div>
                            <div
                              className="time-info"
                              style={{ width: "140px" }}
                            >
                              <h5 className="mb-1">WHEN</h5>
                              <small className="text-muted">
                                15 or 16 Sep 2026
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="overview-img">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 p-0 ">
                      <div className="container-img-left mb-2">
                        <div className="img-left-1 float-end w-lg-80">
                          <img
                            className="mb-2 w-100 rounded"
                            src="/assets/images/group/2.jpg"
                            alt="group-image"
                          />
                        </div>
                        <div className="img-left-2">
                          <img
                            src="/assets/images/group/1.jpg"
                            alt="group-image"
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="container-img-right w-lg-75">
                        <img
                          src="/assets/images/group/3.jpg"
                          alt="group-image"
                          className="w-100 rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-conference py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="pink fw-bold mb-2">ABOUT THE SUMMIT</p>
            <h2 className="fw-bold">
              Building on a Legacy of{" "}
              <span className="pink">Global Collaboration</span>
            </h2>
            <p className="mt-3 w-75 mx-auto">
              The 2025 Dubai edition of <strong>Food Security SummitX</strong>{" "}
              marked a historic milestone for the global agriculture community.
              In partnership with the{" "}
              <strong>Ministry of Agriculture – Jordan</strong> and inaugurated
              by <strong>H.E. Dr. Obaid</strong>, Chairman of the Arab Authority
              for Agricultural Investment and Development (AAAID), the event
              brought together <strong>420+ international attendees</strong>,{" "}
              <strong>200+ companies</strong>, and{" "}
              <strong>70+ world-class speakers</strong> — setting a new
              benchmark for dialogue, innovation, and partnership in the food
              and agriculture sector.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="/assets/images/about/OurMission.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Individuals"
                />
                <div className="card-body">
                  <h4 className="mb-2">
                    Our Mission
                  </h4>
                  <p>
                    To unite the global food and agriculture community in driving
                    innovation and collaboration that safeguard humanity’s most
                    vital resource — food. Through powerful B2B connections and
                    actionable solutions, we advance our collective vision of{" "}
                    <strong>‘Food for All’</strong> and shape a sustainable,
                    secure, and equitable future.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="/assets/images/about/OurVision.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Individuals"
                />
                <div className="card-body">
                  <h4 className="mb-2">
                    Our Vision
                  </h4>
                  <p>
                    To become the world’s most influential platform for food
                    security — connecting global leaders, innovators, and
                    enterprises to transform food systems into resilient,
                    sustainable, and future-ready frameworks that ensure food for
                    all. </p>
                </div>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="objectives mb-5">
            <h3 className="text-center mb-4">
              Our <span className="pink">Objectives</span>
            </h3>
            <div className="row g-4">
              {[
                {
                  title: "Drive Innovation",
                  desc: "Showcase breakthrough AgTech, climate-smart, and digital solutions redefining productivity and efficiency.",
                  image: "/assets/images/about/objective/DriveInnovation.jpg",
                },
                {
                  title: "Foster Collaboration",
                  desc: "Create cross-regional alliances linking governments, research institutions, startups, and investors.",
                  image: "/assets/images/about/objective/FosterCollaboration.jpg",
                },
                {
                  title: "Promote Sustainability",
                  desc: "Champion regenerative and circular food systems for environmental resilience.",
                  image: "/assets/images/about/objective/PromoteSustainability.jpg",
                },
                {
                  title: "Accelerate Investment",
                  desc: "Build an active bridge between visionary investors and high-potential agri-enterprises.",
                  image: "/assets/images/about/objective/AccelerateInvestment.jpg",
                },
                {
                  title: "Recognize Excellence",
                  desc: "Celebrate outstanding contributions through our global awards and recognition platform.",
                  image: "/assets/images/about/objective/RecognizeExcellence.jpg",
                },
                {
                  title: "Enable Knowledge Exchange",
                  desc: "Facilitate high-impact dialogues on policy, water management, supply chains, and food resilience.",
                  image: "/assets/images/about/objective/EnableKnowledgeExchange.jpg",
                },
              ].map((obj, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <div className="bg-white rounded shadow-sm h-100 overflow-hidden">
                    <img src={obj.image} alt={obj.title} className="w-100" />
                    <div className="p-4">
                      <h5 className="pink">{obj.title}</h5>
                      <p className="mb-0">{obj.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CEO Vision */}
          <div className="ceo-vision mb-5">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center">
                <h3 className="mb-3">
                  Our CEO’s <span className="pink">Vision</span>
                </h3>
                <p>
                  At the heart of <strong>Food Security SummitX</strong> lies{" "}
                  <strong>Shubham’s Vision</strong> — the guiding belief of our
                  founder that collaboration is the key to human progress. It
                  symbolizes an unwavering commitment to building bridges between
                  technology and tradition, business and purpose, nations and
                  communities.
                </p>
                <p>
                  Shubham’s vision inspires the Summit’s mission: to unite global
                  voices in shaping a food-secure world where innovation serves
                  humanity, not just markets.
                </p>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src="/assets/images/about/Shubham.jpg"
                  className="w-50 rounded shadow-sm"
                  alt="Our CEO's Vision"
                />
              </div>
            </div>
          </div>

          {/* 2026 Edition */}
          <div
            className="edition-2026 mb-5 p-4"
            style={{
              backgroundImage: 'url("/assets/images/divisions/purpose.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-center mb-4">
              2026 Edition – <span className="pink">Expanding Horizons</span>
            </h3>
            <p className="text-center w-75 mx-auto">
              The Dubai edition introduces a larger, more inclusive experience
              featuring:
            </p>
            <ul
              className="text-start w-75 mx-auto"
              style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
            >
              <li>Global Country Pavilions highlighting regional strengths.</li>
              <li>
                Thematic Zones across AgTech, Sustainable Farming, Climate
                Action, Food Logistics, and Policy.
              </li>
              <li>
                Investor & Pitch Lounges connecting capital with innovation.
              </li>
              <li>
                Excellence in Food Security Awards recognizing transformative
                impact.
              </li>
              <li>
                Networking Arenas designed for actionable partnerships and
                deal-making.
              </li>
            </ul>
            <p className="text-center mt-3">
              Every session, partnership, and dialogue at{" "}
              <strong>Food Security SummitX 2026</strong> is designed to drive
              measurable outcomes — from policy reform and technology adoption
              to global investment acceleration.
            </p>
          </div>

          {/* About VertalisX */}
          <div className="about-vertalisx text-center">
            <h3 className="mb-3">
              About <span className="pink">VertalisX</span>
            </h3>
            <p className="w-75 mx-auto">
              VertalisX is a global event company creating transformative
              platforms that drive innovation, collaboration, and growth.
              Focused on delivering world-class conferences and exhibitions,
              VertalisX connects leaders, innovators, and investors to shape the
              future of key industries.
            </p>
            <p className="w-75 mx-auto">
              Its flagship events include <strong>Food Security SummitX</strong>
              , addressing global food challenges;
              <strong> MoneySummitX</strong>, advancing finance and investment;
              and <strong>EnergySummitX</strong>, promoting sustainable energy
              solutions. With a commitment to excellence and impact, VertalisX
              empowers industries to evolve and thrive in a rapidly changing
              world.
            </p>
          </div>
        </div>
      </section>

      <section className="ticket position-relative">
        <div className="overlay"></div>
        <div className="container">
          <div className="ticket-inner w-lg-75 mx-auto text-center position-relative text-white">
            <div className="ticket-title">
              <h1 className="text-white mb-2">
                JOIN THE <span className="pink">MOVEMENT</span>
              </h1>
              <h5 className="text-white mb-1">
                Food Security SummitX is more than an event — it’s a collective
                mission to nourish the world responsibly.
              </h5>
            </div>
            <div className="ticket-info">
              <p>
                Join us in Dubai to connect with global leaders, exchange ideas,
                and be part of the transformation that ensures food security for
                every generation.
              </p>
              <div className="ticket-button">
                <a className="btn btn1" href="Booknow">
                  Together, we cultivate the future.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Ticketbook Section end--*/}
    </div>
  );
}

export default About;
