import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main_header_area position-absolute w-100 site-header">
      {/* Hover effect for social icons */}
      <style>
        {`
          .social-links a i {
            color: #000;
            transition: all 0.3s ease;
          }
          .social-links a i:hover {
            color: #fff;
          }
        `}
      </style>

      {/* Top bar with social and contact info */}
      <div className="header-content text-white">
        <div className="container">
          <div className="header-content-inner py-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="social-links">
                  <ul className="m-0 p-0 d-flex gap-2">
                    {[
                      {
                        icon: "facebook",
                        link: "https://www.facebook.com/FoodsecuritysummitX?rdid=fiEfKi8lKc1ym1KE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16eWgLrPx7%2F#",
                      },
                      {
                        icon: "linkedin",
                        link: "https://www.linkedin.com/company/foodsecuritysummitx/",
                      },
                      {
                        icon: "twitter",
                        link: "https://x.com/foodsecurityX",
                      },
                      {
                        icon: "instagram",
                        link: "https://www.instagram.com/foodsecuritysummitx/?igsh=cnV0dW02ZW95aWhs#",
                      },
                      {
                        icon: "youtube-play",
                        link: "https://www.youtube.com/@foodsecuritysummitx",
                      },
                    ].map((item, i) => (
                      <li key={i} className="d-inline">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                        >
                          <i
                            className={`fa fa-${item.icon} border-social rounded-circle text-center`}
                          ></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="header-event-info text-end">
                  <ul className="m-0 p-0">
                    <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                      <i className="fa fa-phone pe-1"></i>
                      <small>+91 94660 39893</small>
                    </li>
                    <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                      <i className="fa fa-envelope-o pe-1"></i>
                      <small>contact@foodsecuritysummitx.com</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="header_menu" id="header_menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-2 w-100">
            <div className="row w-100 align-items-center g-0">
              <div className="col-lg-2 col-md-3">
                <div
                  className="navbar-brand m-0 me-4"
                  style={{ paddingRight: "25px" }}
                >
                  <Link to="/">
                    <img src="/assets/logo.jpg" alt="Logo" className="w-100" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-8 col-md-6">
                <Navbar />
              </div>

              <div className="col-lg-2 col-md-3">
                <div
                  className="menu-search text-end"
                  style={{ fontWeight: 700 }}
                >
                  <Link
                    to="/Booknow"
                    className="btn-theme-action holographic-btn"
                  >
                    <span>Register Now</span>{" "}
                    <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div id="slicknav-mobile"></div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#13812a",
          color: "white",
          whiteSpace: "nowrap",
          overflow: "hidden",
          position: "relative",
          fontWeight: "600",
          padding: "6px 0",
          fontSize: "15px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "scrollText 70s linear infinite", // speed slowed down
          }}
        >
          {Array(20)
            .fill("Virtual Edition - june, 2026 | Gateway to Middle East Food & Agri Markets")
            .map((text, i) => (
              <span key={i} style={{ marginRight: "40px" }}>
                {text} •
              </span>
            ))}
        </div>

        <style>
          {`
      @keyframes scrollText {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
        </style>
      </div>

      {/* Search Overlay */}
      <div id="search1">
        <button type="button" className="close">
          &times;
        </button>
        <form>
          <input
            className="form-control form-control-lg rounded text-white"
            placeholder="Search..."
          />
        </form>
        <button type="button" className="btn">
          <i className="fa fa-search text-white" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
