import React from "react";
import NavItem from "./navItem";
import { ReactComponent as CaretIcon } from "../icons/caret.svg";

import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon="😅" />
        <NavItem icon="😍" />
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
