import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { colours } from './constants';

class StackedAreaChart extends Component {
  renderAreas(keys) {
    return keys.map((key, i) => {
      return <Bar key={key} type='monotone' dataKey={key} stackId={i} stroke={colours[i]} fill={colours[i]} />
    });
  }

  render() {
    const { data, keys } = this.props;

    return (
      <ResponsiveContainer width="100%" height={400}>
       	<BarChart data={data.toJS()} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          {this.renderAreas(keys)}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default StackedAreaChart;
