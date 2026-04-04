import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import PaymentSuccessModal from "../Components/PaymentSuccessModal";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";
const RAZORPAY_KEY_ID = process.env.REACT_APP_RAZORPAY_KEY_ID;

// Load Razorpay SDK only once
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

function Cart() {
  const location = useLocation();
  const item = location.state || {
    title: "Full Access Pass Dubai",
    price: 1499,
    oldPrice: 1699,
    img: "/assets/images/tickets/pass.png",
  };

  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const amount = item.price * qty;

    try {
      // 1️⃣ Create order from backend
      const res = await fetch(`${API_BASE}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          qty,
          planTitle: item.title,
        }),
      });

      if (!res.ok) throw new Error("Failed to create order");

      const data = await res.json();
      if (!data.success) throw new Error("Failed to create order");

      const { order, localOrderId } = data;

      // 2️⃣ Load Razorpay SDK
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded || !window.Razorpay) {
        alert("Failed to load Razorpay SDK. Check internet");
        setLoading(false);
        return;
      }

      // 3️⃣ Razorpay options
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Event Ticket",
        description: item.title,
        image: "/logo.png",
        order_id: order.id,

        handler: async function (response) {
          try {
            // 4️⃣ Verify payment
            const verifyRes = await fetch(`${API_BASE}/api/payment/verify`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                localOrderId,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              setShowSuccessModal(true);
            } else {
              alert("Payment verification failed. Contact support.");
            }
          } catch (err) {
            console.error("Verification error:", err);
            alert("Verification failed. Try again.");
          }
        },

        prefill: {
          name: "Customer Name",
          email: "customer@gmail.com",
          contact: "9876543210",
        },

        theme: {
          color: "#000000",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert(err.message || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div>
      {/* PAGE TITLE */}
      <PageHelmet pageTitle="Your Cart" />

      {/* BREADCRUMB */}
      <Breadcrumb title="Your Cart" bgImage="assets/images/apply/Pitch.jpg" />

      {/* CART SECTION */}
      <section className="price bg-lightgrey py-5">
        <div className="container">
          <div className="row">
            {/* LEFT SIDE CART ITEMS */}
            <div className="col-lg-8">
              <h5 className="mb-4 fw-bold">PRODUCT</h5>

              <div className="d-flex border-bottom pb-4">
                {/* PRODUCT IMAGE */}
                {/* <img
                  src={item.img}
                  alt="product"
                  style={{ width: "120px", height: "120px", borderRadius: "6px" }}
                /> */}

                <div className="ms-4 w-100">
                  <h5 className="fw-bold">{item.title}</h5>

                  {/* OLD & NEW PRICE */}
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-decoration-line-through text-secondary">
                      ${item.oldPrice}
                    </span>
                    <span className="fw-bold fs-5 text-dark">
                      ${item.price}
                    </span>

                    <span className="badge bg-light text-dark border ms-2">
                      SAVE ${item.oldPrice - item.price}
                    </span>
                  </div>

                  {/* QUANTITY BUTTONS */}
                  <div className="d-flex align-items-center mt-3">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => qty > 1 && setQty(qty - 1)}
                    >
                      –
                    </button>

                    <span className="px-3">{qty}</span>

                    <button
                      className="btn btn-outline-dark"
                      onClick={() => setQty(qty + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* TOTAL PRICE SIDE */}
                <div className="text-end">
                  <h5 className="fw-bold">
                    ${(item.price * qty).toLocaleString()}
                  </h5>
                  <span className="badge bg-light text-dark border">
                    SAVE ${(item.oldPrice - item.price) * qty}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE SUMMARY */}
            <div className="col-lg-4">
              <h6 className="fw-bold mb-3">CART TOTALS</h6>

              <div className="border p-4 rounded">
                <p className="d-flex justify-content-between">
                  <span>Add coupons</span>
                  <span>⌄</span>
                </p>

                <hr />

                <div className="d-flex justify-content-between mt-3">
                  <span className="fw-bold fs-6">Estimated total</span>
                  <span className="fw-bold fs-4">
                    ${(item.price * qty).toLocaleString()}
                  </span>
                </div>

                <button
                  className="btn btn-dark w-100 mt-4"
                  onClick={handlePayment}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "PROCEED TO PAY"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PaymentSuccessModal
        show={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          window.location.href = "/";
        }}
      />
    </div>
  );
}

export default Cart;
