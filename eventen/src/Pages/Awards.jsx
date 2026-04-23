import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Awards() {
  return (
    
    <div>
      <Pagehelmet pageTitle="Honoring the Trailblazers Who Feed the Future" />
      <Breadcrumb
        title="Honoring the Trailblazers Who Feed the Future"
        subtitle="Recognizing the visionaries, innovators, and leaders driving global transformation in food security and sustainable agriculture."
        bgImage="assets/images/apply/awards.jpg"
      />

      <section className="awards-intro py-6">
        <div className="container text-center w-lg-75">
          <h2 className="mb-3">Food Security SummitX 2026 Awards</h2>
          <p className="mb-1 pink">
            Recognizing Those Who Redefine the Future of Food
          </p>
          <br />
          <p>
            At <strong>Food Security SummitX 2026 – Dubai</strong>, recognition
            is not given — it’s earned. The SummitX Awards celebrate those whose
            work ignites progress, inspires transformation, and brings the world
            closer to sustainable food security. This is where leadership meets
            legacy, and innovation becomes impact.
          </p>
        </div>
      </section>
      {/* -- Introduction Section end -- */}

      {/* -- Purpose Section start -- */}
      <section className="awards-purpose bg-lightgrey py-6">
        <div className="container w-lg-75">
          <div className="row align-items-center g-4">
            {/* Left: Text */}
            <div
              className="col-md-12 text-start text-white p-5 rounded"
              style={{
                backgroundImage: 'url("assets/images/divisions/purpose.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2 className="mb-3">Our Purpose</h2>
              <p>
                These awards honor individuals and organizations creating real,
                scalable change across the food and agriculture ecosystem. From
                cutting-edge AgTech breakthroughs to community-driven solutions,
                each award reflects our shared global mission —{" "}
                <strong>Food for All</strong>.
              </p>
            </div>

            {/* Right: Image */}
            {/* <div className="col-md-6 text-center">
              <img
                src="assets/images/awards/purpose.jpg"
                alt="Awards Purpose"
                className="img-fluid rounded-4 shadow"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* -- Purpose Section end -- */}

      {/* -- Award Divisions Section start -- */}
      <section className="awards-divisions py-6">
        <div className="container w-lg-75 text-center">
          <h2 className="mb-4">
            <span className="pink">Award</span> Divisions
          </h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/divisions/1.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Enterprises"
                />
                <div className="card-body">
                  <h4 className="mb-2">
                    Excellence in Food Security – Enterprises
                  </h4>
                  <p>
                    Celebrating organizations whose innovations and strategies
                    have advanced productivity, sustainability, and resilience
                    within the global agri-food landscape.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/divisions/2.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Individuals"
                />
                <div className="card-body">
                  <h4 className="mb-2">
                    Excellence in Food Security – Individuals
                  </h4>
                  <p>
                    Honoring exceptional leaders whose vision, research, or
                    influence has transformed agricultural practices, inspired
                    innovation, or improved food system resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4">
            (Additional thematic awards may spotlight climate-smart farming,
            digital transformation, circular economy, and sustainable community
            impact.)
          </p>
        </div>
      </section>
      {/* -- Award Divisions Section end -- */}

      {/* -- Why Nominate Section start -- */}
      <section className="why-nominate bg-lightgrey py-6">
        <div className="container w-lg-75 text-center">
          <h2 className="mb-4">Why Nominate?</h2>
          <ul
            className="list-unstyled text-start mx-auto w-md-75"
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
          >
            <li>
              <strong>Global Recognition:</strong> Be honored on an
              international platform before ministers, investors, and 750+
              delegates from 50+ countries.
            </li>
            <li>
              <strong>Thought Leadership:</strong> Establish yourself or your
              organization as a driving force in sustainable agriculture.
            </li>
            <li>
              <strong>Strategic Networking:</strong> Engage with world leaders,
              investors, and innovators throughout the Summit.
            </li>
            <li>
              <strong>Media Visibility:</strong> Receive coverage across global
              press and SummitX channels.
            </li>
            <li>
              <strong>Legacy & Inspiration:</strong> Inspire others through your
              achievements and leadership.
            </li>
          </ul>
        </div>
      </section>
      {/* -- Why Nominate Section end -- */}

      {/* -- Who Can Nominate Section start -- */}
    <section className="who-can-nominate py-6">
  <div className="container w-lg-75 text-center">
    <h2 className="mb-3">Who Can Nominate?</h2>
    <p>
      The Food Security SummitX Awards are open to every sector
      contributing to food security, innovation, and sustainable growth:
    </p>

    <div className="position-relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {[
          {
            name: "Visionaries, researchers, policymakers, entrepreneurs, and changemakers.",
            img: "assets/images/nominate/Individuals.jpg",
          },
          {
            name: "Businesses pioneering technology, sustainability, and scalable impact.",
            img: "assets/images/nominate/organizations.jpg",
          },
          {
            name: "AgTech innovators, emerging disruptors, and climate-smart pioneers.",
            img: "assets/images/nominate/startups.jpg",
          },
          {
            name: "Social and environmental organizations championing inclusivity and resilience.",
            img: "assets/images/nominate/ngos.jpg",
          },
          {
            name: "Ministries and programs advancing policy, investment, and innovation.",
            img: "assets/images/nominate/govtAgencies.jpg",
          },
          {
            name: "Universities and think tanks advancing knowledge and applied science.",
            img: "assets/images/nominate/academic.jpg",
          },
          {
            name: "Grassroots movements empowering farmers and local ecosystems.",
            img: "assets/images/nominate/initiative.jpg",
          },
        ].map((category, i) => (
          <SwiperSlide key={i}>
            <div className="card border-0 shadow-sm text-center h-100 p-3">
              <img
                src={category.img}
                alt={category.name}
                className="img-fluid rounded-3 mb-3"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <p>
                <b>{category.name}</b>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles */}
      <style>
        {`
        .swiper-button-next,
        .swiper-button-prev {
          color: #13812a !important;
          top: 45%;
          transform: translateY(-50%);
          width: 35px;
          height: 35px;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background-color: rgba(19, 129, 42, 0.4) !important;
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #13812a !important;
        }

        @media (max-width: 767px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 35px;
            height: 35px;
          }
        }
      `}
      </style>
    </div>

    <p className="mt-4">
      (Both self-nominations and third-party nominations are welcome.)
    </p>
  </div>
</section>
      {/* -- Who Can Nominate Section end -- */}

      {/* -- How to Nominate Section start -- */}
      <div
        className="col-lg-12 px-4 mb-2 mx-auto"
        style={{ maxWidth: "1100px" }}
      >
        <div className="faq-general">
          <div className="section-title pb-3 text-center text-lg-start">
            <p className="mb-1 pink">AWARD NOMINATIONS</p>
            <h2 className="mb-2 text-white">
              HOW THE <span className="pink">NOMINATION PROCESS</span> WORKS
            </h2>
            <p className="text-white">
              Every recognition at <b>Food Security SummitX 2026</b> begins with
              a story — your story. Here’s how your journey from nomination to
              global recognition unfolds.
            </p>
          </div>

          <div
            className="faq-accordion p-4 mb-5 bg-white rounded"
            style={{ marginLeft: "-20px" }}
          >
            <div className="accordion accordion-faq" id="accordionNomination">
              {/* 1️⃣ Submit Your Nomination */}
              <div className="accordion-item">
                <p className="accordion-header p-4">
                  <button
                    className="accordion-button collapsed fw-semibold p-0"
                    style={{ fontSize: "19px" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNominationOne"
                    aria-expanded="false"
                    aria-controls="collapseNominationOne"
                  >
                    Step 1. Submit Your Nomination
                  </button>
                </p>
                <div
                  id="collapseNominationOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionNomination"
                >
                  <div className="accordion-body bg-lightgrey p-6">
                    Complete the online form with accurate details about your
                    company or individual achievements. This helps our team
                    understand your impact, innovation, and leadership within
                    the agriculture and food security ecosystem.
                  </div>
                </div>
              </div>

              {/* 2️⃣ Initial Review & Connection */}
              <div className="accordion-item">
                <p className="accordion-header p-4">
                  <button
                    className="accordion-button collapsed fw-semibold p-0"
                    style={{ fontSize: "19px" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNominationTwo"
                    aria-expanded="false"
                    aria-controls="collapseNominationTwo"
                  >
                    Step 2. Initial Review & Connection
                  </button>
                </p>
                <div
                  id="collapseNominationTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionNomination"
                >
                  <div className="accordion-body bg-lightgrey p-6">
                    Once received, our SummitX Awards Team reviews your
                    submission and connects with you personally. During this
                    interaction, we’ll share the complete list of award titles
                    that align best with your profile or organization.
                  </div>
                </div>
              </div>

              {/* 3️⃣ Select Your Award Titles */}
              <div className="accordion-item">
                <p className="accordion-header p-4">
                  <button
                    className="accordion-button collapsed fw-semibold p-0"
                    style={{ fontSize: "19px" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNominationThree"
                    aria-expanded="false"
                    aria-controls="collapseNominationThree"
                  >
                    Step 3. Select Your Award Titles
                  </button>
                </p>
                <div
                  id="collapseNominationThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionNomination"
                >
                  <div className="accordion-body bg-lightgrey p-6">
                    You’ll then select one or two categories that reflect your
                    accomplishments and vision. Our team will provide clarity on
                    the process and further requirements to proceed ahead with
                    the nomination process.
                  </div>
                </div>
              </div>

              {/* 4️⃣ Confirmation & Detailed Submission */}
              <div className="accordion-item">
                <p className="accordion-header p-4">
                  <button
                    className="accordion-button collapsed fw-semibold p-0"
                    style={{ fontSize: "19px" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNominationFour"
                    aria-expanded="false"
                    aria-controls="collapseNominationFour"
                  >
                    Step 4. Confirmation & Detailed Submission
                  </button>
                </p>
                <div
                  id="collapseNominationFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionNomination"
                >
                  <div className="accordion-body bg-lightgrey p-6">
                    After you confirm your nomination, you’ll be asked to share
                    additional insights, supporting information, or
                    documentation to strengthen your profile.
                  </div>
                </div>
              </div>

              {/* 5️⃣ Two-Stage Evaluation Process */}
              <div className="accordion-item">
                <p className="accordion-header p-4">
                  <button
                    className="accordion-button collapsed fw-semibold p-0"
                    style={{ fontSize: "19px" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNominationFive"
                    aria-expanded="false"
                    aria-controls="collapseNominationFive"
                  >
                    Step 5. Two-Stage Evaluation Process
                  </button>
                </p>
                <div
                  id="collapseNominationFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionNomination"
                >
                  <div className="accordion-body bg-lightgrey p-6">
                    Our Research & Evaluation Team conducts a thorough
                    assessment of all nominations:
                    <ul className="mt-3 mb-0">
                      <li>
                        <strong>Round One:</strong> Comprehensive review to
                        identify strong, eligible contenders.
                      </li>
                      <li>
                        <strong>Round Two:</strong> Detailed evaluation of
                        shortlisted nominations based on innovation,
                        scalability, sustainability, and overall contribution to
                        the food and agriculture ecosystem.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 6️⃣ Shortlisting & Notification */}
              <div className="accordion-item">
                <p className="accordion-header p-4">
                  <button
                    className="accordion-button collapsed fw-semibold p-0"
                    style={{ fontSize: "19px" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNominationSix"
                    aria-expanded="false"
                    aria-controls="collapseNominationSix"
                  >
                    Step 6. Shortlisting & Notification
                  </button>
                </p>
                <div
                  id="collapseNominationSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionNomination"
                >
                  <div className="accordion-body bg-lightgrey p-6">
                    If shortlisted after the first round, you’ll be notified and
                    moved to the final evaluation phase. Once the review is
                    complete, our team will confirm your final status and
                    coordinate your next steps for the ceremony.
                  </div>
                </div>
              </div>

              {/* 7️⃣ Recognition on the Global Stage */}
              <div className="accordion-item">
                <p className="accordion-header p-4">
                  <button
                    className="accordion-button collapsed fw-semibold p-0"
                    style={{ fontSize: "19px" }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNominationSeven"
                    aria-expanded="false"
                    aria-controls="collapseNominationSeven"
                  >
                    Step 7. Recognition on the Global Stage
                  </button>
                </p>
                <div
                  id="collapseNominationSeven"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionNomination"
                >
                  <div className="accordion-body bg-lightgrey p-6">
                    Final awardees will be honored at the{" "}
                    <strong>Grand Awards Ceremony on 15 & 16 Sep, 2026</strong>,
                    during
                    <strong> Food Security SummitX 2026 – Dubai.</strong>
                    <br />
                    <br />
                    The celebration will take place before an audience of{" "}
                    <strong>750+ global delegates</strong>, including industry
                    leaders, investors, ministries, policymakers, and
                    international media — ensuring your recognition resonates
                    far beyond the room.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -- How to Nominate Section end -- */}

      {/* -- Past Winners Section start -- */}
      <section className="past-winners py-6">
        <div className="container text-center w-lg-75">
          <h2 className="mb-3">
            <span className="pink">Past</span> Award Winners
          </h2>
          <p>
            Celebrating those who lit the fire before you — innovators,
            changemakers, and sustainability champions.
          </p>

          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
            {[
              {
                name: "Reputed Agriculture 4 Development Foundation",
                title:
                  "Investment and Finance NPO for Sustainable Development ",
                img: "assets/images/pastAwards/agric4dev.jpg",
              },
              {
                name: "INNOFarms.AI",
                title: "Climate-Resilient Smart Farm System Builder",
                img: "assets/images/pastAwards/innoFarms.jpg",
              },
              {
                name: "Innovate Future AS",
                title: "Water-Based AgriTech Systems Architect",
                img: "assets/images/pastAwards/innovate.jpg",
              },
              {
                name: "DeHaat",
                title: "Holistic Farm-to-Market Systems Architect",
                img: "assets/images/pastAwards/agrevolution.jpg",
              },
              {
                name: "Food Security Capital",
                title: "Climate-Smart Infrastructure Financier",
                img: "assets/images/pastAwards/foodSecure.jpg",
              },
              {
                name: "Agroco",
                title: "Urban Farm Resilience Builder",
                img: "assets/images/pastAwards/agroco.jpg",
              },
              {
                name: "Fischer Farms.",
                title: "Europe’s Largest Vertical Farm Innovator ",
                img: "assets/images/pastAwards/fischer.jpg",
              },
              {
                name: "Arya.ag",
                title: "Farmgate Storage & Liquidity Enabler",
                img: "assets/images/pastAwards/AryaAG.jpg",
              },
              {
                name: "Fasal",
                title: "Field‑Autonomy Irrigation & Advisory Architect",
                img: "assets/images/pastAwards/fasal.jpg",
              },

              {
                name: "Advanta Seeds",
                title: "Smallholder Access to Improved Seeds Trailblazer ",
                img: "assets/images/pastAwards/advanta.jpg",
              },
              {
                name: "Virentiatech Agricultural Services LLC.",
                title:
                  "Climate-Smart Agriculture & Carbon Stewardship Champion",
                img: "assets/images/pastAwards/virenxia.jpg",
              },
              {
                name: "Ahlam AL Mannaei, Agriculture Engineer at Ministry of Climate Change and Environment, UAE. ",
                title: "Food Security Diplomacy Strategist ",
                img: "assets/images/pastAwards/ahlam.jpg",
              },
            ].map((winner, i) => (
              <div key={i} className="col">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={winner.img}
                    className="card-img-top rounded-top-4"
                    alt={winner.name}
                  />
                  <div className="card-body">
                    <h5 className="mb-1">{winner.name}</h5>
                    <p className="small text-muted">{winner.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
          <p className="text-center">
            Each honoree exemplifies the SummitX spirit —{" "}
            <b>innovate boldly, act sustainably, and lead with purpose.</b>
          </p>
        </div>
      </section>
      {/* -- Past Winners Section end -- */}

      {/* -- CTA Section start -- */}
      <section className="next-sponser position-relative">
        <div className="overlay"></div>
        <div className="container text-center position-relative text-white w-lg-60 mx-auto">
          <h5 className="text-white mb-1">JOIN THE CIRCLE OF IMPACT</h5>
          <h1 className="text-white mb-2">
            Be Recognized at{" "}
            <span className="pink">Food Security SummitX 2026</span>
          </h1>
          <p>
            Submit your nomination today and let your impact inspire the world.
          </p>
          <Link to="/Nominate" className="btn btn1">
            Nominate Now
          </Link>
        </div>
      </section>
      {/* -- CTA Section end -- */}
    </div>
  );
}

export default Awards;
