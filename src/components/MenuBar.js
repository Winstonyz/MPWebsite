import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'shards-react';
import DropDown from '../components/Dropdown';
import AboutDropDown from '../components/AboutDropDown';
import UpdateDropDown from '../components/UpdateDropDown';

class MenuBar extends React.Component {
  render() {
    return (
      <Navbar type="dark" theme="danger" expand="md" fixed="top">
        <NavbarBrand href="/">MP Marci Ien</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink active href="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <AboutDropDown />
          </NavItem>
          <NavItem>
            <UpdateDropDown />
          </NavItem>
          <NavItem>
            <DropDown />
          </NavItem>
          <NavItem>
            <NavLink active href="/contact">
              Contact Us
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default MenuBar;
