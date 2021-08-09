import React from "react";

const NavItem = ({ icon }) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {icon}
      </a>
    </li>
  );
};

export default NavItem;
