// Speakers.jsx
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Speakers = () => {
  const speakers = [
    { id: 13, name: "Sepehr A. Achard", designation: "COO / Co-Founder - iGrow News", image: "/assets/images/speaker/13.jpg", url: "" },
    { id: 14, name: "Soren N, Kannik- Marquardsen", designation: "Minister Counsellor for Food,Agriculture & Fisheries at the Royal Danish Consulate General in Dubai", image: "/assets/images/speaker/14.jpg", url: "" },
    { id: 15, name: "Amit Grover", designation: "Managing Partner and General Partner at Grover & Company and Grover Impact Ventures", image: "/assets/images/speaker/15.jpg", url: "" },
    { id: 16, name: "Dr. Mohammed Albreiki", designation: "Director of Applied Research and Capability- Abu Dhabi Agriculture and Food Safety Authority", image: "/assets/images/speaker/16.jpg", url: "https://www.linkedin.com/in/dr-mohammed-albreiki-745ba984/" },
    { id: 17, name: "José Francisco Fernández Serna", designation: "CEO E-motion Foods, Partner Miracle Ingredients, Desert Tech Ventures and some other international organizations in different stages of the Food Value Chain", image: "/assets/images/speaker/17.jpg", url: "https://www.linkedin.com/in/josefern/" },
    { id: 18, name: "Shwetha Joshi", designation: "Program Director at DEHAT", image: "/assets/images/speaker/18.jpg", url: "https://www.linkedin.com/in/josefern/" },
    { id: 19, name: "Warmate Jones Idikio", designation: "Founder at THE AFCFTA", image: "/assets/images/speaker/19.jpg", url: "https://www.linkedin.com/in/warmate-jones-idikio-9323682a/" },
    { id: 20, name: "Dr. Uzi Mor", designation: "Founder & Chairman at RobotPicks", image: "/assets/images/speaker/20.jpg", url: "https://www.linkedin.com/in/uzimor/" },
    { id: 21, name: "Johann Pozzi", designation: "Agriculture Market Analyst at SISI INNOVATIONS, Impact CVM of Yachiyo Engineering", image: "/assets/images/speaker/21.jpg", url: "" },
    { id: 22, name: "Grant Smith", designation: "Chief Executive Officer at BioGiene Services Pty Limited", image: "/assets/images/speaker/22.jpg", url: "https://www.linkedin.com/in/grant-smith-2b839a41/" },
    { id: 23, name: "Bella (Mijin Gwon) GWON", designation: "Founder & CEO, AgUni", image: "/assets/images/speaker/23.jpg", url: "https://www.linkedin.com/in/bellagwon/" },
    { id: 24, name: "Daniel Hill", designation: "Founder & CEO, AQUIVIO", image: "/assets/images/speaker/24.jpg", url: "https://www.linkedin.com/in/daniel-hill-469438144/" },
    { id: 25, name: "M. Olusola Sowemimo", designation: "Founder and Lead Strategist, Ope Farms & Nexus of Nature", image: "/assets/images/speaker/25.jpg", url: "https://www.linkedin.com/in/olusola-sowemimo/" },
    { id: 26, name: "Bernard Sleijster", designation: "CEO Food Security Capital", image: "/assets/images/speaker/26.jpg", url: "https://www.linkedin.com/in/bernard-sleijster-685888123/" },
    { id: 27, name: "Filipe Ribeiro, CIA, CRMA, CFE", designation: "Group Internal Audit Manager – Al Dahra", image: "/assets/images/speaker/27.jpg", url: "https://www.linkedin.com/in/filipe-ribeiro-cia-crma-cfe-53a81b32/" },
    { id: 28, name: "Anna L De Bacci", designation: "CEO, De Bacci Capital", image: "/assets/images/speaker/28.jpg", url: "https://www.linkedin.com/in/anna-l-de-bacci-18ab4125a/" },
    { id: 29, name: "Sophia Moulin", designation: "Founder & CEO, Epicon Capital Club", image: "/assets/images/speaker/29.jpg", url: "https://www.linkedin.com/in/sophiamoulin/" },
    { id: 30, name: "Darrin Dow", designation: "Co-Founder, President & CEO at Motion Ag Ai, Inc.", image: "/assets/images/speaker/30.jpg", url: "https://www.linkedin.com/in/ddow/" },
    { id: 31, name: "Sky Kurtz", designation: "Founder & CEO, Pure Harvest Smart Farms", image: "/assets/images/speaker/31.jpg", url: "https://www.linkedin.com/in/skykurtz/" },
    { id: 32, name: "Gaurav Sharma", designation: "Global Agribusiness Research Lead, Growth Markets Chemicals Research Lead, Growth & Strategy – Accenture", image: "/assets/images/speaker/32.jpg", url: "https://www.linkedin.com/in/gaurav-sharma-7019664/" },
    { id: 33, name: "Megumi Avigail Yoshitomi", designation: "Director of the Japan Association for Cellular Agriculture (JACA)", image: "/assets/images/speaker/33.jpg", url: "https://www.linkedin.com/in/megumi-avigail-yoshitomi-5a4907151/" },
    { id: 34, name: "Emmanuel T.", designation: "CEO and Co-Founder, Everlend", image: "/assets/images/speaker/34.jpg", url: "https://www.linkedin.com/in/emmanuel-t-630a17178/" },
    { id: 35, name: "Josh McClain", designation: "CEO, Firebolt Carbon LLC", image: "/assets/images/speaker/35.jpg", url: "https://www.linkedin.com/in/josh-mcclain-121616325/" },
    { id: 36, name: "Thomas Paveglio", designation: "Founder & CEO, Cambria Bio", image: "/assets/images/speaker/36.jpg", url: "https://www.linkedin.com/in/thomas-paveglio-51083617b/" },
    { id: 37, name: "Ts. Poonthalir Veeran", designation: "Chief Executive Officer, Nielsen Nexus Group", image: "/assets/images/speaker/37.jpg", url: "https://www.linkedin.com/in/ts-poonthalir-veeran-a93921201/" },
    { id: 38, name: "H.E. Dr. Obaid Saif Hamad Al Zaabi", designation: "Board Chairman of the Arab Authority for Agricultural Investment and Development", image: "/assets/images/speaker/38.jpg", url: "https://www.linkedin.com/in/obaid-s-al-zaabi-phd-mba-ca-cma-cipa-aaa-823b9913/" },
    { id: 39, name: "Paul Streater", designation: "Chief Executive Officer, GroNatural dba GroPro", image: "/assets/images/speaker/39.jpg", url: "https://www.linkedin.com/in/pstreater/" },
    { id: 40, name: "Hasan Chaithanya D", designation: "Founder, Tapovanam Organic Farming Systems Private Limited", image: "/assets/images/speaker/40.jpg", url: "https://www.linkedin.com/in/hasan-chaithanya-d/" },
    { id: 43, name: "Hanane Fellahi (PMP)", designation: "Chief Executive Officer, GroNatural dba GroPro", image: "/assets/images/speaker/43.jpg", url: "https://www.linkedin.com/in/hanane-fellahi-pmp-%C2%AE-3097b01a0/" },
    { id: 45, name: "Richard Kohn", designation: "General Manager SkyFarms, Global Marketing and Public Affairs Director, iyris", image: "/assets/images/speaker/45.jpg", url: "https://www.linkedin.com/in/richardkohnthemarchitect/" },
    { id: 46, name: "Rameez Al Daour", designation: "Food Consultant/ Educator at SEE Food", image: "/assets/images/speaker/46.jpg", url: "https://www.linkedin.com/in/rameez-al-daour-789084174/" },
    { id: 47, name: "Seçil Yurtseven", designation: "Founder – Çiftçiexpress CEO – MasterCat", image: "/assets/images/speaker/47.jpg", url: "https://www.linkedin.com/in/yurtsevensecil/" },
    { id: 48, name: "Gabriele Chiodini", designation: "Scientific Director of Akren", image: "/assets/images/speaker/48.jpg", url: "https://www.linkedin.com/in/gabriele-chiodini/" },
    { id: 49, name: "Steinar Gulaker", designation: "General Manager and Founder Innovate Future", image: "/assets/images/speaker/49.jpg", url: "https://www.linkedin.com/in/steinar-gulaker-7902286b/" },
    { id: 50, name: "Kodiak Aranzhevson", designation: "CEO and Founding Member of BatchLynx and Primus Castra Intellectual", image: "/assets/images/speaker/50.jpg", url: "https://www.linkedin.com/in/kodiak-aranzhevson/" },
    { id: 51, name: "Michael Ott", designation: "Senior Ag Industry Expert for Granite Creek Capital Partners, L.L.C.", image: "/assets/images/speaker/51.jpg", url: "https://www.linkedin.com/in/michael-ott-362a2/" },
    { id: 52, name: "Abdalla Elkhouli", designation: "Head of AgTech, TriplA", image: "/assets/images/speaker/52.jpg", url: "https://www.linkedin.com/in/abdalla-elkhouli/" },
    { id: 53, name: "Dr. Balaji Vasudevan", designation: "Venture Partner And AgroBioscience Consultant", image: "/assets/images/speaker/53.jpg", url: "https://www.linkedin.com/in/balaji-vasudevan/" },
    { id: 54, name: "Mafah Cornelius Kuta", designation: "Founder/CEO, Wandusoa Organic Cameroon", image: "/assets/images/speaker/54.jpg", url: "https://www.linkedin.com/in/mafahkutacornelius/" },
    { id: 55, name: "Anupam Kumar", designation: "Founder & Principal at TSR Lab", image: "/assets/images/speaker/55.jpg", url: "https://www.linkedin.com/in/anupamiitkgp/" },
    { id: 56, name: "Safia Sarfaraz", designation: "Strategic Partnerships and Alliances at BigHaat | Founder and CEO at Healthing Global Private Limited", image: "/assets/images/speaker/56.jpg", url: "https://www.linkedin.com/in/safia-sarfaraz-6883091b8/" },
    { id: 57, name: "Daniel Chavo Kisekka", designation: "Founder & CEO, Veridian Bioharvest", image: "/assets/images/speaker/57.jpg", url: "https://www.linkedin.com/in/daniel-chavo-kisekka-thefirst/" },
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
        title="Voices Shaping the Future of Food"
        subtitle="Meet the global leaders, innovators, and changemakers behind SummitX 2026"
        bgImage="/assets/images/apply/Pitch.jpg"
      />

      <section className="py-8">
        <div className="container">
          {/* Intro Section */}
          <div className="row mb-5" style={{ marginTop: "60px" }}>
            <div className="col-lg-10 mx-auto">
              <div className="bg-white rounded p-5 box-shadow text-center">
                <h3 className="mb-4">Meet the Leaders on the SummitX Stage</h3>
                <p className="mb-3">
                  Bringing together global experts from agriculture, technology,
                  sustainability, policy, and investment, the Food Security
                  SummitX speaker lineup reflects the diverse minds driving
                  progress across the food ecosystem.
                </p>
                <p className="mb-0">
                  Each speaker contributes real-world insight, strategic perspective, and leadership experience, turning conversations into action and ideas into impact.
                </p>
              </div>
            </div>
          </div>

          {/* Speaker Photos Grid */}
          <section className="partners-section">
            <div className="partners-container">
              <h2 className="partners-title">
                Our  <span className="green">Speakers</span>
              </h2>

              <div className="partners-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '30px' }}>
                {speakers.map((speaker) => (
                  <a
                    key={speaker.id}
                    href={speaker.url ? speaker.url : undefined}
                    target={speaker.url ? "_blank" : undefined}
                    rel={speaker.url ? "noopener noreferrer" : undefined}
                    className="partner-card"
                    style={{ height: 'auto', padding: '15px', cursor: speaker.url ? 'pointer' : 'default', textDecoration: 'none' }}
                  >
                    <div className="partner-logo-container" style={{ width: '100%', height: '250px', borderRadius: '10px', border: 'none', overflow: 'hidden' }}>
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="partner-logo"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/300x400?text=" + speaker.name;
                        }}
                      />
                    </div>
                    <div className="text-center mt-3">
                      <h5 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px', color: '#000' }}>{speaker.name}</h5>
                      <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>{speaker.designation}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="bg-white rounded p-5 box-shadow text-center">
                <h4 className="mb-4">Want to Take the Stage?</h4>
                <p className="mb-4">
                  If you have expertise, innovation, or leadership experience
                  that can contribute to the global dialogue on food security,
                  we invite you to be part of the SummitX speaker community.
                </p>
                <p className="mb-4">
                  Apply to speak at the Food Security SummitX 2026 – Dubai and
                  share your voice with a global audience.
                </p>
                <Link
                  to="/Booknow"
                  className="btn btn-theme-action btn-lg px-5 py-3"
                >
                  Apply to Speak
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
