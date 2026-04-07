import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import toast, { Toaster } from "react-hot-toast";

// emailjs removed; submissions now posted to backend
import "swiper/css/pagination";

const PastEdition = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handlePopupChange = (e) => {
    const { name, value } = e.target;
    setPopupData((prev) => ({ ...prev, [name]: value }));
  };

  // const handlePopupSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Popup form submitted:", popupData);
  //   alert("Thank you! The Past Event Report will be sent to your email.");
  //   setShowPopup(false);
  // };
const handlePopupSubmit = async (e) => {
  e.preventDefault();

  try {
    const apiBase = process.env.REACT_APP_API_URL || "";
    const res = await fetch(`${apiBase}/api/forms/past-edition`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(popupData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw data; // 👈 backend message yahin se aayega
    }

    toast.success(
      "Thank you! The Past Event Report will be sent to your email."
    );

    setPopupData({ name: "", phone: "", email: "" });
    setShowPopup(false);
  } catch (err) {
    console.error("Past edition submit error", err);
    toast.error(
      err?.message || "This email has already requested the Past Event Report."
    );
  }
};

  const speakers = [
    {
      name: "H.E. Dr. Obaid Saif Hamad Al Zaabi",
      designation:
        "Chairman of the Board, Arab Authority for Agricultural Investment and Development (AAAID)",
      image: "assets/images/past/1.jpg",
      links: {
        linkedin:
          "http://linkedin.com/in/obaid-s-al-zaabi-phd-mba-ca-cma-cipa-aaa-823b9913/",
      },
    },
    {
      name: "Tatiana Antonelli Abella",
      designation: "Founder & Managing Director, Goumbook",
      image: "assets/images/past/2.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/tatianaantonelliabella/",
      },
    },
    {
      name: "Richard Kohn",
      designation: "General Manager, iyris SkyFarms & Global Head of Public Affairs, iyris",
      image: "assets/images/past/3.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/richardkohnthemarchitect/",
      },
    },
    {
      name: "Dr. Mohammed Albreiki ",
      designation:
        "Director of Applied Research and Capability – Abu Dhabi Agriculture and Food Safety Authority",
      image: "assets/images/past/4.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/dr-mohammed-albreiki-745ba984/",
      },
    },

    {
      name: "Amit Grover",
      designation:
        "Founder & Managing Partner of Grover & Company and General Partner at Grover Impact Ventures",
      image: "assets/images/past/5.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/grovera/",
      },
    },
    {
      name: "Secil Yurtseven",
      designation: "Founder, CiftciExpress & CEO, MasterCat",
      image: "assets/images/past/6.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/yurtsevensecil/",
      },
    },
    {
      name: "Cmdr (Dr) Reji Kurien Thomas",
      designation: "CEO, TOL Biotech USA",
      image: "assets/images/past/7.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/theaviator/",
      },
    },
    {
      name: "Dr. Michał Słota ",
      designation: "Head of Marketing, Nando",
      image: "assets/images/past/8.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/m-slota/",
      },
    },
  ];

  const awards = [
  {
    logo: "/assets/images/pastAwards/advanta.jpg",
    title: "Smallholder Access to Improved Seeds Trailblazer",
    subtitle: "Advanta Seeds",
  },
  {
    logo: "/assets/images/pastAwards/Fasal.jpg",
    title: "Field-Autonomy Irrigation & Advisory Architect",
    subtitle: "Fasal",
  },
  {
    logo: "/assets/images/pastAwards/foodSecure.jpg",
    title: "Climate-Smart Infrastructure Financier",
    subtitle: "Food Security Capital",
  },
  {
    logo: "/assets/images/pastAwards/agrevolution.jpg",
    title: "Holistic Farm-to-Market Systems Architect",
    subtitle: "Agrevolution (DeHaat)",
  },
  {
    logo: "/assets/images/pastAwards/fischer.jpg",
    title: "Europe’s Largest Vertical Farm Innovator",
    subtitle: "Fischer Farms",
  },
  {
    logo: "/assets/images/pastAwards/innovate.jpg",
    title: "Water-Based AgriTech Systems Architect",
    subtitle: "Innovate Future AS",
  },
];

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Breadcrumb
        title="Food Security SummitX – Dubai 2025"
        subtitle="Where the Spark Was First Ignited"
        bgImage="assets/images/apply/Nominate.jpg"
      />

      <section className="py-5">
        <section className="overview pb-0">
          <div className="container">
            <div className="inner-overview pb-10 position-relative border-dashed-bottom-2">
              <div className="row">
                <div className="col-lg-6">
                  <div className="overview-left text-center text-lg-start">
                    <div className="overview-title pb-4">
                      <p className="mb-1 pink">
                        Where the Spark Was First Ignited
                      </p>
                      <h2 className="mb-2">
                        In Partnership with the Ministry of{" "}
                        <span className="pink">Agriculture, Jordan</span>
                      </h2>
                      <p>
                        It began as a spark in Dubai on September 17–18, 2025 —
                        a spark that brought together visionaries, policymakers,
                        investors, and innovators under the theme:{" "}
                        <b>
                          “Collaborate to Nourish: Cross-Regional Partnerships
                          for Ensuring Food Safety.”
                        </b>
                      </p>
                      <p className="mb-2">
                        The inaugural Food Security SummitX 2025 became a
                        movement that combined modern solutions with meaningful
                        business.
                        <br />
                        <br />
                        It was where collaboration found its voice — and where
                        the future of food first caught fire.
                      </p>
                    </div>
                    <div className="overview-event-info pb-6 g-4 text-start position-absolute">
                      <div className="row justify-content-around ">
                        <div className="col-lg-6 col-md-6">
                          <a
                            href="https://www.google.com/maps?q=Dubai,+UAE"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                              <div className="event-info-icon text-center">
                                <i
                                  className="fa fa-map-marker text-white bg-pink rounded-circle me-3"
                                  style={{ color: "white" }}
                                ></i>
                              </div>
                              <div className="location-info">
                                <h5 className="mb-1">WHERE</h5>
                                <small>Dubai, UAE</small>
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
                                  className="fa fa-calendar-o text-white bg-pink rounded-circle me-3"
                                  style={{ color: "white" }}
                                ></i>
                              </div>
                              <div
                                className="time-info"
                                style={{ width: "140px" }}
                              >
                                <h5 className="mb-1">WHEN</h5>
                                <small className="text-muted">
                                  {" "}
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
                              src="assets/images/group/1.jpg"
                              alt="group-image"
                            />
                          </div>
                          <div className="img-left-2">
                            <img
                              src="assets/images/group/5.jpg"
                              alt="group-image"
                              className="w-100 rounded"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="container-img-right w-lg-75">
                          <img
                            src="assets/images/group/3.jpg"
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
        <div className="container">
          <div className="row g-4 mb-5" style={{ marginTop: "60px" }}>
            {/* <div className="col-lg-6">
              <div className="bg-white rounded p-4 box-shadow h-100">
                <h3 className="mb-4">
                  In Partnership with the Ministry of Agriculture, Jordan
                </h3>
                <p className="mb-0">
                  <strong>
                    Inaugurated by H.E. Dr. Obaid, Chairman, Arab Authority for
                    Agricultural Investment and Development (AAAID)
                  </strong>
                </p>

                <p>
                  It began as a <b>spark in Dubai on September 17–18, 2025 </b>—
                  a spark that brought together visionaries, policymakers,
                  investors, and innovators under the theme:
                  <b>
                    <i>
                      “Collaborate to Nourish: Cross-Regional Partnerships for
                      Ensuring Food Safety.”
                    </i>
                  </b>
                </p>
                <p>
                  The inaugural <b>Food Security SummitX 2025</b> became a
                  movement that combined modern solutions with meaningful
                  business.
                </p>
                <p>
                  It was where collaboration found its voice — and where the
                  future of food first caught fire.
                </p>
              </div>
            </div> */}

            <div className="col-lg-12">
              <div className="bg-white rounded p-4 box-shadow">
                <h3>About the Summit</h3>
                <p>
                  {" "}
                  Organized in partnership with the
                  <b> Ministry of Agriculture, Jordan </b>and inaugurated by
                  <b>H.E. Dr. Obaid Saif Hamad Al Zaabi, Chairman of the Board – Arab Authority for Agricultural Investment and Development (AAAID),</b>the event united stakeholders from government, agri-inputs, AgTech, finance, and sustainability.

                </p>
                <p>
                  The Summit explored how regional cooperation and innovation can together secure the world’s food supply — creating an intersection of technology, trade, and transformation.

                </p>

                <div className="mt-4 pt-3 border-top">
                  <p className="mb-0">
                    {" "}
                    Over two days, SummitX 2025 hosted dynamic conversations
                    that built trust, accelerated deals, and launched
                    partnerships across continents.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section bg-white p-5 rounded-4 shadow-sm">
            <h4 className="mt-5 mb-3 fw-semibold">Event Highlights</h4>
            <ul className="list-unstyled">
              <li>
                • <b>420+ delegates </b>from 30+ countries
              </li>
              <li>
                • <b>200+ companies</b> representing the global agri-food value
                chain
              </li>
              <li>
                • <b>21 sessions</b> powered by <b>70+ thought leaders</b>
              </li>
              <li>
                • <b>12 award categories </b>recognizing excellence and impact
              </li>
              <li>
                • <b>30+ media partners</b> extending the Summit’s global
                footprint
              </li>
              <li>
                • <b>50% decision-makers </b>among participants — CEOs,
                investors, and policymakers
              </li>
            </ul>
            <p>
              <strong>
                <i>
                  2025 proved that when innovation meets intent, progress
                  becomes inevitable.
                </i>
              </strong>
            </p>
          </div>


          <section className="awards py-5">
  <div className="container">
    <div className="awards-inner">
      <div className="awards-title text-center p-2">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto">
            <div className="title-content text-center mb-4">
              <h2 className="mb-2">
                Awards &amp; <span className="pink">Recognition</span>
              </h2>
              <p className="m-0">
                Honoring Collaboration, Innovation &amp; Leadership
              </p>
              <p className="mt-2">
                The Food Security SummitX Awards 2025 celebrated those driving
                measurable progress in food safety, sustainability, and
                AgriTech.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* === Continuous Auto Slider === */}
      <div className="awards-list text-center text-white">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          allowTouchMove={false}
          speed={5000} // smooth auto movement
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <div className="award-box position-relative overflow-hidden text-white p-3 rounded">
                <img
                  className="award-logo w-75 mx-auto mb-3 d-block"
                  src={award.logo}
                  alt={award.title}
                />
                <h6 className="award-title text-white mb-1">
                  {award.title}
                </h6>
                <p
                  className="award-desc mb-0"
                  style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}
                >
                  {award.subtitle}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
  <br />
  <p className="mb-1 pink p-2 ml-2 text-center">
    <i>(Each honoree reflected the SummitX vision — collaboration as the catalyst, innovation as the engine.)</i>
  </p>
</section>


          <section className="speakers py-5">
            <div className="container">
              <div className="speaker-inner">
                <div className="speaker-title text-center p-2">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="title-content text-lg-start mb-2">
                        {/* <p className="mb-1 pink">EVENT SPEAKERS</p> */}
                        <h2 className="mb-1">
                          Speakers Who Inspired the{"  "}
                          <span className="pink">DIALOGUE</span>
                        </h2>
                        <p className="m-0">
                          The Summit featured <b>70 + speakers</b>, bringing
                          together diverse expertise from technology,
                          sustainability, and policy. Among them were:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* === Continuous Auto Slider === */}
                <div className="speaker-list text-center text-white">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    allowTouchMove={false}
                    speed={5000} // movement speed (higher = slower)
                    autoplay={{
                      delay: 0, // no pause between slides
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      576: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      992: { slidesPerView: 3 },
                      1200: { slidesPerView: 4 },
                    }}
                  >
                    {speakers.map((speaker, index) => (
                      <SwiperSlide key={index}>
                        <div className="speaker-box position-relative overflow-hidden text-white">
                          <img
                            className="speaker-image rounded w-100"
                            src={speaker.image}
                            alt={speaker.name}
                          />
                          <div className="box-content position-absolute bottom-0 z-1">
                            <h6 className="speaker-title d-block text-white pb-1">
                              <Link to="/Speakerdetail">{speaker.name}</Link>
                            </h6>
                            <span
                              className="speaker-post d-block pb-2"
                              style={{ color: "white" }}
                            >
                              {speaker.designation}
                            </span>

                            <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                              {speaker.links.facebook && (
                                <li>
                                  <a
                                    href={speaker.links.facebook}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded d-block"
                                  >
                                    <i className="fa fa-facebook"></i>
                                  </a>
                                </li>
                              )}
                              {speaker.links.twitter && (
                                <li>
                                  <a
                                    href={speaker.links.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded d-block"
                                  >
                                    <i className="fa fa-twitter"></i>
                                  </a>
                                </li>
                              )}
                              {speaker.links.linkedin && (
                                <li>
                                  <a
                                    href={speaker.links.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded d-block"
                                  >
                                    <i className="fa fa-linkedin"></i>
                                  </a>
                                </li>
                              )}
                              {speaker.links.instagram && (
                                <li>
                                  <a
                                    href={speaker.links.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded d-block"
                                  >
                                    <i className="fa fa-instagram"></i>
                                  </a>
                                </li>
                              )}
                              {speaker.links.website && (
                                <li>
                                  <a
                                    href={speaker.links.website}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded d-block"
                                  >
                                    <i className="fa fa-globe"></i>
                                  </a>
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <br />
            <p className="mb-1 pink p-2 ml-2 text-center">
              <i>
                (View the complete speaker line-up in the Post-Event Report.)
              </i>
            </p>
          </section>

          <div className="content-section bg-white p-5 rounded-4 shadow-sm">
            <h4 className="mt-5 mb-3 fw-semibold">Exhibitors & Participants</h4>
            <p>
              Over <b>200 companies</b> from the food and agriculture ecosystem
              showcased their technologies and solutions across sectors such as:
            </p>
            <ul className="list-unstyled">
              <li>• Agri-Inputs & BioAg</li>
              <li>• Water & Irrigation Systems</li>
              <li>• AgriTech & Automation</li>
              <li>• Supply Chain & Processing</li>
              <li>• Food Packaging & Cold Chain Solutions</li>
              <li>• Vertical Farming, Livestock & Aquaculture</li>
            </ul>
            <p className="text-center">
              These exhibitors represented the driving force of innovation and
              trade — turning <b>SummitX 2025</b> into a global marketplace for
              sustainable growth.
            </p>
            <p className="mb-0 text-center">
              <i>
                (Explore the full list of exhibitors and participating
                organizations in the Post-Event Report.)
              </i>
            </p>
          </div>

          <section className="awards-divisions ">
            <div className="container w-lg-75 text-center">
              <h2 className="mb-4">
                <span className="pink">Sponsors &</span> Partners
              </h2>
              <h3>Strategic Partners</h3>
              <br />
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card border-0 shadow-sm h-100">
                    <img
                      src="assets/images/sponsor/jordan.jpg"
                      className="card-img-top rounded-top-4"
                      alt="Excellence in Food Security – Enterprises"
                    />
                    <div className="card-body">
                      <h5 className="mb-2">Ministry of Agriculture, Jordan</h5>
                      {/* <p>
                    Celebrating organizations whose innovations and strategies
                    have advanced productivity, sustainability, and resilience
                    within the global agri-food landscape.
                  </p> */}
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 shadow-sm h-100">
                    <img
                      src="assets/images/sponsor/arab.jpg"
                      className="card-img-top rounded-top-4"
                      alt="Excellence in Food Security – Individuals"
                    />
                    <div className="card-body">
                      <h5 className="mb-2">
                        Arab Authority for Agricultural Investment and
                        Development (AAAID)
                      </h5>
                      {/* <p>
                    Honoring exceptional leaders whose vision, research, or
                    influence has transformed agricultural practices, inspired
                    innovation, or improved food system resilience.
                  </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4">
                (Additional thematic awards may spotlight climate-smart farming,
                digital transformation, circular economy, and sustainable
                community impact.)
              </p>

              <br />
              <h3>Sponsors & Supporters</h3>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card border-0 shadow-sm h-100">
                    <img
                      src="assets/images/sponsor/kcell.jpg"
                      className="card-img-top rounded-top-4"
                      alt="Excellence in Food Security – Enterprises"
                    />
                     {/* Thin light line */}
        <hr
  style={{
    border: "none",
    height: "1px",
    backgroundColor: "rgb(0, 0, 0)",
    width: "100%",
    margin: "0 auto",
    marginTop: "4px",
  }}
/>

                    <div className="card-body">
                      <h5 className="mb-2">KCell Biosciences</h5>
                      <p>Coffee Break Sponsor</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card border-0 shadow-sm h-100">
                    <img
                      src="assets/images/sponsor/fischer.jpg"
                      className="card-img-top rounded-top-4"
                      alt="Excellence in Food Security – Individuals"
                    />
                     <hr
  style={{
    border: "none",
    height: "1px",
    backgroundColor: "rgb(0, 0, 0)",
    width: "100%",
    margin: "0 auto",
    marginTop: "4px",
  }}
/>
                    <div className="card-body">
                      <h5 className="mb-2">Fischer Farms Ltd</h5>
                      <p>Networking Lunch Sponsor</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card border-0 shadow-sm h-100">
                    <img
                      src="assets/images/sponsor/Iyris.jpg"
                      className="card-img-top rounded-top-4"
                      alt="Excellence in Food Security – Organizations"
                    />
                    
                    <div className="card-body">
                      <h5 className="mb-2">Iyris </h5>
                      <p>Table Tent Sponsor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="content-section bg-white p-5 rounded-4 shadow-sm">
            <h4 className="mt-5 mb-3 fw-semibold">Media & Global Coverage</h4>
            <p>
              With <b>30 + media partners</b> across MENA, Asia, Europe, and
              Africa, <b>Food Security SummitX 2025</b> resonated worldwide —
              its stories carried through news outlets, digital platforms, and
              industry reports, amplifying the summit’s impact long after its
              close.
            </p>

            <h4 className="mt-5 mb-3 fw-semibold">Legacy & The Road Ahead</h4>
            <p>
              The spark ignited in Dubai in 2025 now fuels the fire that will{" "}
              <b>feed the future</b>. What began as collaboration has evolved
              into a movement of innovation, investment, and shared vision.
            </p>
            <p>
              Join us in <b>Sep 2026 – Dubai</b>, as{" "}
              <b>Food Security SummitX 2026</b> builds upon this legacy —
              bringing together even more leaders, innovators, and investors to
              push the boundaries of global food security.
            </p>

            <div className="text-center mt-5">
              <button
                className="btn btn-dark btn-lg px-5 py-3 rounded-3"
                onClick={() => setShowPopup(true)}
              >
                Get Full Past Event Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-semibold">
                  Get Full Past Event Report
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowPopup(false)}
                ></button>
              </div>
              <form onSubmit={handlePopupSubmit}>
                <div className="modal-body px-4">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={popupData.name}
                      onChange={handlePopupChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={popupData.phone}
                      onChange={handlePopupChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={popupData.email}
                      onChange={handlePopupChange}
                      required
                      style={{borderRadius:"25px"}}
                    />
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPopup(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-dark">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PastEdition;
