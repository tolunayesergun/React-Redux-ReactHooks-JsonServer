import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import CartSummary from '../cart/CartSummary';
import { Link } from 'react-router-dom';

export default class Navi extends Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/" className="text-muted">Stork App</Link>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/tolunayesergun/react-redux-w1" target="_blank">GitHub</NavLink>
              </NavItem>
            </Nav>
            <CartSummary />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}