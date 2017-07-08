import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';




import './EventList.css';
import Event from '../Event/Event'



export  class EventList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
         
      <div className= "row" >
        <Event/>
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
    // add more
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
