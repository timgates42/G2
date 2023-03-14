import { G2Spec } from '../../../src';

export function bulletFacet(): G2Spec {
  return {
    type: 'facetRect',
    data: [
      {
        x: '1',
      },
      {
        x: '2',
      },
    ],
    encode: {
      x: 'x',
    },
    axis: false,
    legend: false,
    children: [
      {
        type: 'bullet',
        data: {
          value: {
            title: '满意度',
            actual: [60],
            target: [80],
            range: [100],
          },
        },
      },
      {
        type: 'bullet',
        data: {
          value: {
            title: '满意度',
            actual: [60],
            target: [80],
            range: [100],
          },
        },
      },
    ],
  };
}
