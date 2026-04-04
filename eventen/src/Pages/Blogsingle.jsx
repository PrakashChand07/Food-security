import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
import Pagehelmet from "../Components/Pagehelmet";

function Blogsingle() {
  return (
    <div>
      <Pagehelmet pageTitle="Blog Single" />
      <Breadcrumb title="Blog Single" />

      {/*--News Archive Section start--*/}
      <section className="news-single">
        <div className="container">
          <div className="news-single-inner">
            <div className="row gx-lg-5 gy-5">
              <div className="col-lg-8">
                <div className="news-left">
                  <div className="news-img mb-4">
                    <img
                      src="assets/images/group/1.jpg"
                      alt="blog-image"
                      className="w-100 rounded"
                    />
                  </div>
                  <div className="news-description pb-4">
                    <h4 className="mb-4">
                      Connect with coperate & third party planners
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="qoutation p-4 bg-lightgrey rounded d-flex align-items-center mb-4 text-center text-md-start">
                    <div className="qoutation-img">
                      <img
                        src="assets/images/team/2.jpg"
                        alt="team-image"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="qoutation-info ms-4">
                      <h6 className="pink my-1">John Doe</h6>
                      <p className="text-black">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                  <div className="comment-form mb-6">
                    <h2 className="mb-4 text-blue">Leave a reply</h2>
                    <form>
                      <p>
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <label for="comment">Comment*</label>
                      <textarea
                        id="comment"
                        rows="8"
                        className="mb-3"
                      ></textarea>
                      <label for="name">Name*</label>
                      <input type="text" id="name" className="mb-3" />
                      <label for="email">Email*</label>
                      <input type="email" id="email" className="mb-3" />
                      <label for="website">Website</label>
                      <input type="text" id="website" className="mb-3" />
                      <input
                        type="checkbox"
                        id="cookie-concent"
                        className=" mb-1"
                      />
                      <label for="cookie-concent" className="mb-2">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                      <br />
                      <button className="btn">
                        <small>Post Comment</small>
                      </button>
                    </form>
                  </div>
                  <div className="post-navigation">
                    <div className="row">
                      <div className="col-6 border-end">
                        <div className="navigation">
                          <Link
                            to="/Blogsingle"
                            className="d-flex align-items-center"
                          >
                            <div className="navigation-icon">
                              <i
                                className="fa fa-chevron-left pink pe-3"
                                aria-hidden="true"
                              ></i>
                            </div>
                            <div className="navigating-post overflow-hidden">
                              <p className="mb-0 text-grey">
                                <small>Prevoius</small>
                              </p>
                              <h6 className="post-title mb-0 text-nowrap">
                                <small>
                                  Registration for opening workspace
                                </small>
                              </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="navigation text-end ">
                          <Link
                            to="/Blogsingle"
                            className="d-flex align-items-center"
                          >
                            <div className="navigating-post pe-3 overflow-hidden ">
                              <p className="mb-0 text-grey">
                                <small>Next</small>
                              </p>
                              <h6 className="post-title mb-0 text-nowrap">
                                <small>
                                  Engaging in person virtual, & hybrid events.
                                </small>
                              </h6>
                            </div>
                            <div className="navigation-icon">
                              <i
                                className="fa fa-chevron-right pink"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="news-right">
                  <div className="about-organizer p-6 box-shadow rounded text-center mb-6">
                    <div className="organizer-title mb-3">
                      <h6>About Organizers</h6>
                    </div>
                    <div className="sperator mb-6 w-20 border-bottom border-2 border-pink m-auto"></div>
                    <div className="organizer-image">
                      <img
                        src="assets/images/team/2.jpg"
                        alt="team-image"
                        className=" rounded-circle mb-3"
                      />
                    </div>
                    <div className="organizer-bio pb-5 mb-4 border-bottom border-2 border-grey border-opacity-25 border-bottom-dashed">
                      <h6 className="mb-1">Hi, Jenny loral</h6>
                      <p className="mb-0 w-80 m-auto">
                        <small>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor dolore magna aliqua.
                        </small>
                      </p>
                    </div>
                    <div className="organizer-socials pb-5">
                      <ul className="m-0 p-0 d-flex gap-2 justify-content-center">
                        {[
                          "facebook",
                          "twitter",
                          "google",
                          "instagram",
                          "youtube-play",
                        ].map((icon, i) => (
                          <li key={i} className="d-inline">
                            <a
                              href="/"
                              className="d-inline-block rounded-circle text-grey border border-1 border-grey"
                            >
                              <i className={`fa fa-${icon}`}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="catagories p-6 rounded box-shadow mb-6">
                    <h6 className="mb-3">Categories</h6>
                    <div className="sperator mb-4 m-0 w-20  border-bottom border-2 border-pink"></div>
                    <ul className="m-0 p-0 list-unstyled">
                      <li className="py-3 border-bottom border-1 border-grey border-opacity-50 border-bottom-dashed">
                        <a href="/" className="text-grey">
                          <i
                            className="fa fa-check pink pe-3"
                            aria-hidden="true"
                          ></i>
                          Online Ticketing
                        </a>
                      </li>
                      <li className="py-3 border-bottom border-1 border-grey border-opacity-50 border-bottom-dashed">
                        <a href="/" className="text-grey">
                          <i
                            className="fa fa-check pink pe-3"
                            aria-hidden="true"
                          ></i>
                          Conference
                        </a>
                      </li>
                      <li className="py-3 border-bottom border-1 border-grey border-opacity-50 border-bottom-dashed">
                        <a href="/" className="text-grey">
                          <i
                            className="fa fa-check pink pe-3"
                            aria-hidden="true"
                          ></i>
                          Marketing Event
                        </a>
                      </li>
                      <li className="py-3 border-bottom border-1 border-grey border-opacity-50 border-bottom-dashed">
                        <a href="/" className="text-grey">
                          <i
                            className="fa fa-check pink pe-3"
                            aria-hidden="true"
                          ></i>
                          SEO Conference
                        </a>
                      </li>
                      <li className="py-3 border-bottom border-1 border-grey border-opacity-50 border-bottom-dashed">
                        <a href="/" className="text-grey">
                          <i
                            className="fa fa-check pink pe-3"
                            aria-hidden="true"
                          ></i>
                          Resonable Service
                        </a>
                      </li>
                      <li className="pt-3 border-0">
                        <a href="/" className="text-grey">
                          <i
                            className="fa fa-check pink pe-3"
                            aria-hidden="true"
                          ></i>
                          Digital Marketing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="recent-post-box p-6 box-shadow rounded mb-6">
                    <h6 className="mb-2">Recent Posts</h6>
                    <div className="sperator w-20 border-bottom border-2 border-pink mb-5"></div>
                    <div className="recent-post-list">
                      <div className="row">
                        <div className="col-lg-12 col-md-6">
                          <div className="recent-post d-flex align-items-center  mb-4">
                            <div className="post-img">
                              <Link to="/Blogsingle">
                                <img
                                  src="assets/images/group/6.jpg"
                                 alt="Blog brainstorming session"
                                  className="me-3"
                                />
                              </Link>
                            </div>
                            <div className="post-detail">
                              <Link
                                to="/Blogsingle"
                                className="black fw-bold text-uppercase"
                              >
                                The Top Music Festivals in NYC
                              </Link>
                              <p className="mb-0">
                                <small>April 3, 2023</small>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                          <div className="recent-post d-flex align-items-center mb-4">
                            <div className="post-img">
                              <Link to="/Blogsingle">
                                <img
                                  src="assets/images/group/7.jpg"
                                  alt="Team brainstorming session"
                                  className="me-3"
                                />
                              </Link>
                            </div>
                            <div className="post-detail">
                              <Link
                                to="/Blogsingle"
                                className="black fw-bold text-uppercase"
                              >
                                Live Interview from conference
                              </Link>
                              <p className="mb-0">
                                <small>April 3, 2023</small>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                          <div className="recent-post d-flex align-items-center mb-4">
                            <div className="post-img">
                              <Link to="/Blogsingle">
                                <img
                                  src="assets/images/group/4.jpg"
                                  alt="Blog brainstorming session"
                                  className="me-3"
                                />
                              </Link>
                            </div>
                            <div className="post-detail">
                              <Link
                                to="/Blogsingle"
                                className="black fw-bold text-uppercase"
                              >
                                Registration for opening workshop
                              </Link>
                              <p className="mb-0">
                                <small>April 3, 2023</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="social-media-links pb-5">
                    <h6 className="mb-2">Social Media</h6>
                    <div className="sperator w-20 border-bottom border-2 border-pink mb-5"></div>
                    <div className="social-media-inner">
                      <div className="row g-3">
                        <div className="col-6">
                          <a href="/" className="btn rounded-3 p-2 text-capitalize w-100 text-start">
                            <i
                              className="fa fa-facebook-official rounded mx-2 me-3"
                              aria-hidden="true"
                            ></i>
                            Facebook
                          </a>
                        </div>
                        <div className="col-6">
                          <a  href="/" className="btn rounded-3 p-2 text-capitalize w-100 text-start">
                            <i
                              className="fa fa-twitter rounded mx-2 me-3"
                              aria-hidden="true"
                            ></i>
                            Twitter
                          </a>
                        </div>
                        <div className="col-6">
                          <a  href="/" className="btn rounded-3 p-2 text-capitalize w-100 text-start">
                            <i
                              className="fa fa-whatsapp rounded mx-2 me-3"
                              aria-hidden="true"
                            ></i>
                            WhatsApp
                          </a>
                        </div>
                        <div className="col-6">
                          <a  href="/" className="btn rounded-3 p-2 text-capitalize w-100 text-start">
                            <i
                              className="fa fa-linkedin-square rounded mx-2 me-3"
                              aria-hidden="true"
                            ></i>
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--News Archive Section end--*/}
    </div>
  );
}

export default Blogsingle;
