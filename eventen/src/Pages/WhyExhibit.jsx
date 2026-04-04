import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
const WhyExhibit = () => {
  const speakers = [
    {
      id: 1,
      image: "assets/images/whyExhibit/TURN_CONNECTIONS_INTO_REAL_BUSINESS.jpg",
      title: "TURN CONNECTIONS INTO REAL BUSINESS",
      p: "Meet a highly engaged network of investors, policymakers, and innovators ready to collaborate. Showcase your solutions, build credibility, and turn every conversation into long-term opportunity."
    },
    {
      id: 2,
      image: "assets/images/whyExhibit/EXPAND_YOUR_REACH.jpg",
      title: "EXPAND YOUR REACH",
      p: "Showcase your innovations across AgriTech, Water & Irrigation, Supply Chain, and Sustainable Food Systems to an international audience spanning the Middle East, Africa, Europe, and Asia. Every interaction at SummitX expands your global footprint and transforms visibility into opportunity."
    },
    {
      id: 3,
      image: "assets/images/whyExhibit/MAXIMISE_VISIBILITY.jpg",
      title: "MAXIMISE VISIBILITY",
      p: "Position your brand among global leaders and innovators driving transformation in AgriTech, food systems, and sustainability. Strengthen your presence in one of the world's most rapidly evolving sectors — where purpose meets progress."
    },
    {
      id: 4,
      image: "assets/images/whyExhibit/Voice_That_Sparks_Change.jpg",
      title: "Voice That Sparks Change",
      p: "Take the stage at Food Security SummitX 2026 and join the voices shaping the global dialogue on food security and sustainable agriculture. Share insights, showcase innovation, and engage directly with policymakers, investors, and industry pioneers to position your brand as a thought leader in transformation."
    },
    {
      id: 5,
      image: "assets/images/whyExhibit/The_Gateway_to_MENA_Agri_Revolution.jpg",
      title: "The Gateway to MENA's Agri Revolution",
      p: "With the agriculture and AgriTech landscape accelerating across MENA, this is the region where investment meets impact. Introduce your solutions to forward-thinking businesses, governments, and investors actively shaping the future of food, technology, and sustainability."
    },
    {
      id: 6,
      image: "assets/images/whyExhibit/Where_Ideas_Build_the_Future_of_FoodX.jpg",
      title: "Where Ideas Build the Future of FoodX",
      p: "Food Security SummitX 2026 – Dubai is where global leaders meet, partnerships are born, and ideas turn into lasting change. Put your brand at the heart of the next chapter in agriculture, food systems, and AgriTech innovation."
    }
  ];
  const Submits = [
    {
      id: 1,
      image: "assets/images/whyExhibit/futureSubmit/AgriTech.jpg",
      title: "AgriTech & Automation",
      p: "Explore next-generation technologies driving smarter farming — from AI-powered analytics, robotics, drones, and IoT sensors to farm management systems, traceability platforms, and agri-fintech innovations revolutionizing productivity."
    },
    {
      id: 2,
      image: "assets/images/whyExhibit/futureSubmit/Water.jpg",
      title: "Water & Irrigation Systems",
      p: "Showcase solutions for sustainable water use — including smart irrigation, desalination, fertigation, wastewater recycling, and remote pump and control systems built for efficiency in arid and high-demand regions."
    },
    {
      id: 3,
      image: "assets/images/whyExhibit/futureSubmit/Food.jpg",
      title: "Food Processing & Supply Chain",
      p: "Connect with buyers and distributors seeking innovation in cold chain, packaging, logistics, and processing. Highlight technologies in sorting, grading, freezing, storage, e-commerce, and last-mile delivery that ensure food quality from farm to fork."
    },
    {
      id: 4,
      image: "assets/images/whyExhibit/futureSubmit/Sustainable.jpg",
      title: "Sustainable Agriculture & Inputs",
      p: "Promote eco-friendly practices and products — from regenerative soil solutions and organic fertilisers to bio-stimulants, carbon-positive amendments, and integrated crop management systems enabling climate-smart farming."
    },
    {
      id: 5,
      image: "assets/images/whyExhibit/futureSubmit/Vertical.jpg",
      title: "Vertical Farming, Livestock & Aquaculture",
      p: "Demonstrate the future of controlled-environment farming — hydroponics, aeroponics, smart greenhouses, livestock management systems, feed technologies, and sustainable aquaculture solutions powering urban and coastal food production."
    },
    {
      id: 6,
      image: "assets/images/whyExhibit/futureSubmit/BioAg.jpg",
      title: "BioAg, Fertilisers & Crop Protection",
      p: "Present innovations in biofertilisers, controlled-release nutrients, nano-fertilisers, and advanced crop protection tools. Include biopesticides, IPM systems, seed treatments, and pheromone-based pest monitoring for resilient yields."
    }
  ];
  return (
    <>
      {/* INLINE CSS – SAME FILE */}
      <style>{`
        .why-hero {
          position: relative;
          width: 100%;
          min-height: 420px;
          background: #ccc; /* IMAGE PLACEHOLDER */
        }

        .why-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
        }

        .why-hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          color: #fff;
        }

        .why-section {
          padding: 70px 0;
        }

        .green {
          color: #198754;
        }

        .image-placeholder {
          width: 100%;
          min-height: 380px;
          background: #e5e5e5;
        }

        .bold { font-weight: 600; }
        .italic { font-style: italic; }
      `}</style>
         <Breadcrumb
        title="Exhibit At Food Security SummitX Dubai 2026"
        subtitle="Align your vision with global opportunity"
        bgImage="assets/images/whyExhibit/hero.jpg"
      />

      {/* WHY EXHIBIT */}
      <section className="why-section">
        <div className="container">
          <h2>
            WHY EXHIBIT AT <span className="green">SUMMITX?</span>
          </h2>

          <h3>
            Turn Conversations Into <span className="green">Global Opportunities</span>
          </h3>

          <p>
            Exhibit where the agriculture and food industry’s most influential
            buyers, leaders, policymakers, and investors come to do business.
          </p>

          <p>
            Dubai becomes the meeting point for companies leading transformation
            in AgriTech, inputs, water solutions, automation, and food systems.
          </p>

          <p className="bold">
            SummitX 2026 connects you to the world’s decision-makers:
          </p>

          <ul>
            <li>Global companies sourcing the next wave of AgriTech solutions</li>
            <li>400+ international organizations leading innovation</li>
            <li>750+ active leaders exploring sustainable ventures</li>
            <li>
              C-level leaders from ministries, food giants, and agri-enterprises
              shaping the world’s food future
            </li>
          </ul>

          <p className="italic">
            At SummitX, visibility means opportunity — where every interaction
            can evolve into a partnership, a deal, or an investment.
          </p>
        </div>
      </section>

      {/* IMAGE LEFT – TEXT RIGHT (Money20/20 STYLE) */}
      <section className="why-section">
        <div className="container-fluid">
          <div className="row align-items-stretch">

            <div className="col-md-6 px-0">
              <div className="image-placeholder">
                 <img className="w-100 h-100 object-fit-cover" src="assets/images/whyExhibit/global.jpg" alt="" />
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center">
              <div className="container">
                <h2>
                  GAIN <span className="green">GLOBAL EXPOSURE</span>
                </h2>
                <h3>Meet Decision Makers Ready to Collaborate</h3>

                <p className="bold">Connect with:</p>
                <ul>
                  <li>Government ministries and policymakers</li>
                  <li>AgriTech innovators and automation leaders</li>
                  <li>Global investors and venture capital firms</li>
                  <li>Producers and agribusinesses from 50+ countries</li>
                  <li>Research institutions, NGOs, and impact funds</li>
                </ul>

                <p className="bold">
                  This is where technology meets trade, and purpose meets profit.
                </p>

                <p className="green bold">
                  Be Part of the Movement Feeding the Future
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="sepaker-list text-center text-white container">
        <h2 className="py-4 ">
          Be Part of the Movement  <span className="green">Feeding the Future</span>
        </h2>
        <div className="row">
          {speakers.map((speaker, index) => (
            <div key={index} className="col-lg-4 col-md-6 p-2">
              <div className="speaker-box position-relative overflow-hidden text-white">
                <img
                  className="speaker-image rounded w-100"
                  src={speaker.image}
                  alt={speaker.name}
                />
                <div className="box-content position-absolute bottom-0 z-1">
                  <h6 className="pb-1" style={{ color: "white" }}>
                    {speaker.title}
                  </h6>
                  <span
                    className="speaker-post d-block pb-2"
                    style={{ color: "white" }}
                  >
                    {speaker.p}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="awards-divisions py-6">
        <div className="container w-lg-75 text-center">
          <h2 className="mb-4 py-5">
            <span className="pink">Why SummitX Is </span> The Catalyst for Change
          </h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/whyExhibit/whysubmit/Connect.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Enterprises"
                />
                <div className="card-body">
                  <h4 className="mb-2">
                    Connect with the Decision-Makers Who Matter
                  </h4>
                  <h5 className="mb-2">
                    Meaningful Connections. Real Opportunities.
                  </h5>
                  <p>
                    SummitX connects you directly with decision-makers shaping the future of food and agriculture not just attendees.
                    Engage with pre-qualified buyers, investors, and government leaders seeking solutions across AgriTech, Water Management, Sustainable Inputs, and Food Systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/whyExhibit/whysubmit/Establish.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Individuals"
                />
                <div className="card-body">
                  <h4 className="mb-2">
                    Establish Your Place in the Global Market
                  </h4>
                  <h5 className="mb-2">
                    Show the World You’re Driving Change.
                  </h5>
                  <p>
                    The MENA region is investing heavily in food security and agricultural innovation — and SummitX is where those investments begin.
                    From policymakers and procurement heads to leading agribusinesses, this is where credibility meets visibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/whyExhibit/whysubmit/Forge.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Individuals"
                />
                <div className="card-body">
                  <h4 className="mb-2">
                    Forge Partnerships That Drive the Future
                  </h4>
                  <h5 className="mb-2">
                    Where Vision Meets Collaboration.
                  </h5>
                  <p>
                    Forget passive branding — this is about business.
                    Engage directly with investors, ministries, and global enterprises ready to partner, procure, and scale innovation.
                    SummitX 2026 is where market access becomes market leadership.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/whyExhibit/whysubmit/Transform.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Individuals"
                />
                <div className="card-body">
                  <h4 className="mb-2">
                    Transform Showcases into Success Stories
                  </h4>
                  <h5 className="mb-2">
                    Own the Moment. Make It Matter.
                  </h5>
                  <p>
                    Whether you’re a startup, scale-up, or global enterprise, SummitX gives you the stage to showcase, speak, and secure partnerships.
                    From exhibitor booths to investor lunches and branded sessions — everything is designed to convert visibility into measurable business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-40">
        <div className="container">
          <h2>
            Without SummitX
          </h2>
          <p> Change is moving faster than ever across fields, labs, and boardrooms. The companies you compete with are already building alliances with governments, tech leaders, and investors. The future of food is being written now; the question is whether your brand will be part of its story.</p>
        </div>
      </div>
      <section>
        <div className="container">
          <h2 className="mb-4">
            Ready to Shape the Future of <span className="green">Food in 2026?</span>
          </h2>
          <h3 className="mb-1">
            Talk to Our Team Today
          </h3>
          <p>Let’s align your goals with global opportunity and position your brand at the center of innovation, investment, and impact at Food Security SummitX 2026.</p>
        </div>
      </section>
      <div className="sepaker-list text-center text-white container">
        <h2 className="py-4 ">
          Who Belongs on the <span className="green">SummitX Stage?</span>
        </h2>
        <div className="row">
          {Submits.map((speaker, index) => (
            <div key={index} className="col-lg-4 col-md-6 p-2">
              <div className="speaker-box position-relative overflow-hidden text-white">
                <img
                  className="speaker-image rounded w-100"
                  src={speaker.image}
                  alt={speaker.name}
                />
                <div className="box-content position-absolute bottom-0 z-1">
                  <h6 className="pb-1" style={{ color: "white" }}>
                    {speaker.title}
                  </h6>
                  <span
                    className="speaker-post d-block pb-2"
                    style={{ color: "white" }}
                  >
                    {speaker.p}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyExhibit;
