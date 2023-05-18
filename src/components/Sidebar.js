import React from 'react';
import "./SidebarStyles.css"
function Sidebar() {
  return (
    <div className="sidebar-container">
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item">Home</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Services</li>
        <li className="menu-item">Contact</li>
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;