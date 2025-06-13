import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";

// Route guard for admin-only access
export function AdminRoute({ children }) {
  if (!Auth.loggedIn() || !Auth.isAdmin()) {
    return <Navigate to="/login" />;
  }
  return children;
}

// Admin dashboard page
export default function Admin() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Restaurant Admin Dashboard</h1>
      <p>Welcome, Admin! Use the tools below to manage your restaurant website.</p>
      <div style={{ marginTop: "2rem" }}>
        <h2>Website Content</h2>
        <button>Edit Menu</button>
        <button style={{ marginLeft: "1rem" }}>Edit Events</button>
        <button style={{ marginLeft: "1rem" }}>Edit Gallery</button>
        <button style={{ marginLeft: "1rem" }}>Edit Contact Page</button>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <h2>Business Settings</h2>
        <button>Update Hours</button>
        <button style={{ marginLeft: "1rem" }}>Manage Reservations</button>
      </div>
    </div>
  );
}