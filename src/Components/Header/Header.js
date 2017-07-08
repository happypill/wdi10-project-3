import React, { Component } from 'react';

import './Header.css';


class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="col-sm-offset-5 col-sm-2 homebutton">
          <button type="button" className="btn btn-default btn-lg" href="/">BRACE</button>
        </div>
      </div>
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
export default Header;
