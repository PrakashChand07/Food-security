// // Partners.jsx
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
// import EventSlider from "../Components/EventSlider";

const EventPartners = () => {
  const companies = [
    { id: 1, name: "Pure harvest Farms", logo: "assets/images/companysLogo/1.jpg", url: "https://www.pureharvestfarms.com/" },
    { id: 2, name: "Abu Dhabi Agriculture and Food Safety Authority", logo: "assets/images/companysLogo/2.jpg", url: "https://www.linkedin.com/company/adafsa/about/" },
    { id: 3, name: "AFCFTA Roundtable", logo: "assets/images/companysLogo/3.jpg", url: "https://www.afcftaroundtable.com/" },
    { id: 4, name: "Grover & Company", logo: "assets/images/companysLogo/4.jpg", url: "https://www.linkedin.com/company/grover-&-company/" },
    { id: 5, name: "Igrow News", logo: "assets/images/companysLogo/5.png", url: "https://www.linkedin.com/company/igrow-news/" },
    { id: 6, name: "AgUni", logo: "assets/images/companysLogo/6.jpg", url: "https://www.afcftaroundtable.com/" },
    { id: 7, name: "AQUIVIO", logo: "assets/images/companysLogo/7.jpg", url: "https://www.linkedin.com/company/aquivio/posts/?feedView=all" },
    { id: 8, name: "BioGiene Services Pty Limited", logo: "assets/images/companysLogo/8.jpg", url: "https://www.linkedin.com/company/biogiene/posts/?feedView=all" },
    { id: 9, name: "Ope Farms", logo: "assets/images/companysLogo/9.jpg", url: "https://www.linkedin.com/company/ope-farms/" },
    { id: 10, name: "Aldahra", logo: "assets/images/companysLogo/10.jpg", url: "https://www.linkedin.com/company/al-dahra-agriculture/" },
    { id: 11, name: "E-motionfoods", logo: "assets/images/companysLogo/11.jpg", url: "https://www.e-motionfoods.com/?lang=en" },
    { id: 12, name: "DEHAT India", logo: "assets/images/companysLogo/12.jpg", url: "https://www.linkedin.com/company/dehat-india/" },
    { id: 13, name: "Epicon Captial Club", logo: "assets/images/companysLogo/13.jpg", url: "https://www.epiconcapital.com/" },
    { id: 14, name: "Cambria Bio", logo: "assets/images/companysLogo/14.jpg", url: "https://www.linkedin.com/company/cambria-ai-inc/" },
    { id: 15, name: "Motion Ag Ai, Inc", logo: "assets/images/companysLogo/15.jpg", url: "https://motionag.ai/" },
    { id: 16, name: "The Brain Hub", logo: "assets/images/companysLogo/16.jpg", url: "https://thebrainhub.com/" },
    { id: 17, name: "Accenture", logo: "assets/images/companysLogo/17.jpg", url: "https://www.linkedin.com/company/accenture/" },
    { id: 18, name: "Japan Association for Cellular Agriculture", logo: "assets/images/companysLogo/18.jpg", url: "https://www.linkedin.com/company/japan-association-for-cellular-agriculture-jaca-%E7%B4%B0%E8%83%9E%E8%BE%B2%E6%A5%AD%E7%A0%94%E7%A9%B6%E6%A9%9F%E6%A7%8B/" },
    { id: 19, name: "Everlend Agritech", logo: "assets/images/companysLogo/19.jpg", url: "https://www.linkedin.com/company/everlendug/" },
    { id: 20, name: "Maverick X", logo: "assets/images/companysLogo/20.jpg", url: "https://www.maverickx.com/" },
    { id: 21, name: "Food Security Capital", logo: "assets/images/companysLogo/21.jpg", url: "https://foodsecuritycapital.com/about-us/" },
    { id: 22, name: "Eden Agriculture", logo: "assets/images/companysLogo/22.jpg", url: "https://edenaglabs.com/" },
    { id: 23, name: "Codecraftes", logo: "assets/images/companysLogo/23.jpg", url: "https://codercraftes.com/" },
    { id: 24, name: "Urban Plantcare", logo: "assets/images/companysLogo/24.jpg", url: "https://urbanplantcare.in/" },
    { id: 25, name: "Firebolt Carbon LLC", logo: "assets/images/companysLogo/25.jpg", url: "https://www.fireboltag.com/" },
    { id: 26, name: "NEOM", logo: "assets/images/companysLogo/26.jpg", url: "https://www.linkedin.com/company/discoverneom/" },
    { id: 27, name: "Algaesys Australia", logo: "assets/images/companysLogo/27.jpg", url: "https://www.linkedin.com/company/algaesys-au/" },
    { id: 28, name: "Gronatural Inc", logo: "assets/images/companysLogo/28.jpg", url: "https://www.gronatural.com/" },
    { id: 29, name: "Topovanam organic farming Systems private limited", logo: "assets/images/companysLogo/29.jpg", url: "https://www.tapovanam.earth" },
    { id: 30, name: "Hail Agriculture", logo: "assets/images/companysLogo/30.jpg", url: "https://www.linkedin.com/in/hail-agriculture-consultancy-6b934b195/" },
    { id: 31, name: "Nielson Nexus group", logo: "assets/images/companysLogo/31.jpg", url: "https://www.linkedin.com/company/nielson-nexus/" },
    { id: 32, name: "Big haat", logo: "assets/images/companysLogo/32.jpg", url: "https://www.linkedin.com/company/bighaat-india/" },
    { id: 33, name: "Akren", logo: "assets/images/companysLogo/33.jpg", url: "https://www.akrengroup.com/" },
    { id: 34, name: "Innovate Future AS", logo: "assets/images/companysLogo/34.jpg", url: "https://innovatefuture.no/en/home" },
    { id: 35, name: "AgUni", logo: "assets/images/companysLogo/35.jpg", url: "" },
    { id: 36, name: "Emirates Bustanica", logo: "assets/images/companysLogo/36.jpg", url: "https://www.linkedin.com/company/emirates-bustanica/" },
    { id: 38, name: "InSoil", logo: "assets/images/companysLogo/38.jpg", url: "https://www.linkedin.com/company/insoilclimate/" },
    { id: 39, name: "iyris", logo: "assets/images/companysLogo/39.jpg", url: "https://www.linkedin.com/company/iyrisadvantage/" },
    { id: 40, name: "Wandusoa Organic Cameroon", logo: "assets/images/companysLogo/40.jpg", url: "https://www.linkedin.com/company/wandusua-organic-cameroon/" },
    { id: 41, name: "Granite Creek Capital Partners, L.L.C.", logo: "assets/images/companysLogo/41.jpg", url: "https://www.linkedin.com/company/granite-creek-partners/" },
    { id: 42, name: "Algofait", logo: "assets/images/companysLogo/42.jpg", url: "https://algofait.com/" },
    { id: 43, name: "TSR Lab", logo: "assets/images/companysLogo/43.jpg", url: "https://www.linkedin.com/company/tsrlab/" },
    { id: 44, name: "Desert Group", logo: "assets/images/companysLogo/44.jpg", url: "https://desertgroup.ae/" },
    { id: 45, name: "Brilliant Group", logo: "assets/images/companysLogo/45.jpg", url: "https://brilliantsgrp.com/" },
    { id: 46, name: "BeneMeat", logo: "assets/images/companysLogo/46.jpg", url: "https://www.benemeat.com/" },
    { id: 47, name: "Deepak Fertilisers and Petrochemicals Corporation Ltd.", logo: "assets/images/companysLogo/47.jpg", url: "https://www.dfpcl.com/?prophazecheck=1" },
    { id: 48, name: "Emirates", logo: "assets/images/companysLogo/48.jpg", url: "http://kcs.ae/" },
    { id: 50, name: "ÇiftçiExpress", logo: "assets/images/companysLogo/50.jpg", url: "https://www.linkedin.com/company/ciftciexpress/" },
    { id: 51, name: "MasterCat", logo: "assets/images/companysLogo/51.jpg", url: "https://www.linkedin.com/company/master-cat/" },
    { id: 52, name: "Veridian Bioharvest", logo: "assets/images/companysLogo/52.jpg", url: "https://www.linkedin.com/company/veridian-bioharvest/" },
    { id: 53, name: "Global Farms", logo: "assets/images/companysLogo/53.jpg", url: "https://www.linkedin.com/company/the-global-farms/" },
    { id: 54, name: "TriplA", logo: "assets/images/companysLogo/54.jpg", url: "https://www.linkedin.com/company/triplaventures/" },
    { id: 56, name: "House of Representatives of the Hashemite Kingdom of Jordan.", logo: "assets/images/companysLogo/56.jpg", url: "https://www.representatives.jo/Default/Ar" },
    { id: 57, name: "Anffe", logo: "assets/images/companysLogo/57.jpg", url: "https://www.anffe.com/index.html" },
    { id: 58, name: "Cryptoken media", logo: "assets/images/companysLogo/58.jpg", url: "https://cryptoken.media/" },
    { id: 59, name: "Siliconindia", logo: "assets/images/companysLogo/59.jpg", url: "https://www.siliconindia.com/" },
    { id: 60, name: "Meap", logo: "assets/images/companysLogo/60.jpg", url: "" },
  ];

  return (
    <div>
      <style>{`
        /* Trusted Partners Section */
        .partners-section {
          padding: 64px 0;
        }
        
        .partners-container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }

        .partners-title {
          padding: 16px 0;
          text-align: center;
          font-weight: 700;
        }

        .partners-description {
          max-width: 896px; /* max-w-4xl */
          margin: 0 auto 48px; /* mx-auto mb-12 */
          color: #4b5563; /* text-gray-600 */
          text-align: center;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 32px; /* gap-8 */
          justify-items: center;
        }

        @media (min-width: 640px) {
          .partners-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 768px) {
          .partners-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .partners-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
          }
        }

        @media (min-width: 1280px) {
          .partners-grid {
            grid-template-columns: repeat(6, minmax(0, 1fr));
          }
        }

        .partner-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          cursor: pointer;
          text-decoration: none; /* Removed underline from link */
        }
        
        /* Group hover effect simulation for non-tailwind */
        .partner-card:hover .partner-logo-container {
          transform: translateY(-8px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
        }

        .partner-card:hover .partner-name {
          color: #8BAF3E;
        }

        .partner-logo-container {
          width: 176px; /* w-44 */
          height: 176px; /* h-44 */
          border-radius: 50%;
          border: 1px solid #8BAF3E;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px; /* p-2 */
          transition: all 300ms;
          overflow: hidden;
        }

        .partner-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .partner-name {
          margin-top: 16px; /* mt-4 */
          text-align: center;
          font-size: 0.875rem; /* text-sm */
          font-weight: 600;
          color: #1f2937; /* text-gray-800 */
          transition: color 150ms;
          padding: 0 8px;
        }
        
        .green {
           color: #8BAF3E;
        }

      `}</style>
      <Breadcrumb
        title="The Alliance Powering SummitX"
        subtitle="Organizations, brands, and institutions shaping the future of global food security"
        bgImage="assets/images/apply/Pitch.jpg"
      />

      <section className="py-8">
        <div className="container">
          {/* Intro Section */}
          <div className="row " style={{ marginTop: "60px" }}>
            <div className="col-lg-10 mx-auto">
              <div className="bg-white rounded p-5 box-shadow text-center">
                <h3 className="mb-4">Building Impact Through Collaboration</h3>
                <p className="mb-3">
                  Food Security SummitX is powered by a diverse ecosystem of
                  partners — including exhibitors, media partners, technology
                  providers, and industry leaders — all contributing to a shared
                  mission of advancing innovation, sustainability, and global
                  food resilience.
                </p>
                <p className="mb-0">
                  Together, these organizations create a platform where ideas
                  are exchanged, solutions are showcased, and meaningful
                  partnerships are formed across the agri-food value chain.
                </p>
              </div>
            </div>
          </div>
          <section className="partners-section">
            <div className="partners-container">
              <h2 className="partners-title">
                Our <span className="green">Sponsors</span>
              </h2>
              <div className="partners-grid">
                {companies
                  .filter((company) => [21, 34, 35, 36].includes(company.id))
                  .map((company) => (
                    <a href={company.url} target="_blank" rel="noopener noreferrer" key={company.id} className="partner-card">
                      <div className="partner-logo-container">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="partner-logo"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150?text=" + company.name;
                          }}
                        />
                      </div>
                      <span className="partner-name">
                        {company.name}
                      </span>
                    </a>
                  ))}
              </div>
            </div>
          </section>
          <section className="partners-section">
            <div className="partners-container">
              <h2 className="partners-title">
                Our Trusted <span className="green">Partners</span>
              </h2>

              <div className="partners-grid">
                {companies.map((company) => (
                  <a href={company.url} target="_blank" rel="noopener noreferrer" key={company.id} className="partner-card">
                    <div className="partner-logo-container">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="partner-logo"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/150?text=" + company.name;
                        }}
                      />
                    </div>
                    <span className="partner-name">
                      {company.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
          <section className="partners-section">
            <div className="partners-container">
              <h2 className="partners-title">
                Our <span className="green">Exhibitors</span>
              </h2>
              <div className="partners-grid">
                {companies
                  .filter((company) => [20, 21, 16, 22, 23, 24, 25, 29, 33, 34].includes(company.id))
                  .map((company) => (
                    <a href={company.url} target="_blank" rel="noopener noreferrer" key={company.id} className="partner-card">
                      <div className="partner-logo-container">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="partner-logo"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150?text=" + company.name;
                          }}
                        />
                      </div>
                      <span className="partner-name">
                        {company.name}
                      </span>
                    </a>
                  ))}
              </div>
            </div>
          </section>
          <section className="partners-section">
            <div className="partners-container">
              <h2 className="partners-title">
                Media <span className="green">Partners</span>
              </h2>

              <div className="partners-grid">
                {companies
                  .filter((company) => [57, 58, 59, 60].includes(company.id)).map((company) => (
                    <a href={company.url} target="_blank" rel="noopener noreferrer" key={company.id} className="partner-card">
                      <div className="partner-logo-container">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="partner-logo"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150?text=" + company.name;
                          }}
                        />
                      </div>
                      <span className="partner-name">
                        {company.name}
                      </span>
                    </a>
                  ))}
              </div>
            </div>
          </section>
          {/* Stronger Together */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="bg-white rounded p-5 box-shadow text-center">
                <h4 className="mb-4">Stronger Together</h4>
                <p className="mb-4">
                  Every partner plays a vital role in strengthening the SummitX
                  ecosystem — supporting dialogue, innovation, and business
                  connections that extend far beyond the event. Their
                  collaboration helps transform conversations into action and
                  ideas into lasting impact.
                </p>
                <p className="mb-4">
                  <b>Be part of the ecosystem driving the future of food.</b>
                </p>
                <Link
                  to="/Booknow"
                  className="btn btn-theme-action btn-lg px-5 py-3"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventPartners;
