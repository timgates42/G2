import { deepMix } from '@antv/util';
import { CompositionComponent as CC } from '../runtime';
import { ProgressMark } from '../spec';
import {
  capitalizeFirst,
  filterPrefixObject,
  subObject,
} from '../utils/helper';
import { dataNormalizeForProgress } from './utils';

export type ProgressOptions = Omit<ProgressMark, 'type'>;

const generateDataRelatedOption = (
  scale,
  transform,
  { value, defaultColor },
) => {
  const { color = {} } = scale || {};
  const { domain, range = [] } = color;
  const _domain = domain?.length ? domain : [value];
  const data = _domain.map((d, i) => ({
    y: i > 0 ? d - domain[i - 1] : d,
    color: range[i] ?? range[range.length - 1] ?? defaultColor,
  }));
  return {
    data,
    scale: {
      ...scale,
      color: {
        type: 'identity',
      },
    },
    transform:
      _domain.length > 1
        ? [...(transform || []), { type: 'stackY' }]
        : transform,
  };
};

export const Progress: CC<ProgressOptions> = (options) => {
  const DEFAULT_OPTIONS = {
    axis: {
      y: false,
    },
    legend: false,
    tooltip: false,
    encode: {
      y: 'y',
      color: 'color',
    },
  };

  const DEFAULT_BAR_OPTIONS = {
    coordinate: {
      transform: [
        {
          type: 'transpose',
        },
      ],
    },
    ...DEFAULT_OPTIONS,
  };

  const DEFAULT_ARC_OPTIONS = {
    coordinate: {
      type: 'radial',
      innerRadius: 0.9,
      outerRadius: 1,
    },
    ...DEFAULT_OPTIONS,
  };

  const DEFAULT_TEXT_OPTIONS = {
    type: 'text',
    style: {
      x: '50%',
      y: '50%',
      textAlign: 'center',
      textBaseline: 'middle',
      fontSize: 20,
      fontWeight: 800,
      fill: '#888',
    },
  };

  return () => {
    const { graphType = 'arc', data = {}, ...resOptions } = options;

    const markOptions = [];

    // prepare
    const { current, target } = dataNormalizeForProgress(data);

    const innerIntervalOption: ProgressOptions = {};
    const outerIntervalOption: ProgressOptions = {};
    const textOption: ProgressOptions = {};
    const commonOption = {};
    Object.keys(resOptions).forEach((key) => {
      const value = resOptions[key];
      if (typeof value === 'object') {
        innerIntervalOption[key] = { ...value, ...subObject(value, 'inner') };
        outerIntervalOption[key] = { ...value, ...subObject(value, 'outer') };
        textOption[key] = { ...value, ...subObject(value, 'text') };
      } else {
        commonOption[key] = value;
      }
    });

    const _assembleIntervalOption = (
      intervalOption,
      ds: { value: number; defaultColor: string },
    ) => {
      const intervalDefaultOption =
        graphType === 'arc' ? DEFAULT_ARC_OPTIONS : DEFAULT_BAR_OPTIONS;
      const { scale, transform } = intervalOption;
      return deepMix({}, intervalDefaultOption, {
        type: 'interval',
        ...intervalOption,
        ...generateDataRelatedOption(scale, transform, ds),
        ...commonOption,
      });
    };

    // add interval option.
    markOptions.push(
      _assembleIntervalOption(innerIntervalOption, {
        value: target,
        defaultColor: '#D0D0D0',
      }),
      _assembleIntervalOption(outerIntervalOption, {
        value: current,
        defaultColor: '#30BF78',
      }),
    );

    // add text option.
    if (graphType === 'arc') {
      const { style = {}, ...textResOptions } = textOption;
      markOptions.push(
        deepMix({}, DEFAULT_TEXT_OPTIONS, {
          style: {
            text: style.content?.(current, target) || current.toString(),
            ...style,
          },
          ...textResOptions,
        }),
      );
    }

    return markOptions;
  };
};

Progress.props = {};
