import { G2Spec } from '../../../src';

export function progressRingCustom(): G2Spec {
  return {
    type: 'progress',
    graphType: 'arc',
    data: {
      value: {
        percent: 0.7,
      },
    },
    style: {
      textContent: (current, target) => {
        return `得分：${current}\n占比：${(current / target) * 100}%`;
      },
      textFontSize: 26,

      outerRadius: 26,
      outerShadowColor: 'color',
      outerShadowBlur: 10,
      outerShadowOffsetX: -1,
      outerShadowOffsetY: -1,
    },

    scale: {
      outerColor: {
        range: ['rgba(250, 57, 57, 1)'],
      },
    },

    // animate: {
    //   outerArcEnter: { type: 'waveIn', duration: 1000 },
    // }
  };
}
