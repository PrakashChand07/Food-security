import React, { useState } from "react";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const phoneRegex = /^[0-9]{10,15}$/; // Adjust as needed

    // Example: Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    // Send to backend
    (async () => {
      try {
        const apiBase = process.env.REACT_APP_API_URL || "";
        const res = await fetch(`${apiBase}/api/forms/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error(`Server ${res.status}`);

        setStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } catch (err) {
        console.error('Contact submit error', err);
        setStatus("Something went wrong. Please try again.");
      }
    })();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="mb-3"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-3"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="phone-no">
        <input
          type="tel"
          name="phone"
          placeholder="Phone No."
          className="mb-3"
          value={formData.phone}
        onChange={handleChange}
        pattern="[0-9]{10,15}"
        title="Please enter a valid phone number (10–15 digits)"
        required
        />
      </div>
      <div className="subject">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="mb-3"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="message">
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          className="mb-3"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn">
        Send Message <i className="fa fa-long-arrow-right ms-3"></i>
      </button>

      {/* Status message */}
      {status && (
        <div className="mt-3 alert alert-info" role="alert">
          {status}
        </div>
      )}
    </form>
  );
};

export default Contactform
