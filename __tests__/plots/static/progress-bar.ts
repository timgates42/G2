import { G2Spec } from '../../../src';

export function progressBar(): G2Spec {
  return {
    type: 'progress',
    graphType: 'bar',
    data: {
      value: {
        percent: 0.6,
      },
    },
    height: 100,
  };
}
