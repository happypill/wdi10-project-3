import React, { Component } from 'react';
import {Navbar, NavItem, Nav } from 'react-bootstrap';
import {Link } from 'react-router-dom';
// import { stopStreaming } from '../redux/actions';
import { connect } from 'react-redux';
import bUtils from 'react-bootstrap/lib/utils/bootstrapUtils';
import './header.css';

class Header extends Component {

  render() {
    return (
      <Navbar bsClass="navbar" fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><Link to='/'>BRACE</Link></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          <NavItem eventKey={1} href="#"><Link to='/'>Home</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to='/Login'>Login</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to='/EventForm'>EventForm</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to='/EventDetail'>EventDetail</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default connect()(Header);
