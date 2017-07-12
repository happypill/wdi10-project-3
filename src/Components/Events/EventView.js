import React, {Component,PropTypes} from 'react';

import { getEvent } from '../EventDetails/EventDetails';


export class EventView extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   completed: this.props.todo.completed
    // }

  }


  render() {
    return (
      <div className="eventview"
            onClick={this.onClick}><a href='/event/{event.id}'>{this.props.event.name}event view test{this.props.event.id}</a></div>);
  }

}

export default EventView;
