// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <header className={`navbar ${dark ? "dark" : ""}`}>
      <h1>My Admin Panel</h1>
      <div className="nav-actions">
        <button>🔔</button>
        <button onClick={() => setDark(!dark)}>
          {dark ? "🌙" : "☀️"}
        </button>
        <div className="profile">👤 Niraj</div>
      </div>
    </header>
  );
}
