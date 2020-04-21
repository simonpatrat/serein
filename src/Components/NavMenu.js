import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Input,
  Label,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Icon from "./Icon";

const NavMenu = ({ onClickSidebarToggleButton }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar
      color="light-paper-darken"
      light
      expand="md"
      className="fixed-top"
      id="main-navbar"
    >
      <div className="col-md-2">
        <Button onClick={onClickSidebarToggleButton} color="lib">
          <span className="sr-only">Toggle sidebar mini</span>
          <Icon iconName="bars" />
        </Button>
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

NavMenu.propTypes = {
  onClickSidebarToggleButton: PropTypes.func,
};

export default NavMenu;
