// Partners.jsx
import React, { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import countriesData from "../data/country.json";
import toast, { Toaster } from "react-hot-toast";


const Partners = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    companyName: "",
    companyWebsite: "",
    countryCode: "",
    phoneNumber: "",
    linkedIn: "",
    partnershipType: "",
    hearAboutUs: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const apiBase = process.env.REACT_APP_API_URL || "";

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      fullName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      designation: formData.designation,
      companyName: formData.companyName,
      companyWebsite: formData.companyWebsite,
      countryCode: formData.countryCode,
      phoneNumber: formData.phoneNumber,
      linkedIn: formData.linkedIn,
      partnershipType: formData.partnershipType,
      hearAboutUs: formData.hearAboutUs,
      submissionDate: new Date().toISOString(),
    };

    const res = await fetch(`${apiBase}/api/forms/partner`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw data; // 👈 backend message yahin se
    }

    toast.success(
      "Thank you for your partnership interest! Our team will contact you soon."
    );

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      designation: "",
      companyName: "",
      companyWebsite: "",
      countryCode: "",
      phoneNumber: "",
      linkedIn: "",
      partnershipType: "",
      hearAboutUs: "",
    });
  } catch (err) {
    console.error("Partnership submit error", err);
    toast.error(
      err?.message ||
        "This email has already been used to submit a partnership request."
    );
  } finally {
    setIsSubmitting(false);
  }
};


  // Get selected country details
  const selectedCountry = countriesData.countries.find(
    country => country.code === formData.countryCode
  );

  return (
    <div>
            <Toaster position="top-right" reverseOrder={false} />
      <Breadcrumb
        title="Partner With Purpose. Amplify the Movement."
        subtitle="Collaborate with Food Security SummitX 2026 – Dubai"
        bgImage="assets/images/apply/Partner.jpg"
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
                <p>By becoming a partner, you can:</p>
          
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-2">
                    <span className="me-2">•</span>
                    <span>
                      <b>Amplify your reach</b> by connecting with 750+ global leaders, innovators, and policymakers across 50+ countries.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <span className="me-2">•</span>
                    <span>
                      <b>Position your brand</b> as a credible voice championing food security, sustainability, and agri-innovation.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <span className="me-2">•</span>
                    <span>
                      <b>Gain visibility</b> across all SummitX digital, print, and on-ground branding channels.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <span className="me-2">•</span>
                    <span>
                      <b>Collaborate on content</b> through interviews, panel sessions, reports, and social storytelling.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <span className="me-2">•</span>
                    <span>
                      <b>Access high-value networking</b> with governments, corporates, investors, and impact organizations.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <span className="me-2">•</span>
                    <span>
                      <b>Shape industry perception</b> through joint communication campaigns and exclusive insights.
                    </span>
                  </li>
                </ul>

                <div className="mt-4 pt-3 border-top">
                  <p className="mb-0">
                    This form connects you directly with our{" "}
                    <strong>Partnerships & Communications Team.</strong>
                    Together, we'll explore how your platform can co-create value and become part of the movement that's redefining the future of food.
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
                    <label className="form-label">First Name *</label>
                    <input
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Last Name *</label>
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
                    <label className="form-label">Official Email Address *</label>
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
                    <label className="form-label">Designation *</label>
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
                    <label className="form-label">Company Name *</label>
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
                    >
                      <option value="">Select country code</option>
                      {countriesData.countries.map((country, index) => (
                        <option key={index} value={country.code}>
                          {country.flag} {country.name} ({country.code})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Phone Number *</label>
                    <div className="input-group">
                      {selectedCountry && (
                        <span className="input-group-text">
                          {selectedCountry.flag}
                        </span>
                      )}
                      <input
                        className="form-control"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">LinkedIn Profile</label>
                  <input
                    className="form-control"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/your-profile"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Type of Partnership: *</label>
                  <div className="d-flex gap-4 align-items-center mt-2 flex-wrap">
                    {["Media Partner", "Knowledge Partner", "Logo Partner", "Other"].map((type) => (
                      <div key={type} className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="partnershipType"
                          value={type.toLowerCase().replace(' ', '_')}
                          id={type.toLowerCase().replace(' ', '_')}
                          checked={formData.partnershipType === type.toLowerCase().replace(' ', '_')}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-check-label" htmlFor={type.toLowerCase().replace(' ', '_')}>
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">How did you hear about us? *</label>
                  <select
                    className="form-select"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select from the List</option>
                    <option value="google">Google</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="social_media">Social Media</option>
                    <option value="email">Email</option>
                    <option value="direct_call">Direct Call</option>
                    <option value="referral">Referral</option>
                    <option value="previous_event">Previous Event</option>
                  </select>
                </div>

                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-theme-action btn-lg py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      "Submit Partnership Request"
                    )}
                  </button>
                </div>
                
                <div className="mt-3 text-center">
                  <small className="text-muted">
                    * Required fields
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;