import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Auth from "../utils/auth";

// Route guard for admin-only access
export function AdminRoute({ children }) {
  if (!Auth.loggedIn() || !Auth.isAdmin()) {
    return <Navigate to="/login" />;
  }
  return children;
}

// Admin dashboard page
export default function Admin({ addMenuItem }) {
  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category) return;
    addMenuItem(category, {
      name,
      description,
      price: parseFloat(price).toFixed(2),
    });
    setCategory("");
    setName("");
    setDescription("");
    setPrice("");
    setShowForm(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Restaurant Admin Dashboard</h1>
      <p>Welcome, Admin! Use the tools below to manage your restaurant website.</p>
      <div style={{ marginTop: "2rem" }}>
        <h2>Website Content</h2>
        <button style={{ marginLeft: "1rem" }}>Edit Events</button>
        <button style={{ marginLeft: "1rem" }}>Edit Gallery</button>
        <button style={{ marginLeft: "1rem" }}>Edit Contact Page</button>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <Link to="/signup">
          <button style={{ marginLeft: "1rem" }}>Add Employee Account</button>
        </Link>
      </div>
      {/* Only one Add Menu Item button and form */}
    <button style={{ marginLeft: "1rem" }} onClick={() => setShowForm(true)}>
  Add Menu Item
</button>
      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: "1em" }}>
          <div>
            <label>
              Category:
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select category</option>
                <option value="appetizers">Appetizer</option>
                <option value="entrees">Entree</option>
                <option value="drinks">Drink</option>
                <option value="desserts">Dessert</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={!category}
              />
            </label>
          </div>
          <div>
            <label>
              Description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                disabled={!category}
              />
            </label>
          </div>
          <div>
            <label>
              Price:
              <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                disabled={!category}
              />
            </label>
          </div>
          <button type="submit" disabled={!category}>Save</button>
          <button type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}