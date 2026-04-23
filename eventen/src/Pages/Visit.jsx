// Visit.jsx
import React, { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import countriesData from "../data/country.json";
import toast, { Toaster } from "react-hot-toast";

const Visit = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    designation: "",
    companyWebsite: "",
    countryCode: "",
    phoneNumber: "",
    hearAboutUs: "",
    announcements: "",
    sponsorship: "",
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
      const res = await fetch(`${apiBase}/api/forms/visit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw data; // 👈 backend message yahin se aayega
      }

      toast.success(
        "Thank you for registering! Our team will contact you soon."
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        designation: "",
        companyWebsite: "",
        countryCode: "",
        phoneNumber: "",
        hearAboutUs: "",
        announcements: "",
        sponsorship: "",
      });
    } catch (err) {
      console.error("Visit submit error", err);
      toast.error(err?.message || "This email is already registered.");
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Breadcrumb
        title="Experience the Future. Connect with the World."
        subtitle="Visit Food Security SummitX 2026 – Dubai"
        bgImage="assets/images/apply/speak.jpg"
      />

      <section className="py-8">
        <div className="container">
          {/* INTRO */}
          <div className="row g-4 mb-5" style={{ marginTop: "60px" }}>
            <div className="col-lg-6">
              <div className="bg-white rounded p-4 box-shadow h-100">
                <h3 className="mb-3">
                  Where Feeding the Future Meets Building the Business
                </h3>
                <p className="mb-0">
                  <strong>15 & 16 Sep 2026 | Dubai, UAE</strong>
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-white rounded p-4 box-shadow">
                <h3>Why Submit This Form?</h3>
                <p>
                  Your journey into the heart of global food innovation starts
                  here. This form connects you directly with our registration
                  team, giving you access to the full SummitX experience.
                </p>

                <ul className="list-unstyled">
                  <li>• Network with 750+ global attendees</li>
                  <li>• Explore 40+ exhibitors</li>
                  <li>• Attend panels, keynotes & fireside chats</li>
                  <li>• Engage with startups, institutions & innovators</li>
                  <li>• Discover collaboration & investment opportunities</li>
                  <li>• Become part of a global movement driving change</li>
                </ul>

                <div className="mt-4 pt-3 border-top">
                  <p className="mb-0">
                    <strong>
                      This form connects you directly with our Visitor Relations
                      & Registration Team.
                    </strong>{" "}
                    Once submitted, our team will share your access details,
                    visitor passes, and event updates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="row py-5">
            <div className="col-lg-10 mx-auto">
              <form
                className="bg-white rounded-4 p-5 shadow-sm border"
                onSubmit={handleSubmit}
              >
                <h4 className="mb-4 fw-semibold border-bottom pb-2">
                  Visitor Details
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
                    <label className="form-label">Official Email Address</label>
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
                    <label className="form-label">
                      How did you hear about us?
                    </label>
                    <select
                      className="form-select"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                    >
                      <option value="">Select from the list</option>
                      <option value="google">Google</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="social">Social Media</option>
                      <option value="email">Email</option>
                      <option value="direct">Direct Call</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-4">
                    <label className="form-label">
                      Do you plan on making any announcements?
                    </label>
                    <div className="d-flex gap-4 mt-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="announcements"
                          value="yes"
                          checked={formData.announcements === "yes"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label">Yes</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="announcements"
                          value="no"
                          checked={formData.announcements === "no"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label">No</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    Are you interested in exhibit/sponsorship opportunities?
                  </label>
                  <div className="d-flex gap-4 mt-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sponsorship"
                        value="yes"
                        checked={formData.sponsorship === "yes"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sponsorship"
                        value="no"
                        checked={formData.sponsorship === "no"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">No</label>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      required
                    />
                    <label className="form-check-label">
                      By signing up to attend this event, you agree to our terms
                      and conditions and privacy policy.
                    </label>
                  </div>
                </div>

                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg py-3 rounded-3"
                  >
                    Register as Visitor
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

export default Visit;
