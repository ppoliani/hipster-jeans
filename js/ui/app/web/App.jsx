import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { compose, partialise } from 'folktale/core/lambda';
import Divider from 'material-ui/Divider';
import { getSalesHistory } from '../data/sales/salesActions';
import ChartContainer from './charts/ChartContainer';
import chartConfig from './charts/chartConfig';

class App extends Component {
  componentDidMount() {
    this.props.loadSalesData();
  }

  renderCharts() {
    return chartConfig.map((chart, i) =>
      <ChartContainer key={i} {...chart} sales={this.props.sales.get('list')}/>
    );
  }

  render() {
    return (
      <div>
        <AppBar title="The Hipster Jeans" />
        {this.renderCharts()}
      </div>
    );
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
