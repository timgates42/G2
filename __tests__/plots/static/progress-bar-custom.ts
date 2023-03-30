import { G2Spec } from '../../../src';

export function progressBarCustom(): G2Spec {
  return {
    type: 'progress',
    graphType: 'bar',
    data: {
      value: {
        target: 400,
        current: 300,
      },
    },
    height: 100,
    scale: {
      outerColor: {
        domain: [100, 250, 300],
        range: ['#F4664A', '#FAAD14', 'green'],
      },
    },
    // TODO: 未生效
    label: {
      text: 'y',
      style: {
        fill: 'red',
      },
    },
  };
}
