import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { compose } from 'folktale/core/lambda';

class App extends Component {
  componentDidMount() {
    this.props.loadSalesData();
  }

  render() {s
    return <div>Hi</div>
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    loadSalesData: () => dispatch(getSalesHistory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
