import React, {PropTypes} from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import { Button, ButtonToolbar, Col ,Row,Grid} from 'react-bootstrap';
import { bindActionCreators } from 'redux';




export class Search extends Component {
 constructor(props) {
    super(props);

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
  
  }


  render() {
    return (
      <div id="search-bar">
      <form onSubmit="" className="input-group"onSubmit={(e) => this.onFormSubmit(e) }>
        <input
          placeholder="Search for events"
          className="form-control"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary search-btn">Search</button>
        </span>
      </form>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    activeEvent: state.activeEvent
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
