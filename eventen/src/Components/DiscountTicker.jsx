import React from "react";

export default function DiscountTicker() {
  return (
    <div
      style={{
        backgroundColor: "#13812a",
        color: "white",
        whiteSpace: "nowrap",
        overflow: "hidden",
        position: "relative",
        fontWeight: "600",
        padding: "8px 0",
      }}
    >
      <div
        style={{
          display: "inline-block",
          animation: "scroll 10s linear infinite",
        }}
      >
        {Array(10)
          .fill("Begin the New Year with a special registration discount.")
          .map((text, i) => (
            <span key={i} style={{ marginRight: "40px" }}>
              {text} •
            </span>
          ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
}
