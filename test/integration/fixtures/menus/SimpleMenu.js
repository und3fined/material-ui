// @flow weak
import React, { Component } from 'react';
import { Menu, MenuItem } from 'src/Menu';

const options = [
  'Menu Item 1',
  'Menu Item 2',
  'Menu Item 3',
];

export default class SimpleMenu extends Component {
  state = {
    anchorEl: undefined,
    open: false,
    selectedIndex: undefined,
  };

  handleMenuItemClick = (event, index) => this.setState({ selectedIndex: index, open: false });
  handleRequestClose = () => this.setState({ open: false });

  render() {
    return (
      <div data-mui-test="SimpleMenu">
        <Menu
          id="simple-menu"
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          {...this.props}
        >
          {options.map((n, index) => {
            return (
              <MenuItem
                key={index}
                selected={index === this.state.selectedIndex}
                onClick={(event) => this.handleMenuItemClick(event, index)}
              >
                {n}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    );
  }
}

