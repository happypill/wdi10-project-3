import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';



import './Footer.css';


export class Footer extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)
  }

  render() {

    return (
        <div className="row footer">
        <div className="col-sm-4">
          <span id="about">About us</span>
          <p>
           THIS IS A FOOTER
          </p>
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
    // nothing to see here...
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
