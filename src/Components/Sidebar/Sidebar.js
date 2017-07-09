import React, { Component, PropTypes } from 'react';
import { Button, ButtonToolbar, Col } from 'react-bootstrap';
import { push as Menu } from 'react-burger-menu'
import { connect } from 'react-redux';



export  class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  showSettings (event) {
    event.preventDefault();
    
  }

  



  render() {
    return (

         <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>

    );
  }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // add more
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
