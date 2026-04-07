// ExhibitSponsor.jsx
import React, { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import countriesData from "../data/country.json"; 
import toast, { Toaster } from "react-hot-toast";

const ExhibitSponsor = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    linkedIn: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    jobTitle: "",
    natureOfBusiness: "",
    yearsOfBusiness: "",
    sizeOfBusiness: "",
    country: "",
    phoneNumber: "",
    standType: "",
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

    const res = await fetch(`${apiBase}/api/forms/exhibit-sponsor`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw data; // 👈 backend error message
    }

    toast.success(
      "Thank you for your interest in exhibiting or sponsoring! Our team will contact you soon."
    );

    // reset form
    setFormData({
      firstName: "",
      lastName: "",
      linkedIn: "",
      email: "",
      companyName: "",
      companyWebsite: "",
      jobTitle: "",
      natureOfBusiness: "",
      yearsOfBusiness: "",
      sizeOfBusiness: "",
      country: "",
      phoneNumber: "",
      standType: "",
      announcements: "",
      sponsorship: "",
    });
  } catch (err) {
    console.error("ExhibitSponsor submit error", err);

    toast.error(
      err?.message ||
        "This email has already been used to submit an exhibit/sponsorship request."
    );
  }
};


  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Breadcrumb
        title="Be Seen. Be Remembered. Be the Brand That Feeds the Future"
        subtitle="Exhibit or Sponsor at Food Security SummitX 2026 – Dubai"
        bgImage="assets/images/apply/Exhibit.jpg"
      />
      <section className="py-8">
        <div className="container">
          {/* Top row: two boxes side-by-side */}
          <div className="row g-4 mb-5" style={{ marginTop: "60px" }}>
            <div className="col-lg-6">
              <div className="bg-white rounded p-4 box-shadow h-100">
                <h3 className="mb-4">
                  Where Feeding the Future Meets Building the Business
                </h3>
                <p className="mb-0">
                  <strong>15 or 16 Sep 2026 | Dubai, UAE</strong>
                </p>
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
                      <b>Showcase your brand </b>before 750+ industry leaders, investors, and government stakeholders.

                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      <b>Connect directly </b>with buyers and partners in AgriTech, water & irrigation, sustainable farming, food processing, and logistics.

                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      <b>Gain tailored exposure </b> through exhibition zones, branding placements, and networking activations that match your goals.

                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      <b>Position your business </b>as a key player driving innovation and sustainability across global food systems.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      <b>Turn participation into measurable ROI </b> — from new partnerships to investor opportunities and media visibility.

                    </span>
                  </li>
                </ul>

                <div className="mt-4 pt-3 border-top">
                  <p className="mb-0">
                    {" "}
                    This form connects you directly with our{" "}
                    <strong>Commercial & Sponsorship Team.
</strong>
                    Together, we’ll craft a package aligned with your objectives — ensuring every square meter, logo, and conversation delivers value that lasts beyond the event.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form section */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <form
                className="bg-white rounded p-4 box-shadow"
                onSubmit={handleSubmit}
              >
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
                      name="linkedIn"
                      value={formData.linkedIn}
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

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Job Title</label>
                    <input
                      className="form-control"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Nature of Business</label>
                    <input
                      className="form-control"
                      name="natureOfBusiness"
                      value={formData.natureOfBusiness}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Years of business</label>
                    <div className="d-flex gap-3 align-items-center mt-2 flex-wrap">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="yearsOfBusiness"
                          value="0-2"
                          id="years0-2"
                          checked={formData.yearsOfBusiness === "0-2"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="years0-2">
                          0-2
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="yearsOfBusiness"
                          value="3-5"
                          id="years3-5"
                          checked={formData.yearsOfBusiness === "3-5"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="years3-5">
                          3-5
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="yearsOfBusiness"
                          value="6-10"
                          id="years6-10"
                          checked={formData.yearsOfBusiness === "6-10"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="years6-10">
                          6-10
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="yearsOfBusiness"
                          value="10+"
                          id="years10+"
                          checked={formData.yearsOfBusiness === "10+"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="years10+">
                          10+
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Size of Business</label>
                    <div className="d-flex gap-3 align-items-center mt-2 flex-wrap">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sizeOfBusiness"
                          value="1-10"
                          id="size1-10"
                          checked={formData.sizeOfBusiness === "1-10"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="size1-10">
                          1-10
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sizeOfBusiness"
                          value="11-50"
                          id="size11-50"
                          checked={formData.sizeOfBusiness === "11-50"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="size11-50">
                          11-50
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sizeOfBusiness"
                          value="50-200"
                          id="size50-200"
                          checked={formData.sizeOfBusiness === "50-200"}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="size50-200"
                        >
                          50-200
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sizeOfBusiness"
                          value="200+"
                          id="size200+"
                          checked={formData.sizeOfBusiness === "200+"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="size200+">
                          200+
                        </label>
                      </div>
                    </div>
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

                <div className="mb-4">
                  <label className="form-label">Stand Type</label>
                  <div className="d-flex gap-4 align-items-center mt-2 flex-wrap">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="standType"
                        value="small"
                        id="standSmall"
                        checked={formData.standType === "small"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="standSmall">
                        Small Space
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="standType"
                        value="medium"
                        id="standMedium"
                        checked={formData.standType === "medium"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="standMedium">
                        Medium Space
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="standType"
                        value="large"
                        id="standLarge"
                        checked={formData.standType === "large"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="standLarge">
                        Large Space
                      </label>
                    </div>
                  </div>
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
                      Are you interested in sponsorship opportunities?
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

export default ExhibitSponsor;
