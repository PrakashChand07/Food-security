import React from "react";
import { Link } from "react-router-dom";
import BackToTop from "../Components/Backtotop";
import SubscribeForm from "./SubscribeForm";

function Footer() {
  return (
    <div>
      {/*--Subscribe Section start--*/}
      <section className="subscribe py-5">
        <div className="container">
          <div className="subscribe-content">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="sub-left text-center text-lg-start py-3">
                  <p className="mb-2 pink fw-semibold">
                    DON'T MISS OUR FUTURE UPDATES
                  </p>
                  <h4 className="text-white fw-bold">
                    WHERE CONVERSATIONS IGNITE COLLABORATION
                  </h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sub-right py-3">
                  <p className="text-white mb-4 text-center text-lg-start lh-base">
                    Send us your thoughts, inquiries, or opportunities to
                    collaborate — every message helps shape the dialogue toward
                    a food-secure future.
                  </p>
                  <SubscribeForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Subscribe Section end--*/}

      {/*--Footer Section start--*/}
      <footer
        className="pt-8 text-white position-relative z-1"
        style={{
          backgroundImage: "url('/assets/images/Footer.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Dark Overlay */}
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          // style={{
          //   backgroundColor: "rgba(0, 0, 0, 0.65)",
          //   zIndex: 0,
          // }}
        ></div>

        <div className="container position-relative z-1">
          {/* Footer Top Section */}
          <div className="row mb-6 text-center text-lg-start">
            {/* Column 1: Logo & About */}
            <div className="col-lg-3 mb-4">
              <div className="footer-logo mb-4">
                <a href="/" className="d-inline-block">
                  <img
                    src="/assets/logo.jpg"
                    alt="footer-logo"
                    style={{ maxWidth: "200px", borderRadius: "6px" }}
                  />
                </a>
              </div>
              <h6 className="text-white mb-3 fw-bold">FOOD SECURITY SUMMITX</h6>
              <p className="text-white-70 mb-3 lh-lg">
                The world's leading platform for innovation, collaboration, and
                sustainable solutions across the global food ecosystem.
              </p>
        <button className="btn btn-outline-light btn-sm px-4">Learn More</button>
            </div>

            {/* Column 2: Customer Service */}
            <div className="col-lg-3 mb-4">
              <h6 className="text-white mb-3 fw-bold">Customer Service</h6>
              <div className="text-white-70">
                <p className="mb-2">
                  <a
                    href="mailto:contact@foodsecuritysummitx.com"
                    className="footer-link"
                  >
                    contact@foodsecuritysummitx.com
                  </a>
                </p>
                <p className="mb-2">
                  <a
                    href="https://wa.me/919466039893"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    WhatsApp: +91-9466039893
                  </a>
                </p>
                <p className="mb-2">CS Hotline: +91-9466039893</p>
                <p className="small text-white-60">
                  Operating Hours: Monday – Friday, 10:00 AM – 6:00 PM (GST Time)
                </p>
              </div>
            </div>

            {/* Column 3: Our Offices */}
            <div className="col-lg-3 mb-4">
              <h6 className="text-white mb-3 fw-bold">Our Offices</h6>
              <div className="text-white-70">
                <p className="mb-2">
                  <strong>Head Office:</strong>
                  <br />
                  54, Bihari Vilas, Tundla,
                  <br />
                  Uttar Pradesh, India
                </p>
                <p className="mb-2">
                  <strong>Branch Offices:</strong>
                  <br />
                  783, WeWork DLF Forum, Cybercity,
                  <br />
                  Phase III, Gurugram (Haryana) - 122002
                  <br />
                  H-190, 2nd Floor, Sector 63,
                  <br />
                  Noida - 201301
                </p>
              </div>
            </div>

            {/* Column 4: Quick Links */}
            <div className="col-lg-3 mb-4">
              <h6 className="text-white mb-3 fw-bold">Quick Links</h6>
              <ul className="list-unstyled text-white-70">
                <li className="mb-2">
                  <Link to="/About" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/WhyExhibit" className="footer-link">
                    Why Exhibit
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/WhoAttends" className="footer-link">
                    Who Attends
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/Nominate" className="footer-link">
                    Nominate Now!
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/Awards" className="footer-link">
                    Awards
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/TermsConditions" className="footer-link">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/PrivacyPolicy" className="footer-link">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="row border-top border-white border-opacity-25 pt-5 pb-4 align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h6 className="text-white mb-3 fw-bold">Connect With Us:</h6>
              <p className="mb-0">contact@foodsecuritysummitx.com</p>
            </div>

            <div className="col-lg-4">
              <div className="social-links">
                <h6 className="text-white mb-3 fw-bold">Follow Us:</h6>
                <ul className="m-0 p-0 d-flex gap-2 flex-wrap">
                  {[
                    {
                      href: "https://www.facebook.com/FoodsecuritysummitX",
                      icon: "fa-facebook",
                    },
                    { href: "https://x.com/foodsecurityX", icon: "fa-twitter" },
                    {
                      href: "https://www.linkedin.com/company/foodsecuritysummitx/",
                      icon: "fa-linkedin",
                    },
                    {
                      href: "https://www.instagram.com/foodsecuritysummitx/",
                      icon: "fa-instagram",
                    },
                    {
                      href: "https://www.youtube.com/@foodsecuritysummitx",
                      icon: "fa-youtube-play",
                    },
                  ].map((social, index) => (
                    <li key={index} className="d-inline">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                      >
                        <i
                          className={`fa ${social.icon} border-social rounded-circle text-center`}
                        ></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Designed By Section */}
          <div className="text-center border-top border-white border-opacity-25 pt-3">
            <p className="mb-0 small text-white-70">
              © {new Date().getFullYear()} Food Security SummitX. All rights
              reserved. | Designed by{" "}
              <a
                href="https://codercraftes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link fw-semibold"
              >
                Coder Craftes
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
      {/*--Footer Section end--*/}

      {/*--Back-to-top Button start--*/}
      <BackToTop />
      {/*--Back-to-top Button end--*/}

      {/* Inline CSS Fix for Footer */}
      <style>{`
        .footer-link {
          color: black !important;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }
        .footer-link:hover {
          color: #080808ff !important;
          opacity: 1;
          text-decoration: none;
        }
        .social-icon i {
          width: 36px;
          height: 36px;
          line-height: 36px;
          border: 1px solid rgba(255,255,255,0.5);
          color: #fff;
          transition: all 0.3s ease;
        }
        .social-icon:hover i {
          background-color: #ff5ea2;
          color: #fff;
          border-color: #ff5ea2;
        }
      `}</style>
    </div>
  );
}

export default Footer;
