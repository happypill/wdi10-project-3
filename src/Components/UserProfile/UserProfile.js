import React, {Component} from 'react';
import { connect } from 'react-redux';

import './UesrProfile.css';

export class UserProfile extends Component {
  render() {
    return (<div>MyComponent</div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);