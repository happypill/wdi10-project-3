import React, {Component,PropTypes} from 'react';

import { getEvent } from '../EventDetails/EventDetails';

export class EventView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>{this.props.event.name}event view test{this.props.index}</div>);
  }
}

export default EventView;
