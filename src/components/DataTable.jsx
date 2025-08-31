// src/components/DataTable.jsx
import React from "react";
import "./DataTable.css";

export default function DataTable() {
  const users = [
    { id: 1, name: "Niraj Kumar", email: "niraj.kumar575@gmail.com", role: "Admin" },
    { id: 2, name: "Manish Chaurasia", email: "manish.chaurasia@gmail.com", role: "User" },
    { id: 3, name: "Sneha Rani", email: "sneha.rani143@gmail.com", role: "Manager" },
  ];

  return (
    <div className="data-table">
      <h2>Users List</h2>
      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
