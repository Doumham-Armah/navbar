import React from "react";
import NavItem from "./navItem";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon="😅" />
        <NavItem icon="😍" />
        <NavItem icon="😉" />
      </ul>
    </nav>
  );
};

export default Navbar;
