import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Col ,Row,Grid} from 'react-bootstrap';

//Import Child Compoonents


import EventMain from '../Events/EventMain'
import SideBar from '../Sidebar/Sidebar'
import SearchBar from '../Search/Search'
import Header from '../Header/header'

import './Home.css';


export  class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Header />
          <br/>
          <br/>
          <br/>
          <SearchBar/>
            <Grid>
              <Row>
               <div className="col-lg-2 col-md-3 col-sm-5  ">
                <span>
                  <h3>fdfd</h3>
                  <h4>fdfdfd</h4>
                  <div className="event">
                    <h5>Event </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <hr className="event-footer-line"/>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <button className="btn btn-success ">
                        Join
                      </button>
                    </div>
                  </div>
                </span>
              </div>
                <div className="col-lg-3 col-md-3 col-sm-5 col-lg- ">
                <span>
                  <h3>fdfd</h3>
                  <h4>fdfdfd</h4>
                  <div className="event">
                    <h5>Event </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <hr className="event-footer-line"/>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <button className="btn btn-success ">
                        Join
                      </button>
                    </div>
                  </div>
                </span>
              </div>
               <div className="col-lg-3 col-md-3 col-sm-5 col-lg-push-1 col-md-push-1 ">
                <span>
                  <h3>fdfd</h3>
                  <h4>fdfdfd</h4>
                  <div className="event">
                    <h5>Event </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <hr className="event-footer-line"/>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <button className="btn btn-success ">
                        Join
                      </button>
                    </div>
                  </div>
                </span>
              </div>
               <div className="col-lg-3 col-md-3 col-sm-5 col-lg-push-1 col-md-push-1 ">
                <span>
                  <h3>fdfd</h3>
                  <h4>fdfdfd</h4>
                  <div className="event">
                    <h5>Event </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <hr className="event-footer-line"/>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <button className="btn btn-success ">
                        Join
                      </button>
                    </div>
                  </div>
                </span>
              </div>
               <div className="col-lg-3 col-md-3 col-sm-5 col-lg-push-1 col-md-push-1 ">
                <span>
                  <h3>fdfd</h3>
                  <h4>fdfdfd</h4>
                  <div className="event">
                    <h5>Event </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <hr className="event-footer-line"/>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <button className="btn btn-success ">
                        Join
                      </button>
                    </div>
                  </div>
                </span>
              </div>
               <div className="col-lg-3 col-md-3 col-sm-5 col-lg-push-1 col-md-push-1 ">
                <span>
                  <h3>fdfd</h3>
                  <h4>fdfdfd</h4>
                  <div className="event">
                    <h5>Event </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <hr className="event-footer-line"/>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <button className="btn btn-success ">
                        Join
                      </button>
                    </div>
                  </div>
                </span>
              </div>
               <div className="col-lg-3 col-md-3 col-sm-5 col-lg-push-1 col-md-push-1 ">
                <span>
                  <h3>fdfd</h3>
                  <h4>fdfdfd</h4>
                  <div className="event">
                    <h5>Event </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <hr className="event-footer-line"/>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <button className="btn btn-success ">
                        Join
                      </button>
                    </div>
                  </div>
                </span>
              </div> <div className="col-lg-3 col-md-3 col-sm-5 col-lg-push-1 col-md-push-1 ">
                <span>
                  <h3>fdfd</h3>
                  <h4>fdfdfd</h4>
                  <div className="event">
                    <h5>Event </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <hr className="event-footer-line"/>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <button className="btn btn-success ">
                        Join
                      </button>
                    </div>
                  </div>
                </span>
              </div>
              </Row>
            </Grid>

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
