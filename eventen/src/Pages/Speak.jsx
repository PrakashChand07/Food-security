// Speak.jsx
import React, { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import toast, { Toaster } from "react-hot-toast";
import countriesData from "../data/country.json";

const Speak = () => {
  const [formData, setFormData] = useState({
    // Your Details
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    country: "",
    phoneNumber: "",

    // Speaker Details
    speakerFirstName: "",
    speakerLastName: "",
    speakerEmail: "",
    designation: "",
    organization: "",
    organizationWebsite: "",
    speakerCountry: "",
    speakerPhoneNumber: "",
    speakerLinkedIn: "",
    speakerCategory: "",
    hearAboutUs: "",
    announcements: "",
    sponsorship: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiBase = process.env.REACT_APP_API_URL || "";
      const res = await fetch(`${apiBase}/api/forms/speak`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw data; // 👈 backend ka message yahin se aayega
      }

      toast.success(
        "Thank you for your submission! We will review your application."
      );

      // reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        jobTitle: "",
        country: "",
        phoneNumber: "",
        speakerFirstName: "",
        speakerLastName: "",
        speakerEmail: "",
        designation: "",
        organization: "",
        organizationWebsite: "",
        speakerCountry: "",
        speakerPhoneNumber: "",
        speakerLinkedIn: "",
        speakerCategory: "",
        hearAboutUs: "",
        announcements: "",
        sponsorship: "",
      });
    } catch (err) {
      console.error("Speak submit error", err);
      toast.error(
        err?.message ||
          "This email has already been used to submit the Speak form."
      );
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Breadcrumb
        title="Be the Voice That Ignites Change"
        subtitle="Take the Stage at Food Security SummitX 2026 – Dubai"
        bgImage="assets/images/apply/speak.jpg"
      />
      <section className="py-8 speak-page-margin">
        <div className="container">
          <div className="row g-4 mb-5" style={{ marginTop: "60px" }}>
            <div className="col-lg-6">
              <div className="bg-white rounded p-4 box-shadow h-100">
                <h3 className="mb-4">
                  Where Feeding the Future Meets Building the Business
                </h3>
                <p className="mb-0">
                  <strong>15 & 16 Sep 2026 | Dubai, UAE</strong>
                </p>
                {/* <p className="mb-3">Join world leaders, innovators, and policymakers to shape the dialogue driving the future of food and agriculture.</p>
              <p className="mb-0">Your insights can spark partnerships, influence investment, and inspire global action for a food-secure world.</p> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-white rounded p-4 box-shadow">
                <h3>Why Submit This Form?</h3>
                {/* <p>Step beyond the noise and share your voice on a stage where ideas drive impact.</p>
          <p>This is your opportunity to inspire action, spark collaboration, and contribute to shaping the global future of food security.</p>

          <h5>By applying to speak, you can:</h5> */}
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      Reach decision-makers seeking real solutions in AgTech,
                      sustainability, and food innovation.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      Align your session with SummitX's global theme — "Food for
                      All" — and your business objectives.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      Access audience insights and curated stage formats
                      designed to maximise influence and visibility.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      Position your brand among 750+ leaders, investors, and
                      policymakers from over 50 countries.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      Turn your participation into measurable opportunity —
                      building credibility, partnerships, and growth.
                    </span>
                  </li>
                </ul>

                <div className="mt-4 pt-3 border-top">
                  <p className="mb-0">
                    <strong>
                      This form connects you directly with our Content &
                      Partnerships Team.
                    </strong>{" "}
                    Together, we'll identify the most impactful platform for
                    your expertise — as a panelist or keynote speaker — and
                    ensure your message reaches the audience that matters most.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content section */}
          {/* <div className="bg-white rounded p-4 box-shadow mb-5">
          <h3 className="mb-4">Why Submit This Form?</h3>
          <p className="mb-3">Step beyond the noise and share your voice on a stage where ideas drive impact.</p>
          <p className="mb-4">This is your opportunity to inspire action, spark collaboration, and contribute to shaping the global future of food security.</p>

          <h5 className="mb-3">By applying to speak, you can:</h5>
          <ul className="list-unstyled">
            <li className="mb-3 d-flex align-items-start">
              <span className="me-2">•</span>
              <span>Reach decision-makers seeking real solutions in AgTech, sustainability, and food innovation.</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <span className="me-2">•</span>
              <span>Align your session with SummitX's global theme — "Food for All" — and your business objectives.</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <span className="me-2">•</span>
              <span>Access audience insights and curated stage formats designed to maximise influence and visibility.</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <span className="me-2">•</span>
              <span>Position your brand among 750+ leaders, investors, and policymakers from over 50 countries.</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <span className="me-2">•</span>
              <span>Turn your participation into measurable opportunity — building credibility, partnerships, and growth.</span>
            </li>
          </ul>

          <div className="mt-4 pt-3 border-top">
            <p className="mb-0"><strong>This form connects you directly with our Content & Partnerships Team.</strong> Together, we'll identify the most impactful platform for your expertise — as a panelist or keynote speaker — and ensure your message reaches the audience that matters most.</p>
          </div>
        </div> */}

          {/* Form section */}
          <div className="row py-5">
            <div className="col-lg-10 mx-auto">
              <form
                className="bg-white rounded-4 p-5 shadow-sm border"
                onSubmit={handleSubmit}
              >
                {/* Your Details Section */}
                <h4 className="mb-4 fw-semibold border-bottom pb-2">
                  Your Details
                </h4>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">First Name</label>
                    <input
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Last Name</label>
                    <input
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">LinkedIn</label>
                    <input
                      className="form-control"
                      name="speakerLinkedIn"
                      value={formData.speakerLinkedIn}
                      onChange={handleChange}
                      placeholder="https://"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Job Title</label>
                    <input
                      className="form-control"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
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
                    />
                  </div>
                </div>

                <hr className="my-5" />

                {/* Speaker Details Section */}
                <h4 className="mb-4 fw-semibold border-bottom pb-2">
                  Speaker Details
                </h4>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">First Name</label>
                    <input
                      className="form-control"
                      name="speakerFirstName"
                      value={formData.speakerFirstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Last Name</label>
                    <input
                      className="form-control"
                      name="speakerLastName"
                      value={formData.speakerLastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Email ID</label>
                    <input
                      type="email"
                      className="form-control"
                      name="speakerEmail"
                      value={formData.speakerEmail}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Designation</label>
                    <input
                      className="form-control"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Organization</label>
                    <input
                      className="form-control"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Organization Website</label>
                    <input
                      type="url"
                      className="form-control"
                      name="organizationWebsite"
                      value={formData.organizationWebsite}
                      onChange={handleChange}
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
                      name="speakerPhoneNumber"
                      value={formData.speakerPhoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Speaker LinkedIn ID</label>
                  <input
                    className="form-control"
                    name="speakerLinkedIn"
                    value={formData.speakerLinkedIn}
                    onChange={handleChange}
                    placeholder="LinkedIn profile URL"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Speaker Category</label>
                  <select
                    className="form-select"
                    name="speakerCategory"
                    value={formData.speakerCategory}
                    onChange={handleChange}
                  >
                    <option value="">Select category</option>
                    <option value="standalone">Stand-alone Session</option>
                    <option value="panel">Panel Discussion</option>
                    <option value="startup">Startup Pitch</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">
                      How did you hear about us?
                    </label>
                    <select
                      className="form-select"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                    >
                      <option value="">Select option</option>
                      <option value="google">Google</option>
                      <option value="direct">Direct</option>
                      <option value="social">Social Media</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">
                      Do you plan on making any announcements?
                    </label>
                    <div className="d-flex gap-4 align-items-center mt-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="announcements"
                          value="yes"
                          id="annYes"
                          checked={formData.announcements === "yes"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="annYes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="announcements"
                          value="no"
                          id="annNo"
                          checked={formData.announcements === "no"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="annNo">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6">
                    <label className="form-label">
                      Are you interested in exhibition/sponsorship
                      opportunities?
                    </label>
                    <div className="d-flex gap-4 align-items-center mt-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sponsorship"
                          value="yes"
                          id="sponYes"
                          checked={formData.sponsorship === "yes"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="sponYes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sponsorship"
                          value="no"
                          id="sponNo"
                          checked={formData.sponsorship === "no"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="sponNo">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex align-items-end">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                        required
                      />
                      <label className="form-check-label" htmlFor="terms">
                        By signing up to attend this event, you agree to our
                        terms and conditions and privacy policy.
                      </label>
                    </div>
                  </div>
                </div>

                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg py-3 rounded-3"
                  >
                    Submit Application
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

export default Speak;
