// src/components/Cards.jsx
import React from "react";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards">
      <div className="card">👥 <h3>Users</h3> <p>120 Active</p></div>
      <div className="card">💰 <h3>Sales</h3> <p>$3,200</p></div>
      <div className="card">📈 <h3>Growth</h3> <p>+12%</p></div>
      <div className="card">🛒 <h3>Orders</h3> <p>89 Today</p></div>
    </div>
  );
}
