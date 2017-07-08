import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {fetchEvents} from '../Actions/search';
import {selectEvent} from '../Actions/search';

export class Search extends React.Component {
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
      <div className="row header">
      <div id="search-bar">
        <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search for events"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
         <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary search-btn">Search</button>
         </span>
       </form>
      </div>
     </div>
        
    );
  }
}

const mapStateToProps = (state) => {
    return {
        events: state.events,
        activeEvent: state.activeEvent
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchEvents,selectEvent},dispatch)
  
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);


