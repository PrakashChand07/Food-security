// Nominate.jsx
import React, { useState } from "react";
import countriesData from "../data/country.json";
import Breadcrumb from "../Components/Breadcrumb";
import toast, { Toaster } from "react-hot-toast";


const Nominate = () => {
  const [formData, setFormData] = useState({
    // Contact Details
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    country: "",
    phoneNumber: "",
    companyName: "",
    companyWebsite: "",

    // Nominee Details
    nomineeType: "",
    nomineeName: "",
    nomineeWebsite: "",
    nomineeLinkedIn: "",
    nomineeRegion: "",
    workDescription: "",
    awardHistory: "",
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

    const res = await fetch(`${apiBase}/api/forms/nominate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw data; // 👈 backend message
    }

    toast.success(
      "Thank you for your nomination! Our team will review your submission."
    );

    // reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      designation: "",
      country: "",
      phoneNumber: "",
      companyName: "",
      companyWebsite: "",
      nomineeType: "",
      nomineeName: "",
      nomineeWebsite: "",
      nomineeLinkedIn: "",
      nomineeRegion: "",
      workDescription: "",
      awardHistory: "",
      announcements: "",
      sponsorship: "",
    });
  } catch (err) {
    console.error("Nominate submit error", err);

    toast.error(
      err?.message ||
        "This email has already been used to submit a nomination."
    );
  }
};

  const regionOptions = [
    "Global",
    "Sub-Saharan Africa",
    "Oceania",
    "MENA",
    "APAC",
    "Europe",
    "Central & South America",
    "North America",
  ];

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Breadcrumb
        title="Celebrate Excellence. Honor Impact. Inspire the Future."
        subtitle="Submit Your Nomination for Food Security SummitX 2026 – Dubai"
        bgImage="assets/images/apply/Nominate.jpg"
      />
      <section className="py-8">
        <div className="container">
          <div className="row g-4 mb-5" style={{ marginTop: "60px" }}>
            <div className="col-lg-6">
              <div className="bg-white rounded p-4 box-shadow h-100">
                <h3 className="mb-4">
                  Where Feeding the Future Meets Building the Business
                </h3>
                <p className="mb-0">
                  <strong>15 to 16 Sep 2026 | Dubai, UAE</strong>
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-white rounded p-4 box-shadow">
                <h3>Why Submit This Form?</h3>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      <b>Highlight your achievements</b> and showcase how your
                      work contributes to food security, sustainability, and
                      innovation.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      <b>Compete across diverse categories </b>honoring
                      leadership, technology, research, sustainability, and
                      social impact.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      <b>Gain international visibility </b>through SummitX’s
                      media and partner platforms across 50+ countries.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      <b>Build credibility and trust </b>with investors,
                      clients, and collaborators through global recognition.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      <b>Join an elite network </b>of award-winning
                      organizations, startups, and industry leaders.
                    </span>
                  </li>

                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      <b>Inspire others</b> by leading the movement toward a
                      resilient, sustainable, and food-secure planet.
                    </span>
                  </li>
                </ul>

                <div className="mt-4 pt-3 border-top">
                  <p className="mb-0">
                    {" "}
                    This form connects you directly with our{" "}
                    <strong>Awards & Recognition Team.</strong>
                    After submission, our team will contact you to shortlist
                    relevant categories and guide you through the next steps in
                    the evaluation process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <form
                className="bg-white rounded p-4 box-shadow"
                onSubmit={handleSubmit}
              >
                <h4 className="mb-4">Contact Details</h4>

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
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
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
                    <label className="form-label">Company Website</label>
                    <input
                      type="url"
                      className="form-control"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <hr className="my-5" />

                <h4 className="mb-4">Nominee Details</h4>

                <div className="mb-4">
                  <label className="form-label">
                    Whom do you want to nominate?
                  </label>
                  <div className="d-flex gap-4 align-items-center mt-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="nomineeType"
                        value="company"
                        id="nomineeCompany"
                        checked={formData.nomineeType === "company"}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="nomineeCompany"
                      >
                        Company
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="nomineeType"
                        value="individual"
                        id="nomineeIndividual"
                        checked={formData.nomineeType === "individual"}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="nomineeIndividual"
                      >
                        Individual
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Name</label>
                    <input
                      className="form-control"
                      name="nomineeName"
                      value={formData.nomineeName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Website</label>
                    <input
                      type="url"
                      className="form-control"
                      name="nomineeWebsite"
                      value={formData.nomineeWebsite}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">LinkedIn ID</label>
                    <input
                      className="form-control"
                      name="nomineeLinkedIn"
                      value={formData.nomineeLinkedIn}
                      onChange={handleChange}
                      placeholder="LinkedIn profile URL"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Region of Operations</label>
                    <select
                      className="form-select"
                      name="nomineeRegion"
                      value={formData.nomineeRegion}
                      onChange={handleChange}
                    >
                      <option value="">Select from the list</option>
                      {regionOptions.map((region, index) => (
                        <option key={index} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    How is your field of work related to the selected category?
                    Please elaborate and share relevant links if available.
                  </label>
                  <textarea
                    className="form-control"
                    name="workDescription"
                    value={formData.workDescription}
                    onChange={handleChange}
                    rows="4"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Award History (if any)</label>
                  <textarea
                    className="form-control"
                    name="awardHistory"
                    value={formData.awardHistory}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Please list any previous awards or recognitions received..."
                  />
                </div>

                <div className="row">
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
                  <div className="col-md-6 mb-4">
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
                </div>

                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                      required
                    />
                    <label className="form-check-label" htmlFor="terms">
                      By signing up to attend this event, you agree to our terms
                      and conditions and privacy policy
                    </label>
                  </div>
                </div>

                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-theme-action btn-lg py-3"
                  >
                    Submit Nomination
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

export default Nominate;
