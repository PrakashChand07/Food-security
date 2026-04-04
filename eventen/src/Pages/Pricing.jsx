import React, { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
import PageHelmet from "../Components/Pagehelmet";

function TicketCard({
  title,
  price,
  oldPrice,
  img,
  currency = "$",
  points,
  index,
  activeIndex,
  setActiveIndex,
}) {
  const isOpen = activeIndex === index;
  const visiblePoints = isOpen ? points : points.slice(0, 5);

  return (
    <div className="col-lg-3 col-md-6">
      <div className="ticket-box-inner bg-white position-relative rounded-bottom-5 shadow-sm">
        <img
          src={img}
          alt="pattern"
          className="w-100 pattern position-absolute rounded-top"
        />

        <div className="ticket-title">
          <h4 className="pt-6 mb-1">{title}</h4>
        </div>

        <div className="ticket-price bg-white py-6">
          <div className="ticket-price-inner d-flex justify-content-center align-items-start fw-bold">
            <span className="me-1 currency pink">{currency}</span>
            <span className="me-1 dollor pink">{price}</span>
          </div>
        </div>

        <div className="benifit-list bg-white px-5">
          <ul className="m-auto p-0 list-unstyled">
            {visiblePoints.map((p, i) => (
              <li key={i} className="py-2 border-dashed-bottom-1">
                <small>{p}</small>
              </li>
            ))}
          </ul>

          {points.length > 5 && (
            <span
              onClick={() => setActiveIndex(isOpen ? null : index)}
              style={{
                cursor: "pointer",
                fontSize: "16px",
                color: "#464444ff",
                textDecoration: "underline",
              }}
            >
              {isOpen ? "View Less" : "View More"}
            </span>
          )}
        </div>

        <div className="ticket-button m-auto p-6">
          <Link
            to="/cart"
            state={{ title, price, oldPrice, img }}
            className="btn"
          >
            PURCHASE
          </Link>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  const [activeIndex, setActiveIndex] = useState(null);

  const passes = [
    {
      title: "Visitor Pass",
      price: 50,
      oldPrice: 99,
      img: "assets/images/pattern/1.png",
      points: [
        "Access to Exhibition Area only",
        "Entry to Opening Ceremony",
        "Inclusion in Attendee List",
        "Certificate of Attendance",
        "No access to sessions or food & beverages",
      ],
    },
    {
      title: "Attendee Pass",
      price: 999,
      oldPrice: 1299,
      img: "assets/images/pattern/2.png",
      points: [
        "Full-day access to Conference Sessions",
        "Access to Exhibition Zone",
        "Access to Networking Area",
        "Participation Certificate (Digital)",
        "Inclusion in post-event Digital Brochure",
        "Tea/Coffee Breaks included (no lunch)",
        "Access to event Photo Gallery (Digital)",
      ],
    },
    {
      title: "Delegate Pass",
      price: 1999,
      oldPrice: 2499,
      img: "assets/images/pattern/1.png",
      points: [
        "Full 2-Day Conference + Exhibition Access",
        "All Panel Discussions & Sessions",
        "Access to Networking Area",
        "Investor & Partnership Meetings",
        "Lunch + Refreshments (Both Days)",
        "Post-event Networking Database",
        "Digital Certificate",
        "Post-Event Report Access",
        "Social Media Mention (3 Posts)",
        "Recorded Sessions (On Demand)",
        "Blog / Article Mention",
        "Stage Access",
        "Company Logo on Website + Event Logo Placement",
      ],
    },
    {
      title: "VIP Delegate Pass",
      price: 2399,
      oldPrice: 2999,
      img: "assets/images/pattern/2.png",
      points: [
        "All Delegate Pass benefits",
        "VIP Access Badge",
        "Priority Seating at Conference & Awards",
        "Pre-Event Interview (2 Posts)",
        "Post-Event Magazine Feature",
        "Priority Access for Future Events",
        "Accommodation for Event Timeline",
      ],
    },
  ];

  return (
    <div>
      <PageHelmet pageTitle="Our Pricing" />
      <Breadcrumb title="Our Pricing" bgImage="assets/images/apply/Pitch.jpg" />

      <section className="price bg-lightgrey">
        <div className="container">
          <div className="price-inner text-center">
            <div className="price-title mb-7 w-lg-60 m-auto">
              <p className="mb-1 pink">PRICING</p>
              <h2 className="mb-1">
                EXPLORE FLEXIBLE <span className="pink">PRICING</span> PLANS
              </h2>
              {/* <p className="m-0">
                Excepteur sint occaecat cupidatat non proident.
              </p> */}
            </div>

            <div className="row g-3 pb-6">
              {passes.map((pass, index) => (
                <TicketCard
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  {...pass}
                />
              ))}
            </div>

            {/* <p className="m-0">
              All prices exclude 25% VAT. View{" "}
              <a href="/" className="pink ">
                Terms & Policy
              </a>
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
