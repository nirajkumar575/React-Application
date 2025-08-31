import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Home Page</h1>
      <Link
        to="/dashboard"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          background: "#333",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none"
        }}
      >
        Go to Dashboard
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
