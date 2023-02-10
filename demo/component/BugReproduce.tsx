import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

// eslint-disable-next-line import/no-default-export
export default class Demo extends Component {
  static displayName = 'PieDemo';

  testData = [
    {
      name: 'Hello',
      value: 20,
    },
    {
      name: 'World',
      value: 30,
    },
  ];

  render() {
    return (
      <BarChart data={this.testData} width={500} height={500}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" />
      </BarChart>
    );
  }
}
