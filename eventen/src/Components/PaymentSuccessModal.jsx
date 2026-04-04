import React from "react";

export default function PaymentSuccessModal({ show, onClose }) {
  if (!show) return null;

  return (
    <>
      {/* BACKDROP */}
      <div className="modal-backdrop fade show"></div>

      {/* MODAL */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content text-center p-4">

            <h2 className="text-success mb-3">Payment Successful 🎉</h2>
            <p>Your order has been confirmed.</p>

            <button
              className="btn btn-dark mt-3"
              onClick={onClose}
            >
              Back to Home
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
