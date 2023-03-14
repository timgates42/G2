import { G2Spec } from '../../../src';

export function bulletCustomActual(): G2Spec {
  return {
    type: 'bullet',
    coordinate: { transform: [{ type: 'transpose' }] },
    data: {
      value: {
        title: '满意度',
        actual: [
          { title: '一季度实际值', value: 24 },
          { title: '二季度实际值', value: 32 },
        ],
        target: [{ title: '目标值', value: 80 }],
        range: [
          { title: '差', value: 30 },
          { title: '良', value: 60 },
          { title: '优', value: 100 },
        ],
      },
    },
  };
}
