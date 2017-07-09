import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


import Footer from '../Footer/Footer';
import './Login.css';


export class Login extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)
    
  }

  render() {

    return (
      <div>
   

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
