import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🍴 Restaurant</h2>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/products">Products Management</NavLink>
      {/* <NavLink to="/orders">Orders Management</NavLink> */}
      <NavLink to="/customers">Customers Management</NavLink>
      {/* <NavLink to="/categories">Categories Management</NavLink>
      <NavLink to="/settings">Settings</NavLink> */}
    </div>   
  );
}

export default Sidebar;