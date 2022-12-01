import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'shards-react';
import { Link } from 'react-router-dom';

export default class DropDown extends React.Component {
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
        <DropdownToggle theme="danger">Services and Resources</DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag={Link} to="/services">
            Government Services
          </DropdownItem>
          <DropdownItem href="https://www.canada.ca/en/government/grants-funding.html">
            Federal Grants & Fundings
          </DropdownItem>
          <DropdownItem href="https://www.canada.ca/en/employment-social-development/services/funding/canada-summer-jobs.html">
            Canada Summer Jobs
          </DropdownItem>
          <DropdownItem href="https://slp2022ple.infolib.ca/overview/">
            Summer Leadership Program
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
