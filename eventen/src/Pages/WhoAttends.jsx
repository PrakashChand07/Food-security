// WhoAttends.jsx
import AttendSlider from "../Components/AttendSlider";
import Breadcrumb from "../Components/Breadcrumb";

const WhoAttends = () => {
  return (
    <div>
      <Breadcrumb
        title="Who Attends Food Security SummitX"
        subtitle="The people shaping the future of food systems"
        bgImage="/assets/images/whoAttends/hero.jpg"
      />
      <div className="container mt-5">
        <h2>
          A Curated Global Audience
        </h2>
        <p className="mt-3">
          Food Security SummitX brings together a carefully selected
          community of leaders who are actively building, investing in,
          and governing the future of food security.
            This is not a general crowd — it is a decision-driven ecosystem
          where conversations lead to collaboration, investment, and
          action.
        </p>
      </div>
      <section className="awards-divisions py-6">
        <div className="container w-lg-75 text-center">
          <h2 className="mb-4 py-5">
            <span className="pink">Why SummitX Is </span> The Catalyst for Change
          </h2>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/whoAttends/AgriTech.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Enterprises"
                />
                <div className="card-body">
                  <strong>
                    Innovators across seeds, BioAg, fertilisers, crop protection, digital farming, automation, and climate-smart solutions.
                  </strong>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/whoAttends/Investors.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Individuals"
                />
                <div className="card-body">
                  <strong>
                    Venture capital firms, impact investors, family offices, and financial institutions focused on scalable and sustainable food solutions.
                  </strong>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/whoAttends/Government.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Individuals"
                />
                <div className="card-body">
                  <strong>
                    Ministries, regulators, and public-sector bodies shaping national and regional food security strategies.
                  </strong>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/whoAttends/Producer.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Individuals"
                />
                <div className="card-body">
                  <strong>
                    Vertical farms, greenhouse operators, open-field farms, aquaculture and livestock integrators, and farm-to-retail groups.
                  </strong>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/whoAttends/Supply.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Individuals"
                />
                <div className="card-body">
                  <strong>
                    Processing companies, cold chain providers, logistics firms, exporters, and trade facilitators.
                  </strong>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/whoAttends/Startups.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Individuals"
                />
                <div className="card-body">
                  <strong>
                    Emerging ventures showcasing next-generation technologies and business models.
                  </strong>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="assets/images/whoAttends/Media.jpg"
                  className="card-img-top rounded-top-4"
                  alt="Excellence in Food Security – Individuals"
                />
                <div className="card-body">
                  <strong>
                    Media organizations, research institutions, universities, and industry platforms amplifying global impact.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partners Section (separate section – correct structure) */}
      <section className="partners">
        <div className="container">
          <div className="partner-inner">
            <div className="partner-title text-center pb-6 w-lg-60 m-auto">
              {/* <p className="mb-1 pink">OUR PARTNERS</p> */}
              <h2 className="mb-1">
                Why This Audience {" "}
                <span className="pink">Matters</span>
              </h2>
              <p className="m-0">
                Nearly half of SummitX attendees are founders, C-suite leaders, investors, and senior decision-makers — creating a high-value environment for networking, partnerships, and growth.
              </p>
              <br />
              <p className="m-0">
                Whether you aim to build relationships, explore opportunities, or gain strategic insight, SummitX connects you with the people who matter.
              </p>
            </div>

            <AttendSlider />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="bg-white rounded p-5 box-shadow text-center">
                <h4 className="mb-4">Join the Community</h4>
                <p className="mb-4">
                  Be part of a global audience committed to collaboration,
                  innovation, and building resilient food systems.
                </p>
                <div className="d-grid gap-3 d-md-flex justify-content-md-center">
                  <button className="btn btn-theme-action btn-lg px-5 py-3">
                    Register Now
                  </button>
                  <button className="btn btn-outline-theme btn-lg px-5 py-3">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoAttends;
