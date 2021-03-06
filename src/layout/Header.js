//TODO: set NavbarBrand to go to home page and export Header - DONE:

import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="info" light>
      <NavbarBrand tag={Link} to="/" className="text-white">
        SAMPARK
      </NavbarBrand>
      <NavbarText className="text-white float-right">
        Your Contact app
      </NavbarText>
    </Navbar>
  );
};

export default Header;
