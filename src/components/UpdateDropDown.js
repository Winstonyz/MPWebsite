import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'shards-react';

export default class UpdateDropDown extends React.Component {
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
        <DropdownToggle theme="danger">Updates</DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="https://www.ourcommons.ca/members/en/marci-ien(107097)#work">
            Parliamentary Updates: Vote Record, Committee and Other Works
          </DropdownItem>
          <DropdownItem href="https://women-gender-equality.canada.ca/en.html">
            Ministerial Updates: Women and Gender Equality Canada
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
