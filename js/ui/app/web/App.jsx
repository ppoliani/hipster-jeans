import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { compose } from 'folktale/core/lambda';
import Logged from './Auth/Logged';
import Login from './Auth/Login';

class App extends Component {
  componentDidMount() {
    this.props.startSearch({});
  }

  render() {
    return <div>Hi</div>
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    loadData: () => {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
