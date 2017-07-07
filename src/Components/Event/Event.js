import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

//Import Component

import Header from "../Header/Header";

class Events extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

     <div>
          <Header/>
          <h1>Test</h1>
    </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//      <div><h1>Test</h1></div>
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   <div><h1>Test</h1></div>
//   }
// }
//
// export default connect(mapStateToProps,mapDispatchToProps)(Events);
export default Events;
