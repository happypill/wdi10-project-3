import React, { Component } from 'react';
import {Navbar, NavItem, Nav } from 'react-bootstrap';
import {Link } from 'react-router-dom';
// import { stopStreaming } from '../redux/actions';
import { connect } from 'react-redux';
import bUtils from 'react-bootstrap/lib/utils/bootstrapUtils';
import axios from 'axios';

import './header.css';

class Header extends Component {

  logout = () =>{
    axios.get('/auth/logout')
      .then( (response) => {
        console.log("AJAX: Logged out @ '/auth/logout'");
        window.location.href = "/";
      })
      .catch((error)=> {
        console.log(error);
      });


  }


  render() {

    return (
      <Navbar bsClass="navbar" fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>BRACE</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          <NavItem eventKey={1}><Link to='/'>Home</Link></NavItem>
          <NavItem eventKey={2}><Link to='/Login'>Login</Link></NavItem>
          <NavItem eventKey={3}><Link to='/EventForm'>Create An Event</Link></NavItem>
            <NavItem type="button" className="btn btn-danger pull-right logout"
                    onClick={ this.logout }>Logout</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default connect()(Header);
