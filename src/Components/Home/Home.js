import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

//Import Child Compoonents
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import EventList from '../EventList/EventList'

import './Home.css';


export  class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
         
      <div className="row container-fluid">


        <Header/>

        <div className= "col-sm-12 eventListContainer">
            <EventList/>
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
    // add more
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
