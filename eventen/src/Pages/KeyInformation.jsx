import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const KeyInformation = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Key Information</h1>

      {/* Sub menu */}
      <ul style={{ marginBottom: "30px" }}>
        <li>
          <NavLink to="about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="speakers">Speakers</NavLink>
        </li>
        <li>
          <NavLink to="agenda">Agenda</NavLink>
        </li>
      </ul>

      {/* 👇 YAHI SABSE IMPORTANT HAI */}
      <Outlet />
    </div>
  );
};

export default KeyInformation;
