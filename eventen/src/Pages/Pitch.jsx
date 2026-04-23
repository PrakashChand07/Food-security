import React, { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import toast, { Toaster } from "react-hot-toast";

const StartupPitch = () => {
  const [formData, setFormData] = useState({
    startupName: "",
    website: "",
    country: "",
    yearFounded: "",
    stage: "",
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    focusAreas: [],
    otherFocus: "",
    description: "",
    problem: "",
    uniqueness: "",
    funding: "",
    amountRaised: "",
    seeking: "",
    accuracyConfirmed: false,
    contactConsent: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      focusAreas: checked
        ? [...prev.focusAreas, value]
        : prev.focusAreas.filter((v) => v !== value),
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.accuracyConfirmed || !formData.contactConsent) {
      toast.error("Please confirm both consent checkboxes");
      return;
    }

    if (formData.focusAreas.length === 0) {
      toast.error("Please select at least one focus area");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/forms/pitch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          accuracyConfirmed: formData.accuracyConfirmed.toString(),
          contactConsent: formData.contactConsent.toString(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Startup Pitch application submitted successfully!");
        // Reset form
        setFormData({
          startupName: "",
          website: "",
          country: "",
          yearFounded: "",
          stage: "",
          fullName: "",
          jobTitle: "",
          email: "",
          phone: "",
          focusAreas: [],
          otherFocus: "",
          description: "",
          problem: "",
          uniqueness: "",
          funding: "",
          amountRaised: "",
          seeking: "",
          accuracyConfirmed: false,
          contactConsent: false,
        });
      } else {
        toast.error(data.message || "Failed to submit application");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Toaster position="top-right" />

      {/* ===== BREADCRUMB (SAME COMPONENT) ===== */}
      <Breadcrumb
        title="Pitch the Future. Inspire Investment."
        subtitle="Startup Pitch Ceremony | Food Security SummitX 2026 – Dubai"
        bgImage="assets/images/apply/Pitch.jpg"
      />

      <section className="py-8">
        <div className="container">

          {/* ===== TOP CONTENT (SAME STRUCTURE) ===== */}
          <div className="row g-4 mb-5" style={{ marginTop: "60px" }}>
            <div className="col-lg-6">
              <div className="bg-white rounded p-4 box-shadow h-100">
                <h3 className="mb-4">
                  Where Feeding the Future Meets Building the Business
                </h3>
                <p className="mb-3">
                  Take the spotlight and showcase your innovation to global
                  investors, accelerators, and agri-industry leaders.
                </p>
                <p className="mb-0">
                  <strong>15 & 16 Sep 2026 | Dubai, UAE</strong>
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
                      Present your startup before global investors, VCs, and
                      innovation funds.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      Access collaborators and expansion partners across 50+
                      markets.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      Gain visibility through SummitX media and investor
                      networks.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      Receive feedback and mentoring from industry leaders.
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2">•</span>
                    <span>
                      Compete for funding, partnerships, and global exposure.
                    </span>
                  </li>
                </ul>

                <div className="mt-4 pt-3 border-top">
                  <p className="mb-0">
                    This form connects you directly with our{" "}
                    <strong>Startup & Investment Partnerships Team</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== FORM (SAME LOOK & GRID) ===== */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <form
                className="bg-white rounded p-4 box-shadow"
                onSubmit={handleSubmit}
              >
                <h4 className="mb-4">Startup Pitch Application Form</h4>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Startup Name</label>
                    <input className="form-control" name="startupName" value={formData.startupName} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Website / Pitch Deck</label>
                    <input className="form-control" name="website" value={formData.website} onChange={handleChange} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Country of Registration</label>
                    <input className="form-control" name="country" value={formData.country} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Year Founded</label>
                    <input className="form-control" name="yearFounded" value={formData.yearFounded} onChange={handleChange} required />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Stage of Startup</label>
                  <select className="form-select" name="stage" value={formData.stage} onChange={handleChange} required>
                    <option value="">Select...</option>
                    <option>Idea</option>
                    <option>MVP</option>
                    <option>Early Revenue</option>
                    <option>Growth</option>
                  </select>
                </div>

                <h5 className="mt-4">Founder / Representative Details</h5>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Full Name</label>
                    <input className="form-control" name="fullName" value={formData.fullName} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Job Title</label>
                    <input className="form-control" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label">Phone Number</label>
                    <input className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>

                <h5 className="mt-4 mb-3">Startup Focus Area</h5>
                <p className="text-muted small">Select one or more</p>
                <div className="mb-4">
                  {[
                    "AgriTech & Digital Agriculture",
                    "Water & Irrigation",
                    "BioAg, Seeds & Crop Protection",
                    "Food Processing & Supply Chain",
                    "Sustainability & Climate Solutions",
                    "Livestock, Aquaculture & Protein Systems"
                  ].map((area) => (
                    <div className="form-check" key={area}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={area}
                        checked={formData.focusAreas.includes(area)}
                        onChange={handleCheckbox}
                        id={area.replace(/\s+/g, '-')}
                      />
                      <label className="form-check-label" htmlFor={area.replace(/\s+/g, '-')}>
                        {area}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <label className="form-label">If other (Kindly Specify in no more than 10 words)</label>
                  <input
                    className="form-control"
                    name="otherFocus"
                    value={formData.otherFocus}
                    onChange={handleChange}
                    maxLength="100"
                  />
                </div>

                <h5 className="mt-4 mb-3">About Your Startup</h5>

                <div className="mb-4">
                  <label className="form-label">Brief description of your solution (max 150 words)</label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    maxLength="500"
                    required
                  />
                  <small className="text-muted">{formData.description.length}/500 characters</small>
                </div>

                <div className="mb-4">
                  <label className="form-label">What problem are you solving?</label>
                  <textarea
                    className="form-control"
                    name="problem"
                    rows="3"
                    value={formData.problem}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">What makes your solution unique or scalable?</label>
                  <textarea
                    className="form-control"
                    name="uniqueness"
                    rows="3"
                    value={formData.uniqueness}
                    onChange={handleChange}
                    required
                  />
                </div>

                <h5 className="mt-4 mb-3">Funding & Growth</h5>

                <div className="mb-4">
                  <label className="form-label">Have you raised funding before?</label>
                  <select
                    className="form-select"
                    name="funding"
                    value={formData.funding}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                {formData.funding === "Yes" && (
                  <div className="mb-4">
                    <label className="form-label">If yes, amount raised (optional)</label>
                    <input
                      className="form-control"
                      name="amountRaised"
                      value={formData.amountRaised}
                      onChange={handleChange}
                      placeholder="e.g., $500K"
                    />
                  </div>
                )}

                <div className="mb-4">
                  <label className="form-label">What are you seeking from this pitch?</label>
                  <select
                    className="form-select"
                    name="seeking"
                    value={formData.seeking}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="Investment">Investment</option>
                    <option value="Partnerships">Partnerships</option>
                    <option value="Visibility">Visibility</option>
                    <option value="Market Access">Market Access</option>
                    <option value="Multiple">Multiple</option>
                  </select>
                </div>

                <h5 className="mt-4 mb-3">Consent</h5>

                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="accuracyConfirmed"
                      checked={formData.accuracyConfirmed}
                      onChange={handleCheckboxChange}
                      id="accuracyConfirmed"
                      required
                    />
                    <label className="form-check-label" htmlFor="accuracyConfirmed">
                      I confirm that the information shared is accurate
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="contactConsent"
                      checked={formData.contactConsent}
                      onChange={handleCheckboxChange}
                      id="contactConsent"
                      required
                    />
                    <label className="form-check-label" htmlFor="contactConsent">
                      I agree to be contacted by the Food Security SummitX team
                    </label>
                  </div>
                </div>

                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-theme-action btn-lg py-3">
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

export default StartupPitch;
