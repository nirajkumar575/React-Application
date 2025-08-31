// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import ChartSection from "../components/ChartSection";
import Activity from "../components/Activity";
import DataTable from "../components/DataTable";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-area">
        <Navbar />
        <Cards />
        <ChartSection />
        <Activity />
        <DataTable />
      </div>
    </div>
  );
}
