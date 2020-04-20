import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Input,
  Label,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const NavMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="light-paper-darken" light expand="md" className="fixed-top">
      <div className="col-md-2">
        <NavbarBrand to="/" exact className="mr-3" tag={RRNavLink}>
          Serein
        </NavbarBrand>
      </div>
      <div className="navbar-search-wrapper">
        <Label for="main-search" className="sr-only">
          Search
        </Label>
        <Input
          type="search"
          name="search"
          id="main-search"
          placeholder="Search for..."
        />
      </div>
      <NavbarToggler onClick={toggleNavbar} className="ml-2" />
      <Collapse isOpen={!collapsed} navbar className="ml-2">
        <Nav navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Account
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem
                tag={RRNavLink}
                exact
                to="/login"
                activeClassName="active"
              >
                Login
              </DropdownItem>
              <DropdownItem
                tag={RRNavLink}
                exact
                to="/register"
                activeClassName="active"
              >
                Register
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavMenu;
