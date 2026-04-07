import React, { useState } from "react";
import CountUpBox from "../Components/CountUpBox";
import Gallery from "../Components/Gallery";
import { Link } from "react-router-dom";
import Countdown from "../Components/Countdown";
import PartnerSlider from "../Components/PartnerSlider";

function Home() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakers = [
    {
      name: "Shwetha Joshi",
      designation: "Program Director at DEHAT",
      image: "assets/images/speakers/1.jpg",
      links: {
        website: "https://www.dehatindia.org",
        linkedin: "https://www.linkedin.com/in/shwetha-m-187296104/",
        facebook: "https://www.facebook.com/shwetha.achar.33/",
        instagram: "https://www.instagram.com/sahana_shwetha05/",
        twitter: "https://x.com/sahanashwetha",
      },
    },
    {
      name: "Amit Grover",
      designation:
        "Managing Partner and General Partner at Grover & Company and Grover Impact Ventures",
      image: "assets/images/speakers/2.jpg",
      links: {
        website: "https://grover.nz/",
        linkedin: "https://www.linkedin.com/in/grovera/",
      },
    },
    {
      name: "Warmate Jones Idikio",
      designation: "Founder at THE AFCFTA",
      image: "assets/images/speakers/3.jpg",
      links: {
        website: "https://www.afcftaroundtable.com/",
        linkedin:
          "https://www.linkedin.com/in/warmate-jones-idikio-9323682a/?originalSubdomain=ng",
        facebook: "https://www.facebook.com/warmatejones.idikio",
      },
    },
    {
      name: "José Francisco Fernández Serna",
      designation: "Chief Executive Officer at E-motion Foods",
      image: "assets/images/speakers/4.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/josefern/",
      },
    },
  ];

  return (
    <div>
      {/*!-- Bannner section starts --*/}
      <section className="banner position-relative pb-0">
        {/* Video background replaces overlay */}
                    {/* src="https://res.cloudinary.com/dqh7vmn5c/video/upload/v1690000000/ab_aeclzl.mp4" */}
        <video className="banner-video" autoPlay muted loop playsInline>
          <source
          src="https://urbanplantcare.in/videos/ab.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Thin transparent black layer so text is readable while video plays */}
        <div className="video-dark" aria-hidden="true"></div>

        <div className="container">
          <div className="inner-banner position-relative text-white ">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="banner-left text-center pb-lg-5 p-md-0">
                  <div className="banner-image">
                    <div className="banner-image">
                      <div
                        style={{
                          width: "50%",
                          height: "300px",
                          background: "transparent",
                        }}
                      />
                    </div>
                  </div>
                  <div className="countdown">
                    <div
                      id="countdown"
                      className="countdown-inner d-flex w-100 bg-white p-2 rounded-5 justify-content-center box-shadow position-relative z-2"
                    >
                      <Countdown />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-black">
                <div className="banner-right  ms-2 text-center text-lg-start pb-8">
                  <div className="banner-title pb-3">
                    <h4 className="text-black pb-3">
                      THE <span className="pink">FIRE</span> THAT
                    </h4>
                    <h1 className="text-black">
                      FEEDS <span className="pink">THE</span> FUTURE
                    </h1>
                  </div>
                  <div
                    className="banner-event-info pb-3"
                    style={{ fontWeight: "700" }}
                  >
                    <ul className="m-0 ps-0 d-sm-flex justify-content-center justify-content-lg-start list-unstyled">
                      <li className="pe-2 border-end border-1 border-lightgrey">
                        <i className="fa  fa-calendar-o pe-1"></i> 15 or 16 Sep, 2026
                      </li>
                      <li className="ps-2">
                        <i className="fa  fa-map-marker pe-1"></i> Dubai
                      </li>
                    </ul>
                  </div>
                  <div
                    className="event-discription"
                    style={{ fontWeight: "700" }}
                  >
                    <p className="pb-4 m-0">
                      In 2026, Dubai becomes the epicenter of a global movement
                      where leaders, innovators, and nations unite to secure the
                      world’s food future.
                    </p>
                    <div className="banner-button">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <Link
                            to="/exhibit-sponsor"
                            className="btn me-3 my-1 w-100 btn-theme-action"
                          >
                            EXHIBIT / SPONSOR
                          </Link>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <Link
                            to="/nominate"
                            className="btn btn2 my-1 w-100 btn-theme-action"
                          >
                            NOMINATE NOW!
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave overflow-hidden position-absolute w-100 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="d-block position-relative"
          >
            <path
              className="elementor-shape-fill"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                    c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            ></path>
          </svg>
        </div>
      </section>
      {/*--Banner Section end--*/}

      {/*--Overview Section start--*/}
      <section className="overview pb-0">
        <div className="container">
          <div className="inner-overview pb-10 position-relative border-dashed-bottom-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="overview-left text-center text-lg-start">
                  <div className="overview-title pb-4">
                    <p className="mb-1 pink">Food Security SummitX 2026 </p>
                    <h2 className="mb-2">
                      Igniting Change in Global{" "}
                      <span className="pink">Food Security</span>
                    </h2>
                    <p>
                      As the world faces mounting challenges in food systems,
                      from water scarcity to climate change ,the need for
                      innovation and collaborative solutions has never been more
                      urgent. Building on the momentum of the inaugural 2025
                      summit, <b>Food Security SummitX 2026 (2nd Edition)</b>{" "}
                      returns as a catalyst for actionable change.
                      <br /> <br /> This premier conference brings together
                      startups, investors, policymakers, and industry leaders to
                      forge innovation, investment, and sustainability into
                      real-world solutions for our food future. It’s not just a
                      conference, it’s a movement to ensure that the spark of
                      change lit last year continues to grow into a sustainable
                      flame transforming global food security.
                    </p>
                    <p className="mb-2">
                      <b>
                        <i>
                          “The journey towards global food security begins
                          here... Secure your spot now and be at the forefront
                          of this crucial movement. Together, we nourish the
                          future.”
                        </i>
                      </b>
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
                              <small  className="text-muted">Dubai, UAE</small>
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
      {/*--Overview Section end--*/}

      {/*--Partners Section start--*/}
      <section className="partners">
        <div className="container">
          <div className="partner-inner">
            <div className="partner-title text-center pb-6 w-lg-60 m-auto">
              <p className="mb-1 pink">OUR PARTNERS</p>
              <h2 className="mb-1">
                UNITED FOR A FOOD-SECURE <span className="pink">FUTURE</span>
              </h2>
              <p className="m-0">
                From ministries to market leaders, our partners represent the
                collective power of innovation, investment, and impact shaping
                tomorrow’s food systems.
              </p>
            </div>
            <PartnerSlider />
            {/* <div className="partner-button text-center">
              <Link to="/Sponsers" className="btn">
                VIEW MORE SPONSERS
              </Link>
            </div> */}
          </div>
        </div>
      </section>
      {/*--Partners Section end--*/}

      {/*--Features Section start--*/}
      <section
        className="feature text-black position-relative z-0 start-0"
        style={{ marginTop: "-110px" }}
      >
        <div className="overlay z-n1"></div>
        <div className="container">
          <div className="feature-inner">
            {/* Counter Section */}
            <div className="counter text-center border-bottom border-dark border-opacity-25">
              <div className="inner-counter mb-7 d-flex justify-content-between flex-wrap">
                {[
                  { end: 750, label: "Leaders" },
                  { end: 400, label: "Organisations" },
                  { end: 40, label: "Awards" },
                  { end: 50, label: "Media Partners" },
                  { end: 40, label: "Exhibitors" },
                ].map((item, i, arr) => (
                  <div
                    key={i}
                    className={`counter-box flex-fill p-2 text-center ${
                      i !== arr.length - 1
                        ? "border-end border-dark border-opacity-25"
                        : ""
                    }`}
                  >
                    <CountUpBox end={item.end} label={item.label} />
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Boxes */}
            <div className="feature-lists pt-8">
              <div className="row g-4">
                {[
                  {
                    icon: "/assets/images/feature-icons/BRANDING.jpg",
                    title: "BRANDING",
                    text: "Where your identity meets global influence. Make your mark on the world stage of innovation and sustainability.",
                  },
                  {
                    icon: "/assets/images/feature-icons/SPEAKER.jpg",
                    title: "SPEAKER",
                    text: "Inspire change. Share insights that ignite minds and shape the conversation on food, tech, and transformation.",
                  },
                  {
                    icon: "/assets/images/feature-icons/NETWORKING.jpg",
                    title: "NETWORKING",
                    text: "Connect with the global visionaries driving tomorrow. Build alliances that turn ideas into real-world impact.",
                  },
                  {
                    icon: "/assets/images/feature-icons/SPONSOR.jpg",
                    title: "SPONSOR",
                    text: "Be the force that fuels progress. Empower global collaboration and spotlight your leadership in food security.",
                  },
                  {
                    icon: "/assets/images/feature-icons/EXHIBIT.jpg",
                    title: "EXHIBIT",
                    text: "Showcase innovation that matters. Present your solutions to decision-makers redefining the future of food and agriculture.",
                  },
                  {
                    icon: "/assets/images/feature-icons/AWARDS.jpg",
                    title: "AWARDS",
                    text: "Celebrate brilliance. Honor the pioneers transforming the world through innovation, sustainability, and purpose.",
                  },
                  {
                    icon: "/assets/images/feature-icons/STARTUP-PITCH.jpg",
                    title: "STARTUP PITCH",
                    text: "Where bold ideas meet real opportunity. Present your innovation before global investors shaping the future of food and AgriTech.",
                  },
                  {
                    icon: "/assets/images/feature-icons/INVESTMENTPITCH.jpg",
                    title: "INVESTMENT",
                    text: "Fueling transformation through capital and collaboration. Connect with investors driving sustainable and scalable impact.",
                  },
                  {
                    icon: "/assets/images/feature-icons/INVESTMENTPITCH-2.jpg",
                    title: "LEAD GENERATION",
                    text: "Expand your network. Engage with qualified buyers, partners, and clients who matter most to your business growth and global reach.",
                  },
                ].map((item, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    <div className="feature-box py-7 px-6 rounded bg-light bg-opacity-75 shadow-sm">
                      <a href="/">
                        <div className="feature-box-icon mb-4">
                          <div
                            className="  d-flex align-items-center justify-content-center"
                            style={{ width: "70px", height: "70px" }}
                          >
                            <img
                              src={item.icon}
                              alt={item.title}
                              className="img-fluid"
                              style={{
                                width: "70px",
                                height: "70px",
                                objectFit: "contain",
                                borderRadius: "50%",
                              }}
                            />
                          </div>
                        </div>
                        <div className="feature-box-info">
                          <h5 className="text-black mb-2">{item.title}</h5>
                          <small className="text-muted">{item.text}</small>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--Features Section end--*/}
      {/*--Speakers Section Start--*/}
      <section className="speakers">
        <div className="container">
          <div className="speaker-inner">
            <div className="speaker-title text-center p-2">
              <div className="row align-items-center ">
                <div className="col-lg-6">
                  <div className="title-content  text-lg-start mb-2">
                    <p className="mb-1 pink">EVENT SPEAKERS</p>
                    <h2 className="mb-1">
                      MEET OUR <span className="pink">VISIONARIES</span>
                    </h2>
                    <p className="m-0">
                      Join distinguished voices from across the world as they
                      discuss emerging trends, opportunities, and solutions
                      driving food security and agricultural innovation.
                    </p>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="speaker-button text-lg-end">
                    <Link to="/Speakerlist" className="btn my-2">
                      VIEW MORE SPEAKERS
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="sepaker-list text-center text-white">
              <div className="row">
                {speakers.map((speaker, index) => (
                  <div key={index} className="col-lg-3 col-md-6 p-2">
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
                            <li className="d-inline-block">
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
                            <li className="d-inline-block">
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
                            <li className="d-inline-block">
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
                            <li className="d-inline-block">
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
                            <li className="d-inline-block">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Speakers Section end--*/}

      {/*--Ticketbook Section start--*/}
      <section className="ticket position-relative">
        <div className="overlay"></div>
        <div className="container">
          <div className="ticket-inner w-lg-75 mx-auto text-center position-relative text-white">
            <div className="ticket-title">
              <h5 className="text-black mb-1">THE COUNTDOWN HAS BEGUN</h5>
              <h1 className="text-black mb-2">
                HAVE YOU RESERVED YOUR SEAT YET?{" "}
                <span className="pink">BOOK NOW.</span>
              </h1>
            </div>
            <div className="ticket-info">
              <p>
                Be part of the global movement shaping food security. Reserve
                your Early Bird pass today and join leaders redefining the
                future in Dubai 2026.
              </p>
              <div className="ticket-button">
                <Link to="/Booknow" className="btn">
                  REGISTER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Ticketbook Section end--*/}

      {/*--Schedules Section start--*/}
      {/* <section className="schedules">
        <div className="container">
          <div className="schedule-inner">
            <div className="schedule-title text-center mb-6 w-lg-60 mx-auto">
              <p className="mb-1 pink">OUR SCHEDULES</p>
              <h2 className="mb-1">
                FOLLOW <span className="pink">EVENT</span> SCHEDULES
              </h2>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="schedule-list-outer">
              <div className="schedule-list-top mb-7">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-4">
                    <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
                      <h4 className="pink mb-2">1ST DAY</h4>
                      <h6 className="mb-2">APRIL 23, 2024</h6>
                      <p>
                        William Mathew Theater
                        <br />
                        2390 NW 2nd Ave, Miami, FL 33127
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list  text-center text-sm-start">
                      <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Eventdetail" className="black">
                              REGISTRATION & BREAKFAST
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut elit tellus, luctus nec ullamcorper
                              mattis, pulvinar dapibus leo, luctus nec
                              ullamcorper mattis, pulvinar dapibus leo.
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>08:30 - 09:30 AM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Exploration Hall</small>
                            </li>
                          </ul>
                        </div>
                        <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image ">
                            <img
                              src="assets/images/team/1.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <button
                                className="pink border-0 bg-transparent"
                                onClick={() =>
                                  setSelectedSpeaker(speakers.jesus)
                                }
                              >
                                JESUS HOLLAND
                              </button>
                            </p>
                            <small>Host & Speaker</small>
                          </div>

                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <button
                                className="pink border-0 bg-transparent"
                                onClick={() =>
                                  setSelectedSpeaker(speakers.amit)
                                }
                              >
                                AMIT SHARMA
                              </button>
                            </p>
                            <small>Keynote Speaker</small>
                          </div>
                        </div>
                      </div>
                      <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Eventdetail" className="black">
                              SPEED: MARKETING MASTER!
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut elit tellus, luctus nec ullamcorper
                              mattis, pulvinar dapibus leo, luctus nec
                              ullamcorper mattis, pulvinar dapibus leo.
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>08:30 - 09:30 AM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Exploration Hall</small>
                            </li>
                          </ul>
                        </div>
                        <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/2.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <button
                                className="pink border-0 bg-transparent"
                                onClick={() =>
                                  setSelectedSpeaker(speakers.nelson)
                                }
                              >
                                NELSON KETY
                              </button>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="schedule-title-bottom">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-4">
                    <div className="schedule-day text-center position-relative text-sm-start py-6 ps-2 z-1">
                      <h4 className=" pink mb-2">2ND DAY</h4>
                      <h6 className="mb-2">APRIL 24, 2024</h6>
                      <p>
                        William Mathew Theater
                        <br />
                        2390 NW 2nd Ave, Miami, FL 33127
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list text-center text-sm-start">
                      <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Eventdetail" className="black">
                              REGISTRATION & BREAKFAST
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut elit tellus, luctus nec ullamcorper
                              mattis, pulvinar dapibus leo, luctus nec
                              ullamcorper mattis, pulvinar dapibus leo.
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>08:30 - 09:30 AM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Exploration Hall</small>
                            </li>
                          </ul>
                        </div>
                        <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/3.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <button
                                className="pink border-0 bg-transparent"
                                onClick={() =>
                                  setSelectedSpeaker(speakers.peelrs)
                                }
                              >
                                PEELRS HELM
                              </button>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div>
                      </div>
                      <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Eventdetail" className="black">
                              EXPLORATIONS OF NEW APPROACHES
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut elit tellus, luctus nec ullamcorper
                              mattis, pulvinar dapibus leo, luctus nec
                              ullamcorper mattis, pulvinar dapibus leo.
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>08:30 - 09:30 AM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Exploration Hall</small>
                            </li>
                          </ul>
                        </div>
                        <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/1.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0 pink">
                              <Link to="/Eventdetail" className="pink">
                                JESUS HOLLAND
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div>
                      </div>
                      <div className="partner-button mt-6">
                        <Link to="/Eventlists" className="btn">
                          VIEW MORE DETAILS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*--Schedules Section end--*/}

      {/*--Gallery Section end--*/}
      <section className="gallery">
        <div className="container">
          <div className="galler-inner">
            <div className="section-title text-center">
              <div className="row align-items-center ">
                <div className="col-lg-6 pb-2">
                  <div className="title-content  text-lg-start">
                    <p className="mb-1 pink">EVENT GALLERY</p>
                    <h2 className="mb-1">
                      WHERE THE SPARK <span className="pink">BEGAN</span>
                    </h2>
                    <p className="m-0 text-black">
                      What started as a spark in our last edition now fuels a
                      global movement. These moments capture the passion,
                      purpose, and connections that lit the fire for
                      <b> Food Security SummitX 2026</b>.
                    </p>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="speaker-button text-lg-end">
                    <Link to="/Ourgallery" className="btn">
                      VIEW MORE SHOTS
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <Gallery />
          </div>
        </div>
      </section>
      {/*--Gallery Section end--*/}

      {/*--Testimonials Section start--*/}
      {/* <section className="testimonial bg-lightgrey">
        <div className="container">
          <div className="section-title w-lg-60 m-auto text-center pb-5">
            <p className="mb-1  pink">OUR TESTIMONIALS</p>
            <h2 className="mb-1">
              VOICES THAT KEEP THE FIRE <span className="pink">ALIVE</span>
            </h2>
            <p className="m-0">
              Our past participants call it transformative. From meaningful partnerships to powerful insights, their words reflect the energy, collaboration, and impact that continue to drive Food Security SummitX forward.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section> */}
      {/*--Testimonials Section end--*/}

      {/*--FAQ Section start--*/}
      <section className="faq pb-0 overflow-visible d-block position-relative z-1">
        <div className="overlay bg-blue opacity-25 z-n1"></div>
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-6 px-4 mb-2">
                <div className="faq-general">
                  <div className="section-title pb-3 text-center text-lg-start">
                    <p className="mb-1 pink">GENERAL QUESTIONS</p>
                    <h2 className="mb-2 text-white">
                      FREQUENT ASKED <span className="pink">QUESTIONS</span>
                    </h2>
                    <p className="text-white">
                      Find quick answers to everything you need to know, from
                      registration details and passes to participation options
                      and event logistics for<b> Food Security SummitX 2026</b>{" "}
                      in Dubai.
                    </p>
                  </div>

                  <div
                    className="faq-accordion p-4 mb-5 bg-white rounded"
                    style={{ marginLeft: "-20px" }}
                  >
                    <div
                      className="accordion accordion-faq"
                      id="accordionFlushExample"
                    >
                      {/* 1️⃣ What is Food Security SummitX? */}
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            What is Food Security SummitX?
                          </button>
                        </p>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Food Security SummitX is a global platform that
                            unites innovators, investors, ministries, and
                            agribusiness leaders to accelerate solutions for a
                            sustainable and food-secure future. The 2026 edition
                            will be held on{" "}
                            <strong>15 or 16 Sep in Dubai, UAE</strong>, under the
                            theme <em>“Food for All.”</em>
                          </div>
                        </div>
                      </div>

                      {/* 2️⃣ Who can participate? */}
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            Who can participate?
                          </button>
                        </p>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            The Summit welcomes startups, agritech firms,
                            investors, policymakers, NGOs, corporates, and
                            researchers — anyone contributing to or investing in
                            the global food and agriculture ecosystem.
                          </div>
                        </div>
                      </div>

                      {/* 3️⃣ How can I register or get involved? */}
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            How can I register or get involved?
                          </button>
                        </p>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            You can register through the “Register Now” page or
                            express your interest as a{" "}
                            <strong>
                              Speaker, Exhibitor, Partner, or Award Nominee
                            </strong>{" "}
                            directly on our website. Once you submit your form,
                            our team will connect with you to confirm your
                            participation.
                          </div>
                        </div>
                      </div>

                      {/* 4️⃣ What are the key benefits of joining? */}
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                          >
                            What are the key benefits of joining?
                          </button>
                        </p>
                        <div
                          id="flush-collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Gain access to{" "}
                            <strong>750+ global delegates</strong>,{" "}
                            <strong>50+ exhibitors</strong>, and leaders shaping
                            the future of food security. Build partnerships,
                            meet investors, explore innovations, and position
                            your brand among global changemakers.
                          </div>
                        </div>
                      </div>

                      {/* 5️⃣ How can my company exhibit or sponsor the event? */}
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive"
                            aria-expanded="false"
                            aria-controls="flush-collapseFive"
                          >
                            How can my company exhibit or sponsor the event?
                          </button>
                        </p>
                        <div
                          id="flush-collapseFive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Visit the “Exhibit / Sponsor” section to share your
                            interest. Our commercial team will help you choose a
                            package aligned with your business objectives and
                            brand visibility goals.
                          </div>
                        </div>
                      </div>

                      {/* 6️⃣ Will there be awards and networking opportunities? */}
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseSix"
                            aria-expanded="false"
                            aria-controls="flush-collapseSix"
                          >
                            Will there be awards and networking opportunities?
                          </button>
                        </p>
                        <div
                          id="flush-collapseSix"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Yes. The SummitX Awards celebrate innovation and
                            leadership across agriculture and food security.
                            You’ll also have access to exclusive networking
                            lunches, startup pitches, investor meetings, and the
                            Awards Gala — where deals, partnerships, and
                            recognition come together.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6  align-self-center px-4">
                <div className="faq-form bg-white rounded shadow-lg p-6 mb-mi">
                  <div className="form-title mb-4">
                    <p className="mb-1 pink">CONNECT WITH US</p>
                    <h2 className="mb-2">
                      WHERE CONVERSATIONS IGNITE{" "}
                      <span className="pink">COLLABORATION </span>
                    </h2>
                    <p className="m-0 text-black">
                      Send us your thoughts, inquiries, or opportunities to
                      collaborate — every message helps shape the dialogue
                      toward a food-secure future.
                    </p>
                  </div>
                  <div className="form-content justify-content-between">
                    <form>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="mb-5"
                        style={{ border: "1px solid black" }}
                      />
                      <div className=" row justify-content-around">
                        <div className="col-lg-6 col-md-6">
                          <div className="phone-no">
                            <input
                              type="tel"
                              placeholder="Phone No."
                              className="mb-5"
                              style={{ border: "1px solid black" }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="emai">
                            <input
                              type="email"
                              placeholder="Email Address"
                              className="mb-5"
                              style={{ border: "1px solid black", borderRadius:"25px", padding:"15px" }}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <textarea
                        placeholder="How may we help you?"
                        rows="4"
                        className="mb-5"
                        style={{ border: "1px solid black" }}
                      ></textarea>
                      <button className="btn mb-5" id="sub-btn">
                        SEND MESSAGE
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--FAQ Section end--*/}

      {/*--Direction Section start--*/}
      <section className="direction pb-0">
        <div className="container">
          <div className="section-title text-center pb-2 w-lg-60 m-auto">
            <p className="mb-1  pink">REACH US</p>
            <h2 className="mb-1">
              FIND YOUR WAY TO THE <span className="pink">FUTURE</span>
            </h2>
            <p className="mb-0">
              Dubai awaits — a city where ideas, innovation, and collaboration
              converge. Join us at<b> Food Security SummitX 2026</b> and step
              into the movement shaping tomorrow.
            </p>
          </div>
          <div className="direction-content">
            <div className="direction-info">
              <div className="row">
                <div className="col-lg-5 col-md-5 px-1">
                  <div className="p-6 d-flex text-white w-100 h-100 rounded bg-pink ">
                    <div
                      className="justify-content-center align-self-center ms-6"
                      style={{ color: "white" }}
                    >
                    <h3 className=" pb-2" style={{ color: "white" }}>Plan your visit:
</h3>
<br/><br/>
                      <h5 className=" pb-2" style={{ color: "white" }}>
                        EVENT VENUE:
                      </h5>
                      <p className="pb-5 m-0">Will Announce Soon</p>
                      <h5 className=" pb-2" style={{ color: "white" }}>
                        ADDRESS:
                      </h5>
                      <p className="pb-5 m-0">Dubai, UAE</p>

                      <a href="/" style={{ color: "white" }}>
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 px-1 py-2">
                  <iframe
                    title="Dubai, UAE Location Map"
                    height="400"
                    className="rounded w-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115835.13945616183!2d55.1712796!3d25.0657005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1730529600000!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="location-gallery">
              <div id="selector" className="row pt-1 justify-content-center">
                <div
                  className="item col-lg-4 col-md-6 p-1"
                  data-src="images/group/1.jpg"
                >
                  <img
                    src="assets/images/thumbnail/13.jpg"
                    className="w-100 rounded"
                    alt="VR Presentation and conference"
                  />
                </div>
                <div
                  className="item col-lg-4 col-md-6 p-1"
                  data-src="images/group/7.jpg"
                >
                  <img
                    src="assets/images/thumbnail/14.jpg"
                    className="w-100 rounded"
                    alt="VR Presentation and conference"
                  />
                </div>
                <div
                  className="item col-lg-4 col-md-6 p-1"
                  data-src="images/group/1.jpg"
                >
                  <img
                    src="assets/images/thumbnail/15.jpg"
                    className="w-100 rounded"
                    alt="VR Presentation and conference"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Direction Section end--*/}

      {/*--Blog Section start--*/}
      {/* <section className="blog">
        <div className="container">
          <div className="blog-inner">
            <div className="row align-items-center">
              <div className="col-lg-6  ">
                <div className="blog-title text-center text-lg-start p-2">
                  <p className="mb-1 pink">RECENT NEWS</p>
                  <h2 className="mb-1">
                    THE CONVERSATION <span className="pink">CONTINUES </span>
                    HERE
                  </h2>
                  <p className="mb-0">
                    Explore the latest stories, insights, and global updates
                    from across the food and agriculture ecosystem — featuring
                    voices, companies, and movements shaping a food-secure
                    future.
                  </p>
                </div>
              </div>
              <div className="col-lg-6  p-2">
                <div className="blog-button text-center text-lg-end">
                  <Link to="/Blogsingle" className="btn">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-content">
              <div className="row">
                <div className=" col-lg-4 p-4 pb-0">
                  <div className="blog-box border border-1 rounded pb-2 text-center ">
                    <Link to="/Blogsingle">
                      <img
                        className="blog-img rounded rounded-bottom-0 w-100 h-auto"
                        src="assets/images/group/6.jpg"
                        alt="blog-img"
                      />
                    </Link>
                    <h5 className="p-4">
                      <Link to="/Blogsingle" className="black">
                        THE TOP MUSIC FESTIVAL IN NEW YORK CITY
                      </Link>
                    </h5>
                    <p className="p-4 pt-0 m-0 border-bottom">
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </small>
                    </p>
                    <div className="pt-2">
                      <span className="px-4  border-end ">April 3, 2023 </span>
                      <span className="px-4">No Comments </span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4  p-4 pb-0">
                  <div className="blog-box border border-1 rounded pb-2 text-center">
                    <Link to="/Blogsingle">
                      <img
                        className="blog-img rounded w-100 rounded-bottom-0 h-auto"
                        src="assets/images/group/7.jpg"
                        alt="blog-img"
                      />
                    </Link>
                    <h5 className="p-4">
                      <Link to="/Blogsingle" className="black">
                        LIVE INTERVIEWS FROM CONFERENCE
                      </Link>
                    </h5>
                    <p className="p-4 pt-0 m-0 border-bottom">
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </small>
                    </p>
                    <div className="pt-2">
                      <span className="px-4  border-end ">April 3, 2023 </span>
                      <span className="px-4">No Comments </span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 p-4 pb-0 ">
                  <div className="blog-box border border-1 rounded pb-2 text-center">
                    <Link to="/Blogsingle">
                      <img
                        className="blog-img rounded rounded-bottom-0 w-100 h-auto"
                        src="assets/images/group/4.jpg"
                        alt="blog-img"
                      />
                    </Link>
                    <h5 className="p-4">
                      <Link to="/Blogsingle" className="black">
                        REGISTRATION FOR OPENING WORKSHOP
                      </Link>
                    </h5>
                    <p className="p-4 pt-0 m-0 border-bottom">
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </small>
                    </p>
                    <div className="pt-2">
                      <span className="px-4  border-end ">April 3, 2023 </span>
                      <span className="px-4">No Comments </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*--Blog Section end--*/}

      {/* Modal */}
      {selectedSpeaker && (
        <div className="modal-overlay" onClick={() => setSelectedSpeaker(null)}>
          <div
            className="modal-box bg-white p-4 rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedSpeaker(null)}
            >
              ✖
            </button>
            <img
              src={selectedSpeaker.img}
              alt={selectedSpeaker.name}
              className="rounded-circle mb-3"
              width="120"
            />
            <h3>{selectedSpeaker.name}</h3>
            <p>{selectedSpeaker.role}</p>
            <p>{selectedSpeaker.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
