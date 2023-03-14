import { deepMix } from '@antv/util';
import { subObject } from '../utils/helper';
import { CompositionComponent as CC } from '../runtime';
import { BulletMark } from '../spec';
import { maybeAnimation } from '../utils/mark';

export type BulletOptions = Omit<BulletMark, 'type'>;

function dataTransform(data) {
  const { title: xTitle = '', actual = [], target = [], range = [] } = data;

  const dataMap = (datum, defaultKey: string) =>
    datum.map((d, i) => {
      if (typeof d === 'object') {
        const { title, value } = d;
        return {
          x: xTitle,
          y: i >= 1 ? value - datum[i - 1].value : value,
          color: title ?? defaultKey,
        };
      } else {
        return {
          x: xTitle,
          y: i >= 1 ? d - datum[i - 1] : d,
          color: defaultKey,
        };
      }
    });

  return {
    actualData: dataMap(actual, '实际值'),
    targetData: dataMap(target, '目标值'),
    rangeData: dataMap(range, '总计值'),
  };
}

export const Bullet: CC<BulletOptions> = (options) => {
  const PUBLIC_OPTIONS = {
    encode: {
      x: 'x',
      y: 'y',
      color: 'color',
    },
  };
  const DEFAULT_RANGE_OPTIONS = {
    type: 'interval',
    transform: [{ type: 'stackY' }],
    encode: {
      size: 25,
    },
    scale: {
      color: {
        range: ['#FFBCB8', '#FFE0B0', '#BFEEC8'],
        independent: true,
      },
    },
    axis: {
      y: false,
      x: {
        title: '',
        tick: null,
        labelFontWeight: 600,
      },
    },
    style: {
      fillOpacity: 0.5,
    },
  };
  const DEFAULT_ACTUAL_OPTIONS = {
    type: 'interval',
    transform: [{ type: 'stackY' }],
    scale: {
      color: {
        range: ['#5B8FF9', '#61DDAA'],
        independent: true,
      },
    },
    encode: {
      size: 15,
    },
  };
  const DEFAULT_TARGET_OPTIONS = {
    type: 'point',
    encode: {
      size: 5,
    },
    scale: {
      color: {
        range: '#39a3f4',
        independent: true,
      },
    },
    style: {
      lineWidth: 2,
    },
  };
  return (viewOptions) => {
    const { coordinate = {} } = viewOptions;
    const {
      data = [],
      encode = {},
      scale = {},
      style = {},
      animate = {},
      ...rest
    } = options;

    const { rangeData, actualData, targetData } = dataTransform(data);
    const isTranspose = coordinate?.transform?.some(
      (tran) => tran.type === 'transpose',
    );
    return [
      deepMix({}, PUBLIC_OPTIONS, DEFAULT_RANGE_OPTIONS, {
        data: rangeData,
        encode: subObject(encode, 'range'),
        scale: subObject(scale, 'range'),
        style: subObject(style, 'range'),
        animate: maybeAnimation(animate, 'range'),
        ...rest,
      }),
      deepMix({}, PUBLIC_OPTIONS, DEFAULT_ACTUAL_OPTIONS, {
        data: actualData,
        encode: subObject(encode, 'actual'),
        scale: subObject(scale, 'actual'),
        style: subObject(style, 'actual'),
        animate: maybeAnimation(animate, 'actual'),
      }),
      deepMix({}, PUBLIC_OPTIONS, DEFAULT_TARGET_OPTIONS, {
        data: targetData,
        encode: {
          shape: isTranspose ? 'line' : 'hyphen',
          ...subObject(encode, 'target'),
        },
        scale: subObject(scale, 'target'),
        style: subObject(style, 'target'),
        animate: maybeAnimation(animate, 'target'),
      }),
    ];
  };
};

Bullet.props = {};
