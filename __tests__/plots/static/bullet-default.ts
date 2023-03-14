import { G2Spec } from '../../../src';

export function bulletDefault(): G2Spec {
  return {
    type: 'bullet',
    data: {
      value: {
        title: '满意度',
        actual: [60],
        target: [80],
        range: [100],
      },
    },
  };
}
