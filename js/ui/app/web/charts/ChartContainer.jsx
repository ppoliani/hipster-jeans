import React, { Component } from 'react';
import { identity, compose } from 'folktale/core/lambda';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import transformToChartData from './transformer';
import  StackedAreaChart from './StackedAreaChart';
import ChartType from './ChartType';

class ChartContainer extends Component {
  renderLoadingIndicator() {
    const style = {
      container: {
        position: 'relative',
      },
      refresh: {
        display: 'inline-block',
        position: 'relative',
      },
    };

    return (
      <div style={style.container}>
        <RefreshIndicator
          size={50}
          left={70}
          top={0}
          loadingColor="#FF9800"
          status="loading"
          style={style.refresh} />
        </div>
    );
  }
  renderChart() {
    const { sales, transform, type, keys } = this.props;

    return this.props.sales.cata({
      Empty: this.renderLoadingIndicator,
      Loading: this.renderLoadingIndicator,
      Failure: identity,
      Success: sales => {
        const chartData = transformToChartData(transform(sales));

        return this.props.type.cata({
          StackedArea: () => <StackedAreaChart data={chartData} keys={keys}/>
        });
      }
    });
  }

  render() {
    const { title, subtitle } = this.props;

    return (
      <Card>
        <CardHeader
          title={title}
          subtitle={subtitle} />
          <CardMedia>
            {this.renderChart()}
          </CardMedia>
      </Card>
    );
  }
}

export default ChartContainer;
