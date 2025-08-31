// src/components/Activity.jsx
import React from "react";
import "./Activity.css";

export default function Activity() {
  return (
    <div className="activity">
      <h2>Recent Activity</h2>
      <ul>
        <li>✅ User John signed up</li>
        <li>🛒 New order placed</li>
        <li>⚠️ Server warning at 2:30 PM</li>
      </ul>
    </div>
  );
}
