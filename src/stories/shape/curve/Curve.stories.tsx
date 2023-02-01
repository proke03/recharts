import React from 'react';
import { scaleOrdinal } from 'd3-scale';
// eslint-disable-next-line import/no-extraneous-dependencies
import { schemeCategory10 } from 'd3-scale-chromatic';
import { curveCardinalClosed, curveCatmullRomOpen } from 'd3-shape';
import { Curve, Layer, Surface } from '../../..';

export default {
  title: 'Recharts/Shape/Curve',
  component: Curve,
};

export const Simple = {
  render: (args: any) => {
    const { points, scale, ticks } = args;
    return (
      <Surface width={600} height={800}>
        <Layer>
          <text x={10} y={20}>
            curveCardinalClosed
          </text>
          {ticks.map((entry: any, index: number) => (
            <Layer key={`curve-${index}`}>
              <Curve stroke={`${scale(entry)}`} fill="none" type={curveCardinalClosed.tension(entry)} points={points} />
              <text x={200} y={40 + index * 30} fill={`${scale(entry)}`}>
                {`curveCardinalClosed.tension(${entry})`}
              </text>
            </Layer>
          ))}

          {points.map((entry: any, index: number) => (
            <circle cx={entry.x} cy={entry.y} r={4} key={`circle-${index}`} />
          ))}
        </Layer>

        <Layer transform="translate(0, 200)">
          <text x={10} y={20}>
            curveCatmullRomOpen
          </text>
          {ticks.map((entry: any, index: number) => (
            <Layer key={`curve-${index}`}>
              <Curve stroke={`${scale(entry)}`} fill="none" type={curveCatmullRomOpen.alpha(entry)} points={points} />
              <text x={200} y={40 + index * 30} fill={`${scale(entry)}`}>
                {`curveCatmullRomOpen.alpha(${entry})`}
              </text>
            </Layer>
          ))}

          {points.map((entry: any, index: number) => (
            <circle cx={entry.x} cy={entry.y} r={4} key={`circle-${index}`} />
          ))}
        </Layer>
      </Surface>
    );
  },
  args: {
    points: [
      { x: 10, y: 40 },
      { x: 50, y: 150 },
      { x: 90, y: 60 },
      { x: 130, y: 180 },
      { x: 170, y: 50 },
    ],
    scale: scaleOrdinal(schemeCategory10),
    ticks: [0, 0.25, 0.5, 0.75, 1],
  },
};
