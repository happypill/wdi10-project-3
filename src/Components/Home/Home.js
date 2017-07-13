import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Col ,Row,Grid} from 'react-bootstrap';


//Import Child Compoonents


import EventMain from '../Events/EventMain'
import SideBar from '../Sidebar/Sidebar'
import SearchBar from '../Search/Search'
import Header from '../Header/header'

import './Home.css';


export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUser: this.props.user.id
    };
  }

  render() {
      const user = this.props.activeUser;
      if (!user ) {
        return <h1>Welcome to Brace</h1>;
      }

    return (
      <div className="main">
        <Header />
          <br/>
          <br/>
          <br/>
          <h1 className="welcometitle">Welcome to <b>Brace</b>, {user.name ? user.name || user.username || 'member'} </h1>
          <br/>
          <SearchBar/>
            <Grid>
              <Row>
              <hr/>
                <p>THIS IS AN EVENT PAGE </p>
              </Row>
              <Row>
              <EventMain />
              </Row>
            </Grid>

        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      activeUser: state.activeUser,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // add more
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
