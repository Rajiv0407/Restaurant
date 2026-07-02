import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🍴 Restaurant</h2>

      <NavLink to="/">Dashboard</NavLink>

      <NavLink to="/products">Products</NavLink>

      <NavLink to="/orders">Orders</NavLink>

      <NavLink to="/customers">Customers</NavLink>

      <NavLink to="/categories">Categories</NavLink>

      <NavLink to="/settings">Settings</NavLink>
    </div>
  );
}

export default Sidebar;