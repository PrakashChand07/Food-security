import React from "react";
import { Link } from "react-router-dom";
import CountUpBox from "../Components/CountUpBox";

function Virtual() {
  return (
    <div>
      {/*-- Banner section starts --*/}
      <section 
        className="banner position-relative pb-0" 
        style={{
          backgroundImage: "url('/assets/images/virtual/Virtual1.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "140px",
          paddingBottom: "100px"
        }}
      >
        {/* Transparent dark overlay for text readability */}
        <div 
          className="video-dark" 
          style={{ 
            position: "absolute",
            inset: 0,
            background: "rgba(255, 255, 255, 0.45)",
            zIndex: 1,
            pointerEvents: "none"
          }}
          aria-hidden="true"
        ></div>

        <div className="container position-relative z-2">
          <div className="inner-banner position-relative text-black">
            <div className="row align-items-center">
              <div className="col-lg-8 text-center text-lg-start">
                <div className="banner-title pb-3">
                  <h4 className="text-black pb-3" style={{ fontWeight: "700", letterSpacing: "1px" }}>
                    FOOD SECURITY SUMMITX <span className="pink">VIRTUAL 2026</span>
                  </h4>
                  <h1 className="text-black" style={{ fontWeight: "800", fontSize: "3rem" }}>
                    GCC AGRIFOOD & <span className="pink">FOOD SECURITY</span> ECOSYSTEM PLATFORM
                  </h1>
                </div>
                
                <p className="lead fw-bold text-muted mb-4" style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                  Connecting global AgriFood, sustainability, innovation, and investment stakeholders with strategic ecosystem players across the GCC and Middle East.
                </p>

                <div className="banner-event-info pb-4" style={{ fontWeight: "700" }}>
                  <ul className="m-0 ps-0 d-sm-flex justify-content-center justify-content-lg-start list-unstyled gap-4">
                    <li className="pe-3 border-end border-1 border-dark border-opacity-25 mb-2 mb-sm-0">
                      <i className="fa fa-calendar-o pe-1 pink"></i> June, 2026
                    </li>
                    <li className="mb-2 mb-sm-0">
                      <i className="fa fa-globe pe-1 pink"></i> Virtual Edition (Online)
                    </li>
                  </ul>
                </div>

                <div 
                  className="p-3 mb-4 rounded-3 border-start border-pink border-4 bg-white bg-opacity-75 shadow-sm d-inline-block text-start w-100" 
                  style={{ maxWidth: "600px" }}
                >
                  <p className="mb-0 text-dark fw-bold" style={{ fontSize: "0.95rem" }}>
                    <i className="fa fa-info-circle pink me-2"></i>
                    Pre-Scheduled Meetings | Investor Access | Startup Showcase | GCC Market Expansion
                  </p>
                </div>

                <div className="banner-button mt-2">
                  <div className="row g-3 justify-content-center justify-content-lg-start">
                    <div className="col-auto">
                      <a href="https://virtual-meeting.foodsecuritysummitx.com/auth/signup" className="btn btn-theme-action px-4 py-2 text-white holographic-btn">
                        <span>APPLY FOR PARTICIPATION</span>
                      </a>
                    </div>
                    <div className="col-auto">
                      <Link 
                        to="/Contact" 
                        className="btn px-4 py-2 btn-theme-action" 
                        style={{ 
                          background: "transparent", 
                          color: "green", 
                          borderColor: "green",
                          borderWidth: "2px",
                          fontWeight: "700"
                        }}
                      >
                        SCHEDULE A CALL
                      </Link>
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

      {/*--Trust Logos Section start--*/}
      <section className="partners py-8 bg-white border-bottom border-light">
        <div className="container">
          <div className="partner-inner">
            <div className="partner-title text-center pb-5 w-lg-60 m-auto">
              <p className="mb-1 pink">TRUST LOGOS</p>
              <h2 className="mb-2">
                IN COLLABORATION WITH THE <span className="pink">BEST</span>
              </h2>
              <p className="m-0 text-muted">
                Presented by, supported by, and in partnership with leading global institutions and agricultural giants.
              </p>
            </div>
            
            <div className="row justify-content-center align-items-center g-4 mt-2">
              {[
                { name: "Emirates Bustanica", logo: "/assets/images/virtual/InPartnershipwith.jpg", label: "In Partnership With" },
                { name: "Pure Harvest", logo: "/assets/images/virtual/Organisedby.jpg", label: "Organised By" },
                { name: "Abu Dhabi Agriculture & Food Safety Authority", logo: "/assets/images/virtual/Supportedby.jpg", label: "Supported By" },
                // { name: "Silal", textFallback: true, label: "Presented By" },
                // { name: "AAAID", textFallback: true, label: "Supported By" },
                // { name: "WFP", textFallback: true, label: "In Partnership With" },
              ].map((p, index) => (
                <div key={index} className="col-lg-2 col-md-4 col-6 text-center">
                  <span className="d-block text-muted mb-2 fw-bold" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>{p.label}</span>
                  <div 
                    className="p-3 bg-light rounded d-flex flex-column align-items-center justify-content-center shadow-sm" 
                    // style={{ 
                    //   height: "140px", 
                    //   border: "1px solid rgba(19, 129, 42, 0.15)",
                    //   transition: "transform 0.3s ease",
                    //   cursor: "pointer"
                    // }}
                    // onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                    // onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    {!p.textFallback ? (
                      <img 
                        src={p.logo} 
                        alt={p.name} 
                        className="img-fluid" 
                        style={{ maxHeight: "80px", maxWidth: "100%", objectFit: "contain" }} 
                      />
                    ) : (
                      <div className="d-flex flex-column align-items-center justify-content-center h-100">
                        <span className="pink fw-bold" style={{ fontSize: "1.15rem", letterSpacing: "0.5px" }}>{p.name}</span>
                        <small className="text-muted" style={{ fontSize: "0.7rem", marginTop: "4px" }}>Official Partner</small>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted mt-5 mb-0 fw-bold" style={{ fontSize: "0.9rem" }}>
              And many more global partners coming soon...
            </p>
          </div>
        </div>
      </section>
      {/*--Trust Logos Section end--*/}
       <section className="partners py-8 bg-white border-bottom border-light">
        <div className="container">
          <div className="partner-inner">
            <div className="partner-title text-center pb-5 w-lg-60 m-auto">
              <p className="mb-1 pink">TRUST LOGOS</p>
              <h2 className="mb-2">
                STARTUP <span className="pink">JOINING</span>
              </h2>
            </div>
            
            <div className="row justify-content-center align-items-center g-4 mt-2">
              {[
                { name: "Emirates Bustanica", logo: "/assets/images/virtual/startup/BK.jpg", label: "Bk GreenHouses" },
                { name: "Pure Harvest", logo: "/assets/images/virtual/startup/EverlendAgritech.jpg", label: "Everlend Agritech" },
                { name: "Abu Dhabi Agriculture & Food Safety Authority", logo: "/assets/images/virtual/startup/Farmers.jpg", label: "Farmers Lab" },
                 { name: "Emirates Bustanica", logo: "/assets/images/virtual/startup/Seafertil.jpg", label: "Seafertil" },
          
              ].map((p, index) => (
                <div key={index} className="col-lg-2 col-md-4 col-6 text-center">
                  <span className="d-block text-muted mb-2 fw-bold" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>{p.label}</span>
                  <div 
                    className="p-3 bg-light rounded d-flex flex-column align-items-center justify-content-center shadow-sm" 
                    // style={{ 
                    //   height: "140px", 
                    //   border: "1px solid rgba(19, 129, 42, 0.15)",
                    //   transition: "transform 0.3s ease",
                    //   cursor: "pointer"
                    // }}
                    // onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                    // onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    {!p.textFallback ? (
                      <img 
                        src={p.logo} 
                        alt={p.name} 
                        className="img-fluid" 
                        style={{ maxHeight: "80px", maxWidth: "100%", objectFit: "contain" }} 
                      />
                    ) : (
                      <div className="d-flex flex-column align-items-center justify-content-center h-100">
                        <span className="pink fw-bold" style={{ fontSize: "1.15rem", letterSpacing: "0.5px" }}>{p.name}</span>
                        <small className="text-muted" style={{ fontSize: "0.7rem", marginTop: "4px" }}>Official StartUp Partner</small>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
  
          </div>
        </div>
      </section>

      {/*--Why This Platform Section start--*/}
      <section className="feature text-black py-8 bg-light">
        <div className="container">
          <div className="feature-inner">
            <div className="feature-title text-center pb-6 w-lg-60 m-auto">
              <p className="mb-1 pink">WHY THIS PLATFORM</p>
              <h2 className="mb-2">
                FOUR PILLARS OF <span className="pink">ENGAGEMENT</span>
              </h2>
              <p className="m-0 text-muted">
                A purpose-built digital ecosystem connecting capital, innovation, and strategic networks.
              </p>
            </div>
            
            <div className="feature-lists pt-4">
              <div className="row g-4 justify-content-center">
                {[
                  {
                    icon: "fa-handshake-o",
                    title: "Curated 1:1 Meetings",
                    text: "Pre-scheduled strategic meetings with regional stakeholders, buyers, investors, and ecosystem leaders."
                  },
                  {
                    icon: "fa-line-chart",
                    title: "Investor Access",
                    text: "Connect with investors, family offices, and strategic capital partners across the GCC ecosystem."
                  },
                  {
                    icon: "fa-rocket",
                    title: "Startup Showcase",
                    text: "Present your innovation to industry leaders, investors, and regional decision-makers."
                  },
                  {
                    icon: "fa-globe",
                    title: "GCC Market Access",
                    text: "Explore partnership, distribution, and expansion opportunities across the GCC and Middle East markets."
                  }
                ].map((item, i) => (
                  <div key={i} className="col-lg-3 col-md-6">
                    <div 
                      className="feature-box py-5 px-4 rounded bg-white shadow-sm h-100 border-top border-pink border-3 text-center" 
                      style={{ 
                        transition: "all 0.3s ease-in-out",
                        border: "1px solid rgba(0,0,0,0.05)"
                      }}
                    >
                      <div className="feature-box-icon mb-4">
                      </div>
                      <div className="feature-box-info">
                        <h5 className="text-black mb-3 fw-bold">{item.title}</h5>
                        <p className="text-muted mb-0" style={{ fontSize: "0.88rem", lineHeight: "1.5" }}>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Why This Platform Section end--*/}

      {/*--Who Should Join Section start--*/}
      <section className="who-should-join py-8 bg-white">
        <div className="container">
          <div className="text-center pb-6">
            <p className="mb-1 pink">WHO SHOULD JOIN</p>
            <h2 className="mb-2">
              BUILDING BRIDGES ACROSS the <span className="pink">ECOSYSTEM</span>
            </h2>
            <p className="w-lg-60 mx-auto text-muted">
              Uniting key decision-makers, disruptive startup founders, and global resource facilitators under one digital roof.
            </p>
          </div>
          
          <div className="row g-4 mt-2">
            {[
              { title: "Startups & Scaleups", desc: "Redefining AgTech, sustainable farming, and food supply chains.", icon: "fa-rocket" },
              { title: "Investors & Family Offices", desc: "Looking for high-impact capital deployment in sustainable food assets.", icon: "fa-money" },
              { title: "Government & Institutions", desc: "Setting policies, standards, and building food sovereignty frameworks.", icon: "fa-institution" },
              { title: "AgriFood Companies", desc: "Aiming to adopt innovations, streamline logistics, and source clean tech.", icon: "fa-leaf" },
              { title: "Innovation Ecosystems", desc: "Incubators, accelerators, and research institutes driving food tech.", icon: "fa-gears" },
              { title: "Procurement & Distribution Leaders", desc: "Expanding distribution channels and sourcing GCC market products.", icon: "fa-truck" }
            ].map((cat, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div 
                  className="p-4 rounded-3 bg-light shadow-sm h-100 d-flex gap-3 align-items-start border border-light"
                  style={{ 
                    transition: "transform 0.3s ease",
                    cursor: "default"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  <div 
                    className="p-3 bg-white rounded-circle shadow-sm text-pink d-flex align-items-center justify-content-center"
                    style={{ minWidth: "50px", height: "50px" }}
                  >
                    <i className={`fa ${cat.icon} fs-5`}></i>
                  </div>
                  <div>
                    <h5 className="mb-2 text-black fw-bold">{cat.title}</h5>
                    <p className="text-muted mb-0" style={{ fontSize: "0.88rem", lineHeight: "1.5" }}>{cat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*--Who Should Join Section end--*/}

      {/*--How It Works Section start--*/}
      <section className="how-it-works py-8 text-white position-relative">
        <div className="container">
          <div className="text-center pb-6">
            <p className="mb-1 pink">SIMPLE 4-STEP FLOW</p>
            <h2 className="mb-2 text-white">
              HOW TO <span className="pink">PARTICIPATE</span>
            </h2>
            <p className="w-lg-60 mx-auto text-dark opacity-75">
              An optimized journey engineered to deliver maximum engagement, matching, and business outcomes.
            </p>
          </div>
          
          <div className="row g-4 mt-4 position-relative">
            {[
              { step: "01", title: "Apply", desc: "Submit your application detailing your offering, investment focus, or startup profile." },
              { step: "02", title: "Get Matched", desc: "Our smart matchmaking system suggests relevant stakeholders based on mutual strategic alignment." },
              { step: "03", title: "Attend Curated Meetings", desc: "Join 1:1 pre-scheduled video calls directly through our high-performance virtual portal." },
              { step: "04", title: "Build Strategic Partnerships", desc: "Finalize agreements, secure funding, or launch GCC market expansion plans." }
            ].map((step, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div 
                  className="p-4 rounded-3 text-center h-100" 
                  style={{ 
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <div 
                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center mb-4 text-dark" 
                    style={{ 
                      width: "65px", 
                      height: "65px", 
                      background: "#13812a", 
                      fontSize: "1.4rem", 
                      fontWeight: "700" 
                    }}
                  >
                    {step.step}
                  </div>
                  <h4 className="text-dark mb-3 fw-bold">{step.title}</h4>
                  <p className="text-dark opacity-75 mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*--How It Works Section end--*/}

      {/*--Speakers / Ecosystem Leaders Section start--*/}
      {/* <section className="speakers py-8 bg-white">
        <div className="container">
          <div className="speaker-inner">
            <div className="speaker-title text-center pb-6">
              <p className="mb-1 pink">SPEAKERS / ECOSYSTEM LEADERS</p>
              <h2 className="mb-2">
                MEET OUR <span className="pink">VISIONARIES</span>
              </h2>
              <p className="m-0 text-muted w-lg-60 mx-auto">
                Join distinguished voices from across the GCC and the world as they discuss food security solutions and AgTech expansion.
              </p>
            </div>
            
            <div className="row g-4 justify-content-center">
              {[
                {
                  name: "Shwetha Joshi",
                  designation: "Program Director at DEHAT",
                  image: "assets/images/speakers/1.jpg"
                },
                {
                  name: "Amit Grover",
                  designation: "Managing Partner at Grover & Company",
                  image: "assets/images/speakers/2.jpg"
                },
                {
                  name: "Warmate Jones Idikio",
                  designation: "Founder at THE AFCFTA",
                  image: "assets/images/speakers/3.jpg"
                },
                {
                  name: "José Francisco Fernández Serna",
                  designation: "Chief Executive Officer at E-motion Foods",
                  image: "assets/images/speakers/4.jpg"
                }
              ].map((speaker, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div 
                    className="speaker-box position-relative overflow-hidden text-white rounded-3 shadow-sm" 
                    style={{ height: "360px", cursor: "pointer" }}
                  >
                    <img
                      className="w-100 h-100"
                      src={speaker.image}
                      alt={speaker.name}
                      style={{ objectFit: "cover" }}
                    />
                    <div 
                      className="box-content position-absolute bottom-0 z-1 p-4 w-100 text-center"
                      style={{ 
                        background: "linear-gradient(transparent, rgba(0, 0, 0, 0.85))",
                        transform: "translateY(0)" 
                      }}
                    >
                      <h6 className="speaker-title d-block text-light pb-1 fw-bold" style={{ fontSize: "1.05rem" }}>
                        {speaker.name}
                      </h6>
                      <span className="speaker-post d-block text-light" style={{ fontSize: "0.8rem", color: "#ddd" }}>
                        {speaker.designation}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="col-lg-3 col-md-6">
                <div 
                  className="speaker-box position-relative overflow-hidden rounded-3 d-flex flex-column align-items-center justify-content-center text-center p-4" 
                  style={{ 
                    height: "360px", 
                    border: "3px dashed #13812a", 
                    background: "#f9fbf9",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)"
                  }}
                >
                  <div 
                    className="p-3 bg-pink bg-opacity-10 rounded-circle text-pink mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px", background: "rgba(255, 0, 127, 0.08)" }}
                  >
                    <i className="fa fa-plus fs-2"></i>
                  </div>
                  <h4 className="fw-bold text-black mb-2">+ More Joining</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*--Speakers Section end--*/}

      {/*--Proven Track Record Section start--*/}
      <section className="feature text-black py-8 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="feature-inner">
            <div className="text-center pb-6">
              <p className="mb-1 pink">PROVEN TRACK RECORD</p>
              <h2 className="mb-2">
                A LEGACY OF IMPACT AND <span className="pink">COLLABORATION</span>
              </h2>
              <p className="w-lg-60 mx-auto text-muted">
                Our past summits set unprecedented benchmarks. We bring that same network power to the virtual landscape.
              </p>
            </div>
            
            {/* Counter Section */}
            <div className="counter text-center border-bottom border-dark border-opacity-25 pb-5">
              <div className="inner-counter d-flex justify-content-between flex-wrap gap-4">
                {[
                  { end: 420, label: "Attendees" },
                  { end: 200, label: "Organizations" },
                  { end: 20, label: "Countries" },
                  { end: 39, label: "% C-Suite", suffix: "%", showDecimal: true }
                ].map((item, i, arr) => (
                  <div
                    key={i}
                    className={`counter-box flex-fill p-2 text-center ${
                      i !== arr.length - 1
                        ? "border-end border-dark border-opacity-25"
                        : ""
                    }`}
                  >
                    {item.showDecimal ? (
                      <div className="d-inline-block">
                        <CountUpBox end={39} label="C-Suite" suffix="%" />
                        <span className="pink fw-bold d-block" style={{ fontSize: "0.8rem", marginTop: "-10px" }}>(38.9% Actual)</span>
                      </div>
                    ) : (
                      <CountUpBox end={item.end} label={item.label} suffix="+" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Logos underneath */}
            {/* <div className="pt-6">
              <p className="text-center text-muted fw-bold mb-4" style={{ letterSpacing: "1px", fontSize: "0.85rem", textTransform: "uppercase" }}>
                COMPANIES REPRESENTED IN OUR ECOSYSTEM
              </p>
              <div className="row g-4 align-items-center justify-content-center">
                {[10, 15, 17, 26, 39, 44].map((id) => (
                  <div key={id} className="col-lg-2 col-md-4 col-6 text-center">
                    <img 
                      src={`/assets/images/companysLogo/${id}.jpg`} 
                      alt="Participant logo" 
                      className="img-fluid" 
                      style={{ 
                        maxHeight: "50px", 
                        filter: "grayscale(100%) opacity(60%)", 
                        transition: "all 0.3s ease",
                        cursor: "default"
                      }} 
                      onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%) opacity(100%)"}
                      onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(100%) opacity(60%)"}
                    />
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/*--Proven Track Record Section end--*/}

      {/*--Ticketbook (Final CTA) Section start--*/}
      <section 
        className="ticket position-relative" 
        style={{
          backgroundImage: "url('/assets/images/virtual/Virtual2.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "90px 0"
        }}
      >
        <div 
          className="overlay" 
          style={{ 
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(90deg, rgba(65, 216, 236, 0.9) 0%, rgba(43, 107, 37, 0.9) 100%)",
            zIndex: 1
          }}
        ></div>
        
        <div className="container position-relative z-2">
          <div className="ticket-inner w-lg-75 mx-auto text-center text-white">
            <div className="ticket-title mb-4">
              <h5 className="text-white mb-2" style={{ fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                Apply for Strategic Participation
              </h5>
              <h1 className="text-white mb-3" style={{ fontWeight: "800" }}>
                SECURE YOUR INTERACTIVE <span className="pink">VIRTUAL ACCESS</span>
              </h1>
            </div>
            
            <div className="ticket-info">
              <p className="mb-5 text-light opacity-90 mx-auto" style={{ fontSize: "1.1rem", maxWidth: "700px", lineHeight: "1.6" }}>
                Maximize your outcomes by applying today. Connect directly with venture funding, showcase your AgriFood innovations, and explore GCC-wide market scaling options.
              </p>
              
              <div className="ticket-button d-flex justify-content-center flex-wrap gap-3">
                <a href="https://virtual-meeting.foodsecuritysummitx.com/auth/signup" className="btn btn-lg px-4 py-2 btn-theme-action" style={{ background: "#ffffff", color: "#13812a", fontWeight: "700", border: "2px solid #ffffff" }}>
                  APPLY NOW
                </a>
                <Link to="/exhibit-sponsor" className="btn btn-lg px-4 py-2 btn-theme-action text-white" style={{ background: "#ff007f", borderColor: "#ff007f", fontWeight: "700" }}>
                  PARTNER WITH US
                </Link>
                <Link 
                  to="/Contact" 
                  className="btn btn-lg px-4 py-2 btn-theme-action text-white" 
                  style={{ 
                    background: "transparent", 
                    border: "2px solid #ffffff",
                    fontWeight: "700" 
                  }}
                >
                  SCHEDULE DISCUSSION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Ticketbook Section end--*/}
    </div>
  );
}

export default Virtual;
