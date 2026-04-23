import React, { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import countriesData from "../data/country.json";
import PageHelmet from "../Components/Pagehelmet";
import toast, { Toaster } from "react-hot-toast";

const Booknow = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    companyName: "",
    companyWebsite: "",
    countryCode: "",
    phoneNumber: "",
    interest: "",
    hearAboutUs: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const apiBase = process.env.REACT_APP_API_URL || "";
    const res = await fetch(`${apiBase}/api/forms/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw data; // 👈 backend error message
    }

    toast.success("Thank you for registering! Our team will contact you soon.");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      designation: "",
      companyName: "",
      companyWebsite: "",
      countryCode: "",
      phoneNumber: "",
      interest: "",
      hearAboutUs: "",
    });
  } catch (err) {
    console.error("Booking submit error", err);

    toast.error(
      err?.message ||
        "This email has already been used to register for the event."
    );
  }
};


  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <PageHelmet pageTitle="Join the Global Movement Shaping the Future of Food" />
      <Breadcrumb
        title="Join the Global Movement Shaping the Future of Food"
        bgImage="assets/images/apply/Pitch.jpg"
      />

      <section className="py-8 speak-page-margin">
        <div className="container">
          {/* Intro Section */}
          <div className="row g-4 mb-5" style={{ marginTop: "60px" }}>
            <div className="col-lg-6">
              <div className="bg-white rounded p-4 box-shadow h-100">
                <h3 className="mb-3">
                  Register Now for <b>Food Security SummitX 2026</b> – Dubai
                </h3>
                <p className="mb-0">
                  <strong>15 & 16 Sep 2026 | Dubai, UAE</strong>
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-white rounded p-4 box-shadow">
                <h3>Why Register?</h3>
                <p>
                  Your registration is the first step toward an experience that
                  blends <b>knowledge, networking, and opportunity</b> — all
                  under one roof.
                </p>
                <h5>
                  At <b>Food Security SummitX 2026,</b> you’ll gain:
                </h5>
                <ul className="list-unstyled">
                  <li>• Reach decision-makers in AgTech & sustainability.</li>
                  <li>
                    • Access <b>750+ delegates</b> from 50+ countries.
                  </li>
                  <li>• Meet <b>50+ exhibitors</b> driving food resilience.</li>
                  <li>• Attend panels, keynotes & startup pitches.</li>
                  <li>• Network with investors & ministries.</li>
                  <li>
                    • Experience <b>SummitX Awards</b> celebrating innovation.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded p-5 box-shadow mb-5">
            <h3 className="mb-4">How It Works</h3>
            <ul className="text-start d-inline-block">
              <li className="mb-2">
                <b>Fill Out the Form:</b> Choose your participation type.
              </li>
              <li className="mb-2">
                <b>Our Team Connects:</b> We’ll confirm your registration.
              </li>
              <li className="mb-2">
                <b>Get Ready for Dubai:</b> Receive event details & schedule.
              </li>
            </ul>
          </div>

          {/* Registration Form */}
          <div className="row py-5">
            <div className="col-lg-10 mx-auto">
              <form
                className="bg-white rounded-4 p-5 shadow-sm border"
                onSubmit={handleSubmit}
              >
                <h4 className="mb-4 fw-semibold border-bottom pb-2">
                  Registration Form
                </h4>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">First Name</label>
                    <input
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Last Name</label>
                    <input
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Official Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Designation</label>
                    <input
                      className="form-control"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Company Name</label>
                    <input
                      className="form-control"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Company Website</label>
                    <input
                      type="url"
                      className="form-control"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      placeholder="https://"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Country Code</label>
                    <select
                      className="form-select"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select with country code</option>
                      {countriesData.countries.map((country, index) => (
                        <option key={index} value={country.code}>
                          {country.name} ({country.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6 mb-4">
                    <label className="form-label">Phone Number</label>
                    <input
                      className="form-control"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Interested In</label>
                  <select
                    className="form-select"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your interest</option>
                    <option value="Speaking">Speaking</option>
                    <option value="Exhibiting">Exhibiting</option>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Award Nomination">Award Nomination</option>
                    <option value="Media Partner">Media Partner</option>
                    <option value="Startup Pitch">Startup Pitch</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">How did you hear about us?</label>
                  <select
                    className="form-select"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select option</option>
                    <option value="Google">Google</option>
                    <option value="Direct">Direct</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    required
                  />
                  <label className="form-check-label" htmlFor="terms">
                    By signing up, you agree to our terms and privacy policy.
                  </label>
                </div>

                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg py-3 rounded-3"
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booknow;
