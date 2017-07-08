import React, { Component } from 'react';
import {connect} from 'react-redux';

import './Header.css';
import Search from '../Search/Search';

export class Header extends Component {
  constructor(props){
    super(props)
     this.state = {

    };

  }

 
  render() {
    return (
       <div><Search/></div>
    );
  }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
