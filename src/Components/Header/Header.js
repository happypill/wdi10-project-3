import React, { Component } from 'react';
import {connect} from 'react-redux';

import './Header.css';
import Search from '../Search/Search';

export class Header extends Component {
  constructor(props){
    super(props)
     this.state = {
      term: '',
      events: [],
      activeEvent: {}
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    
    this.props.fetchEvents(this.state.term);
    this.props.selectEvent(null)
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
