import React, { Component } from 'react';
import {connect} from 'react-redux';

import './Header.css';


export class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="row header">
        <div className="col-sm-2">
        </div>
        <div className="col-sm-8">
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Search" />
        </div>
        <div className="col-sm-1">
          <a href="#" id="signup">Signup</a>
        </div>
        <div className="col-sm-1">
          <a href="#">Login</a>
        </div>
      </div>

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
