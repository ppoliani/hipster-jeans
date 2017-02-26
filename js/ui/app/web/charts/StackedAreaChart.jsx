import React, { Component } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { colours } from './constants';

class StackedAreaChart extends Component {
  renderAreas(keys) {
    return keys.map((key, i) => {
      return <Area key={key} type='monotone' dataKey={key} stackId={i} stroke={colours[i]} fill={colours[i]} />
    });
  }

  render() {
    const { data, keys } = this.props;

    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data.toJS()} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          {this.renderAreas(keys)}
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default StackedAreaChart;
