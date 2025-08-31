// src/components/ChartSection.jsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./ChartSection.css";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 600 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 700 },
  { name: "May", sales: 900 },
];

export default function ChartSection() {
  return (
    <div className="chart">
      <h2>Sales Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
