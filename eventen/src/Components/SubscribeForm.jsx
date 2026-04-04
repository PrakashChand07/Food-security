import React, { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email is required.");
      return;
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    try {
      const apiBase = process.env.REACT_APP_API_URL || "";
      const res = await fetch(`${apiBase}/api/forms/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "subscribe_footer" }),
      });

      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      setMessage("🎉 You’ve successfully subscribed!");
      setEmail("");
    } catch (err) {
      console.error("Subscribe error:", err);
      setMessage("❌ Failed to subscribe. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row gy-3 align-items-center">
        <div className="col-lg-8 col-md-8">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <small className="text-danger">{error}</small>}
        </div>
        <div className="col-lg-4 col-md-4">
          <button type="submit" className="btn btn-primary w-100">
            SUBSCRIBE
          </button>
        </div>
      </div>
      {message && <p className="mt-2 text-success fw-bold">{message}</p>}
    </form>
  );
};

export default SubscribeForm;
