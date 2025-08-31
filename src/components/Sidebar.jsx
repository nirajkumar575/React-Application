// src/components/Sidebar.jsx
import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "⏪" : "⏩"}
      </button>
      <h2>{isOpen ? "Dashboard" : "DB"}</h2>
      <ul>
        <li>🏠 {isOpen && "Overview"}</li>
        <li>📊 {isOpen && "Reports"}</li>
        <li>⚙️ {isOpen && "Settings"}</li>
      </ul>
    </aside>
  );
}
