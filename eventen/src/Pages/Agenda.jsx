import React from "react";
import Breadcrumb from "../Components/Breadcrumb";

const SummitAgenda = () => {
  return (

    <>
      {(() => {
        const structureCards = [
          {
            title: "Keynote Sessions",
            description: "Setting the global context with insights from senior leaders, policymakers, and industry pioneers.",
            image: "/assets/images/agenda/Keynote-Sessions.jpg"
          },
          {
            title: "Panel Discussions",
            description: "Deep-dive conversations addressing critical challenges, emerging trends, and scalable solutions across the food ecosystem.",
            image: "/assets/images/agenda/Panel-Discussions.jpg"
          },
          {
            title: "Startup & Innovation Spotlights",
            description: "Showcasing breakthrough ideas, technologies, and business models shaping the future of agriculture and food systems.",
            image: "/assets/images/agenda/Startup-Innovation-Spotlights.jpg"
          },
          {
            title: "Awards & Recognition Sessions",
            description: "Honoring excellence, leadership, and impact across companies and individuals driving meaningful change.",
            image: "/assets/images/agenda/Awards-Recognition-Sessions.jpg"
          }
        ];

        return (
          <>
            <style>{`
        /* HERO */
        .hero {
          position: relative;
          height: 420px;
          background: #111;
        }
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.65);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          padding: 0 20px;
        }
        .hero h1 { font-size: 42px; font-weight: 700; }
        .hero p { font-size: 18px; margin-top: 10px; }

        /* PAGE */
        .page { padding: 80px 0; }
        h2 { font-weight: 700; margin-bottom: 12px; }
        h3 { margin-top: 60px; font-weight: 600; }
        p { max-width: 900px; color: #333; }
        .green { color: #198754; }

        /* BLOCKS */
        .block { margin-top: 50px; }


        /* AGENDA */
        .day { margin-top: 50px; }
        .day-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .session {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 30px;
          padding: 18px 0;
          border-bottom: 1px solid #e5e5e5;
        }
        .time { font-weight: 600; color: #198754; }
        .session h4 { margin-bottom: 5px; }

        ul { margin-top: 15px; }
        ul li { margin-bottom: 8px; }

        /* CTA */
        .cta {
          text-align: center;
          padding: 90px 20px;
        }
        .cta p {
          margin: 0 auto;
        }
        .cta a {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 34px;
          background: #198754;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
        }

        /* AGENDA TABLE */
        .agenda-table {
          width: 100%;
          border-collapse: collapse;
          border: 2px solid #000;
          margin-top: 20px;
          color: #000;
        }
        .agenda-table th, .agenda-table td {
          border: 1px solid #000;
          padding: 15px;
          vertical-align: top;
          font-size: 15px;
        }
        .agenda-table .time-col {
          width: 160px;
          font-weight: 600;
          white-space: nowrap;
        }
        .agenda-table .speaker-col {
          width: 300px;
        }
        .agenda-table h4 {
          margin: 0 0 10px 0;
          font-size: 16px; 
          font-weight: 700;
        }
        .agenda-table ul {
          margin: 0 0 0 18px;
          padding: 0;
        }
        .agenda-table li {
          margin-bottom: 5px;
        }
        .break-row {
          background-color: #eafbea; /* Light green */
          text-align: center;
          font-weight: 700;
          padding: 12px;
        }
        .day-header {
           font-size: 36px;
           font-weight: 800;
           text-transform: uppercase;
           line-height: 1.2;
           color: #000;
           margin-top: 60px;
        }
        .day-subheader {
           font-size: 18px;
           font-weight: 400;
           color: #333;
           margin-bottom: 20px;
           text-transform: uppercase;
        }
      `}</style>


            <Breadcrumb
              title="Summit Agenda"
              subtitle="Two days of insight, dialogue, and decisive action"
              bgImage="/assets/images/whoAttends/hero.jpg"
            />

            {/* INTRO */}
            <section className="page container">
              <h2>
                What to Expect at <span className="green">Food Security SummitX 2026</span>
              </h2>
              <p>
                The SummitX agenda is designed to move beyond discussion and into
                direction. Across two focused days, global leaders examine challenges,
                share solutions, and build partnerships shaping the future of food
                security.
              </p>
              <p>
                From policy and investment to AgriTech, sustainability, and supply
                chains, every session is curated for strategic relevance, real-world
                insight, and business value.
              </p>

              {/* STRUCTURE */}
              {/* STRUCTURE */}
              <div className="block">
                <h2>Agenda Structure</h2>
                <p className="green">Built for impact, collaboration, and outcomes</p>
                <p>
                  The agenda is thoughtfully structured to balance <strong>visionary conversations</strong> with <strong>practical execution</strong>, ensuring meaningful engagement for every participant.
                </p>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
                  {structureCards.map((card, index) => (
                    <div className="col" key={index}>
                      <div className="card h-100 border-0 shadow-sm">
                        <div style={{ overflow: "hidden" }}>
                          <img
                            src={card.image}
                            className="card-img-top"
                            alt={card.title}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title h6 mb-3 fw-bold">{card.title}</h4>
                          <p className="card-text text-secondary small">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WHO YOU'LL HEAR FROM */}
              <div className="block">
                <h2>Who You’ll Hear From</h2>
                <p className="green">Voices with authority and influence</p>
                <p>Sessions feature a curated mix of:</p>
                <ul>
                  <li>Policymakers and government representatives</li>
                  <li>CEOs, founders, and senior executives</li>
                  <li>AgriTech innovators and researchers</li>
                  <li>Investors, VCs, and financial leaders</li>
                  <li>Sustainability and climate experts</li>
                </ul>
                <p>
                  Every speaker is selected for <strong>expertise, experience, and the ability to contribute meaningful insight</strong>, not just presence.
                </p>
              </div>

              {/* DAY 1 */}
              <div>
                <h2 className="day-header">AGENDA DAY 1</h2>
                <div className="day-subheader">15TH Sep 2026</div>

                <table className="agenda-table">
                  <tbody>
                    {/* Row 1 */}
                    <tr>
                      <td className="time-col">9:00 AM-9:15 AM</td>
                      <td colSpan="2">Inauguration ceremony</td>
                    </tr>
                    {/* Row 2 */}
                    <tr>
                      <td className="time-col">9:15 AM-9:30 AM</td>
                      <td colSpan="2">Opening Remarks</td>
                    </tr>
                    {/* Row 3 */}
                    <tr>
                      <td className="time-col">9:30 AM-9:50 AM</td>
                      <td colSpan="2"><strong>Standalone session</strong></td>
                    </tr>
                    {/* Row 4 */}
                    <tr>
                      <td className="time-col">9:50 AM-10:30 AM</td>
                      <td colSpan="2">
                        <h4>Panel Discussion: Next-Gen Seeds: Hybrid, CRISPR and Climate-Resilient Crops</h4>
                        <ul>
                          <li>Exploring how hybrid and CRISPR-driven seed innovations are boosting yield, resilience, and adaptability for farmers worldwide.</li>
                          <li>Understanding the rise of climate-resilient seeds designed to withstand heat, drought, salinity, and emerging environmental stresses.</li>
                        </ul>
                      </td>
                    </tr>
                    {/* Row 5 */}
                    <tr>
                      <td className="time-col">10:30 AM-11:10 AM</td>
                      <td>
                        <h4>Panel Discussion: Sustainable Fertilization & Soil Health: From NPK to Nano & Bio-Implications for Carbon Markets</h4>
                        <ul>
                          <li>Exploring how nano, biofertilisers, and controlled-release nutrients improve efficiency and reduce environmental impact.</li>
                          <li>Understanding soil microbiome boosters that enhance fertility, structure, and long-term regenerative health.</li>
                        </ul>
                      </td>
                      <td className="speaker-col">
                        <strong>Josh McClain</strong>–CEO at Firebolt Carbon LLC<br /><br />
                        <strong>Ts. Poonthalir Veeran</strong>–Chief Executive Officer, Nielson Nexus Group
                      </td>
                    </tr>
                    {/* Row 6 */}
                    <tr>
                      <td className="time-col">11:10 AM-11:50 AM</td>
                      <td>
                        <h4>Panel Discussion: Modern Crop Protection: Biopesticides and Integrated Pest Management</h4>
                        <ul>
                          <li>Highlighting sustainable pest control through biopesticides, pheromone traps, and targeted seed treatments.</li>
                          <li>Demonstrating how IPM blends cultural, biological, and safe chemical practices to reduce resistance and crop losses.</li>
                        </ul>
                      </td>
                      <td className="speaker-col">
                        <strong>Gaurav Sharma</strong> - Global Agribusiness Research Lead, Growth Markets Chemicals Research Lead, Growth & Strategy-Accenture<br /><br />
                        <strong>Paul Streater</strong> - Chief Executive Officer, GroNatural dba GroPro
                      </td>
                    </tr>
                    {/* Row 7 - Break */}
                    <tr>
                      <td colSpan="3" className="break-row">11:50 AM - 12:00 PM Networking Break</td>
                    </tr>
                    {/* Row 8 */}
                    <tr>
                      <td className="time-col">12:00 PM-12:40 PM</td>
                      <td colSpan="2">
                        <h4>Panel Discussion: Data-Driven Agriculture: IoT-Enabled Farm Management Systems</h4>
                        <ul>
                          <li>Showing how IoT sensors, FMS platforms, and AI analytics support smarter decisions and early problem detection.</li>
                          <li>Detailing how real-time data improves yield, reduces input waste, and modernizes both small and large farms.</li>
                        </ul>
                      </td>
                    </tr>
                    {/* Row 9 */}
                    <tr>
                      <td className="time-col">12:40 PM-01:20 PM</td>
                      <td>
                        <h4>Panel Discussion: Investing in the Future of Food — AgriTech, BioAg & Climate-Smart Returns</h4>
                        <ul>
                          <li>Exploring high-growth investment opportunities across AgriTech, automation, and biological inputs.</li>
                          <li>Discussing ROI, risk, and climate-aligned strategies attracting global and GCC-focused investors.</li>
                        </ul>
                      </td>
                      <td className="speaker-col">
                        <strong>Daniel Hill</strong> - Co-Founder AQUIVIO<br />
                        <strong>Bernard Sleijster</strong> - CEO of Food Security Capital.<br />
                        <strong>Shwetha Joshi</strong> - Program Director at DEHAT<br />
                        <strong>Hasan Chaithanya D</strong> - Founder at Tapovanam Organic Farming Systems Private Limited<br />
                        <strong>Johann Pozzi</strong> - Agriculture Market Analyst at SISI INNOVATIONS, the Impact CVC arm of Yachiyo Engineering
                      </td>
                    </tr>
                    {/* Row 10 */}
                    <tr>
                      <td className="time-col">01:20 PM-01:40 PM</td>
                      <td>
                        <h4>Standalone session: Feeding 10 Billion: An Impossible Task Without Robotic Fleets and its infrastructure</h4>
                      </td>
                      <td className="speaker-col">
                        <strong>Dr. Uzi Mor</strong> – Founder & CEO of RobotPicks Ltd
                      </td>
                    </tr>
                    {/* Row 11 - Lunch */}
                    <tr>
                      <td colSpan="3" className="break-row">01:40 PM-02:30 PM Networking Lunch</td>
                    </tr>
                    {/* Row 12 */}
                    <tr>
                      <td className="time-col">02:30 PM-03:30 PM</td>
                      <td colSpan="2">Startup pitch ceremony</td>
                    </tr>
                    {/* Row 13 */}
                    <tr>
                      <td className="time-col">03:30 PM-04:10 PM</td>
                      <td colSpan="2">
                        <h4>Panel Discussion: Automation on the Field: Agricultural Robotics and Drones</h4>
                        <ul>
                          <li>Demonstrating how robots, UAVs, and autonomous machinery reduce labor pressure and increase precision.</li>
                          <li>Showing how imaging, spraying drones, and smart robotics support scalability in modern food production.</li>
                        </ul>
                      </td>
                    </tr>
                    {/* Row 14 */}
                    <tr>
                      <td className="time-col">04:10 PM-04:50 PM</td>
                      <td>
                        <h4>Panel Discussion: Agri-Fintech and Marketplaces: Empowering Farmers through Digital Platforms</h4>
                        <ul>
                          <li>Highlighting digital tools that offer credit, insurance, and transparent payments for farmers.</li>
                          <li>Exploring blockchain, traceability, and online marketplaces linking producers directly to buyers.</li>
                        </ul>
                      </td>
                      <td className="speaker-col">
                        <strong>Emmanuel T.</strong><br />
                        CEO and Co-founder Everlend
                      </td>
                    </tr>
                    {/* Row 15 */}
                    <tr>
                      <td className="time-col">04:50 PM-05:30 PM</td>
                      <td>
                        <h4>Panel Discussion: Water for Agriculture: Desalination and Wastewater Reuse Solutions</h4>
                        <ul>
                          <li>Examining new technologies in desalination and treated wastewater for irrigation in arid regions.</li>
                          <li>Exploring infrastructure, cost, and policy models enabling alternative water sources for farms.</li>
                        </ul>
                      </td>
                      <td className="speaker-col">
                        <strong>Darrin Dow</strong><br />
                        President & CEO,<br />
                        Motion Ag Ai, Inc.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* DAY 2 */}
              {/* DAY 2 */}
              <div style={{ marginTop: "60px" }}>
                <h2 className="day-header">AGENDA DAY 2</h2>
                <div className="day-subheader">16TH SEP 2026 ( THURSDAY )</div>

                <table className="agenda-table">
                  <tbody>
                    {/* Row 1 */}
                    <tr>
                      <td className="time-col">9:15 AM-9:30 AM</td>
                      <td colSpan="2">Opening Remarks</td>
                    </tr>
                    {/* Row 2 */}
                    <tr>
                      <td className="time-col">09:30 AM-10:10 AM</td>
                      <td colSpan="2">
                        <h4>Panel Discussion: Precision Irrigation & Fertigation: Maximizing Water Use Efficiency</h4>
                        <ul>
                          <li>Showcasing drip, micro-irrigation, and automated systems that optimize water and nutrient delivery.</li>
                          <li>Highlighting fertigation tools and sensor-based scheduling that boost yield with minimal waste.</li>
                        </ul>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr>
                      <td className="time-col">10:10 AM-10:50 AM</td>
                      <td>
                        <h4>Panel Discussion: Cold Chain and Packaging: Preserving Quality from Farm to Table</h4>
                        <ul>
                          <li>Covering modern cold storage, reefer transport, and IoT monitoring that protect freshness.</li>
                          <li>Exploring innovative packaging like MAP and edible coatings that extend shelf life and reduce losses.</li>
                        </ul>
                      </td>
                      <td className="speaker-col">
                        <strong>Warmate Jones Idikio</strong> – Founder at THE AFCFTA
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr>
                      <td className="time-col">10:50 AM-11:30 AM</td>
                      <td>
                        <h4>Panel Discussion: Food Processing and Value Addition: From Harvest to High-Value Products</h4>
                        <ul>
                          <li>Focusing on processing technologies that convert raw produce into stable, profitable products.</li>
                          <li>Highlighting packhouses, grading lines, and advanced methods that reduce waste and increase export value.</li>
                        </ul>
                      </td>
                      <td className="speaker-col">
                        <strong>Grant Smith</strong><br />
                        Chief Executive Officer at BioGiene Services Pty Limited
                      </td>
                    </tr>
                    {/* Row 5 */}
                    <tr>
                      <td className="time-col">11:30 AM-11:50 AM</td>
                      <td colSpan="2"><strong>Standalone session</strong></td>
                    </tr>
                    {/* Row 6 - Break */}
                    <tr>
                      <td colSpan="3" className="break-row">11:50 AM - 12:00 PM Networking Break</td>
                    </tr>
                    {/* Row 7 */}
                    <tr>
                      <td className="time-col">12:00 PM-12:40 PM</td>
                      <td>
                        <h4>Panel Discussion: Agri-Logistics and Market Access: Connecting Producers to Consumers</h4>
                        <ul>
                          <li>Examining logistics hubs, warehousing, and digital supply chains improving agri-movement efficiency.</li>
                          <li>Exploring how traceability, certification, and e-commerce platforms expand market reach globally.</li>
                        </ul>
                      </td>
                      <td className="speaker-col">
                        <strong>Filipe Ribeiro</strong><br />
                        Group Internal Audit Manager - Al Dahra
                      </td>
                    </tr>
                    {/* Row 8 */}
                    <tr>
                      <td className="time-col">12:40 PM-01:20 PM</td>
                      <td>
                        <h4>Panel Discussion: Capital Meets Cultivation — Financing Food Security and Sustainable Growth</h4>
                        <ul>
                          <li>Bringing together investors exploring bankable projects across water, tech, inputs, and production.</li>
                          <li>Highlighting blended finance, sovereign initiatives, and long-term funding models for resilient food systems.</li>
                        </ul>
                      </td>
                      <td className="speaker-col">
                        <strong>Bella GWON</strong> - CEO & Founder of AgUni<br />
                        <strong>Johann Pozzi</strong> - Agriculture Market Analyst at SISI INNOVATIONS, the Impact CVC arm of Yachiyo Engineering
                      </td>
                    </tr>
                    {/* Row 9 */}
                    <tr>
                      <td className="time-col">01:20 PM-01:40 PM</td>
                      <td colSpan="2"><strong>Standalone session:</strong></td>
                    </tr>
                    {/* Row 10 - Lunch */}
                    <tr>
                      <td colSpan="3" className="break-row">01:40 PM-02:30 PM Networking Lunch break</td>
                    </tr>
                    {/* Row 11 */}
                    <tr>
                      <td className="time-col">02:30 PM-03:10 PM</td>
                      <td>
                        <h4>Panel Discussion: Indoor and Vertical Farming: Controlled Environment Agriculture</h4>
                        <ul>
                          <li>Exploring hydroponic, aeroponic, and high-tech greenhouse systems enabling year-round production.</li>
                          <li>Highlighting efficiency gains through automation, lighting science, and climate-controlled farming.</li>
                        </ul>
                      </td>
                      <td className="speaker-col">
                        <strong>Sepehr A. Achard</strong> - COO / Co-Founder - iGrow News<br />
                        <strong>Sky Kurtz</strong> - Founder & CEO- Pure Harvest Smart Farms<br />
                        <strong>Hanane Fellahi</strong> - project manager, Global Farms LLC
                      </td>
                    </tr>
                    {/* Row 12 */}
                    <tr>
                      <td className="time-col">03:10 PM-03:50 PM</td>
                      <td colSpan="2">
                        <h4>Panel Discussion: Blue Revolution: Aquaculture and Sustainable Fisheries</h4>
                        <ul>
                          <li>Examining modern fish and shrimp farming systems, from RAS to offshore aquaculture models.</li>
                          <li>Highlighting sustainability, feed innovation, and investment opportunities in scalable protein production.</li>
                        </ul>
                      </td>
                    </tr>
                    {/* Row 13 */}
                    <tr>
                      <td className="time-col">03:50 PM-04:10 PM</td>
                      <td colSpan="2"><strong>Standalone session</strong></td>
                    </tr>
                    {/* Row 14 */}
                    <tr>
                      <td className="time-col">04:10 PM-04:50 PM</td>
                      <td colSpan="2">
                        <h4>Panel Discussion: Next-Gen Livestock & Dairy: Innovations in Animal Agriculture</h4>
                        <ul>
                          <li>Exploring smart barns, precision feeding, and genetic advances improving herd performance.</li>
                          <li>Highlighting sustainability through alternative feeds, methane reduction tools, and modern animal welfare.</li>
                        </ul>
                      </td>
                    </tr>
                    {/* Row 15 */}
                    <tr>
                      <td className="time-col">04:50 PM-05:30 PM</td>
                      <td colSpan="2"><strong>Award Ceremony</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* THEMES */}
              {/* <div className="block">
          <h2>Key Themes Across the Agenda</h2>
          <ul>
            <li>Food Security & Global Resilience</li>
            <li>AgriTech, AI & Digital Agriculture</li>
            <li>Water, Irrigation & Climate Adaptation</li>
            <li>Sustainable & Regenerative Farming</li>
            <li>Investment, Financing & Policy</li>
            <li>Supply Chain, Processing & Trade</li>
            <li>Innovation, Startups & Future Tech</li>
          </ul>
          <p>
            Each session aligns with the Summit’s mission:
            <strong> Food for All.</strong>
          </p>
        </div> */}
            </section>

            {/* CTA */}
            <div className="cta">
              <h3>Be Part of the Conversation</h3>
              <p>If your insight belongs on the SummitX stage, apply to speak.</p>
              <a href="/apply-to-speak">Apply to Speak</a>
            </div>
          </>
        );
      })()}
    </>
  );
};

export default SummitAgenda;
