import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'shards-react';
import { Link } from 'react-router-dom';

export default class AboutDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }

  toggle() {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  }

  render() {
    return (
      <Dropdown open={this.state.open} toggle={this.toggle}>
        <DropdownToggle theme="danger">About</DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag={Link} to="/bio">
            Biography
          </DropdownItem>
          <DropdownItem href="https://liberal.ca/our-platform/">
            Policy Platform
          </DropdownItem>
          <DropdownItem href="https://www.toronto.ca/city-government/data-research-maps/neighbourhoods-communities/ward-profiles/ward-13-toronto-centre/">
            Riding Information
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
