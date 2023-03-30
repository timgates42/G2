import { G2Library } from '../runtime';
import {
  Cartesian,
  Polar,
  Helix,
  Transpose,
  Theta,
  Parallel,
  Fisheye,
  Radial,
  Radar,
} from '../coordinate';
import { Constant, Field, Transform, Column } from '../encode';
import {
  Cell,
  Interval,
  Rect,
  Line,
  Point as PointGeometry,
  Text as TextGeometry,
  Area as AreaGeometry,
  Image as ImageGeometry,
  Polygon as PolygonGeometry,
  Box as BoxGeometry,
  Vector as VectorGeometry,
  Link as LinkGeometry,
  LineX,
  LineY,
  Connector,
  Range,
  RangeX,
  RangeY,
  Sankey,
  Path,
  Treemap,
  Pack as PackGeometry,
  Shape,
  Boxplot,
  ForceGraph,
  Tree as TreeGeometry,
  WordCloud as WordCloudGeometry,
  Gauge,
  Progress,
} from '../mark';
import { Category10, Category20 } from '../palette';
import {
  Linear,
  Ordinal,
  Band,
  Identity,
  Point,
  Time,
  Log,
  Pow,
  Threshold,
  Quantile,
  Quantize,
  Sqrt,
  Sequential,
  Constant as ConstantScale,
} from '../scale';
import {
  Rect as RectShape,
  HollowRect,
  Line as LineShape,
  HV,
  VH,
  HVH,
  Smooth,
  Bowtie,
  Cross,
  Diamond,
  Hexagon,
  HollowBowtie,
  HollowDiamond,
  HollowHexagon,
  HollowPoint,
  HollowSquare,
  HollowTriangle,
  HollowTriangleDown,
  Hyphen,
  LinePoint,
  Plus,
  Point as PointShape,
  Square,
  Tick,
  Triangle,
  TriangleDown,
  Text,
  Badge,
  LineXY,
  Connector as ConnectorShape,
  Area,
  SmoothArea,
  HVHArea,
  VHArea,
  HVArea,
  SmoothEdge,
  VHVEdge,
  Arc,
  Image,
  Polygon,
  Ribbon,
  Box,
  Funnel,
  Pyramid,
  Vector,
  Link,
  Label,
  Path as PathShape,
  HollowPath,
  Shape as CustomShape,
} from '../shape';
import { Classic, ClassicDark, Academy } from '../theme';
import {
  AxisLinear,
  AxisArc,
  AxisX,
  AxisY,
  AxisRadar,
  LegendCategory,
  LegendContinuous,
  LegendContinuousBlock,
  LegendContinuousBlockSize,
  LegendContinuousSize,
  TitleComponent,
  SliderX,
  SliderY,
  ScrollbarX,
  ScrollbarY,
} from '../component';
import {
  ScaleInX,
  ScaleOutX,
  ScaleInY,
  ScaleOutY,
  WaveIn,
  FadeIn,
  FadeOut,
  Morphing,
  ZoomIn,
  ZoomOut,
  PathIn,
  GrowInX,
  GrowInY,
} from '../animation';
import {
  ElementHighlight,
  ElementHighlightByX,
  ElementHighlightByColor,
  ElementSelect,
  ElementSelectByX,
  ElementSelectByColor,
  ChartIndex,
  Fisheye as ChartFisheye,
  Tooltip,
  LegendFilter,
  LegendHighlight,
  BrushHighlight,
  BrushXHighlight,
  BrushYHighlight,
  BrushAxisHighlight,
  BrushFilter,
  BrushXFilter,
  BrushYFilter,
  SliderFilter,
  Poptip,
  Event,
} from '../interaction';
import {
  SpaceLayer,
  SpaceFlex,
  Mark,
  View,
  FacetRect,
  FacetCircle,
  RepeatMatrix,
  TimingKeyframe,
} from '../composition';
import {
  MaybeTitle,
  MaybeZeroX,
  MaybeZeroY1,
  MaybeStackY,
  MaybeSeries,
  MaybeZeroY,
  MaybeSize,
  MaybeKey,
  StackY,
  DodgeX,
  StackEnter,
  NormalizeY,
  Jitter,
  JitterX,
  SymmetryY,
  DiffY,
  Select,
  SelectX,
  SelectY,
  GroupX,
  Group,
  SortX,
  FlexX,
  MaybeTupleY,
  MaybeTupleX,
  MaybeIdentityY,
  MaybeIdentityX,
  MaybeZeroPadding,
  MaybeTuple,
  SortY,
  GroupY,
  GroupColor,
  SortColor,
  Pack,
  BinX,
  Bin,
  MaybeVisualPosition,
  MaybeFunctionAttribute,
  MaybeGradient,
  MaybeTooltip,
  Sample,
  Filter,
} from '../transform';
import {
  Fetch,
  SortBy,
  Filter as DataFilter,
  Map,
  Pick,
  Rename,
  Fold,
  Slice,
  Inline,
  Custom,
  Cluster,
  Tree,
  Sankey as SankeyTransform,
  Arc as ArcTransform,
  WordCloud,
  Join,
  Sort,
} from '../data';
import {
  OverlapDodgeY,
  OverflowHide,
  ContrastReverse,
  OverlapHide,
} from '../label-transform';
import { geoLibrary } from '../geo';

export function createLibrary(): G2Library {
  return {
    'data.fetch': Fetch,
    'data.inline': Inline,
    'data.sortBy': SortBy,
    'data.sort': Sort,
    'data.filter': DataFilter,
    'data.pick': Pick,
    'data.rename': Rename,
    'data.fold': Fold,
    'data.slice': Slice,
    'data.custom': Custom,
    'data.map': Map,
    'data.cluster': Cluster,
    'data.tree': Tree,
    'data.sankey': SankeyTransform,
    'data.arc': ArcTransform,
    'data.wordCloud': WordCloud,
    'data.join': Join,
    // 'transform.voronoi': Voronoi,
    'transform.maybeZeroY1': MaybeZeroY1,
    'transform.maybeZeroX': MaybeZeroX,
    'transform.maybeStackY': MaybeStackY,
    'transform.maybeTitle': MaybeTitle,
    'transform.maybeSeries': MaybeSeries,
    'transform.maybeZeroPadding': MaybeZeroPadding,
    'transform.stackY': StackY,
    'transform.binX': BinX,
    'transform.bin': Bin,
    'transform.dodgeX': DodgeX,
    'transform.jitter': Jitter,
    'transform.jitterX': JitterX,
    'transform.symmetryY': SymmetryY,
    'transform.diffY': DiffY,
    'transform.stackEnter': StackEnter,
    'transform.normalizeY': NormalizeY,
    'transform.select': Select,
    'transform.selectX': SelectX,
    'transform.selectY': SelectY,
    'transform.groupX': GroupX,
    'transform.groupY': GroupY,
    'transform.groupColor': GroupColor,
    'transform.group': Group,
    'transform.maybeSize': MaybeSize,
    'transform.maybeZeroY': MaybeZeroY,
    'transform.maybeKey': MaybeKey,
    'transform.sortX': SortX,
    'transform.sortY': SortY,
    'transform.sortColor': SortColor,
    'transform.flexX': FlexX,
    'transform.maybeTupleY': MaybeTupleY,
    'transform.maybeTupleX': MaybeTupleX,
    'transform.maybeIdentityY': MaybeIdentityY,
    'transform.maybeIdentityX': MaybeIdentityX,
    'transform.maybeTuple': MaybeTuple,
    'transform.maybeVisualPosition': MaybeVisualPosition,
    'transform.maybeFunctionAttribute': MaybeFunctionAttribute,
    'transform.maybeGradient': MaybeGradient,
    'transform.maybeTooltip': MaybeTooltip,
    'transform.pack': Pack,
    'transform.sample': Sample,
    'transform.filter': Filter,
    'coordinate.cartesian': Cartesian,
    'coordinate.polar': Polar,
    'coordinate.helix': Helix,
    'coordinate.transpose': Transpose,
    'coordinate.theta': Theta,
    'coordinate.parallel': Parallel,
    'coordinate.fisheye': Fisheye,
    'coordinate.radial': Radial,
    'coordinate.radar': Radar,
    'encode.constant': Constant,
    'encode.field': Field,
    'encode.transform': Transform,
    'encode.column': Column,
    'mark.interval': Interval,
    'mark.rect': Rect,
    'mark.line': Line,
    'mark.point': PointGeometry,
    'mark.text': TextGeometry,
    'mark.cell': Cell,
    'mark.area': AreaGeometry,
    'mark.link': LinkGeometry,
    'mark.image': ImageGeometry,
    'mark.polygon': PolygonGeometry,
    'mark.box': BoxGeometry,
    'mark.vector': VectorGeometry,
    'mark.lineX': LineX,
    'mark.lineY': LineY,
    'mark.connector': Connector,
    'mark.range': Range,
    'mark.rangeX': RangeX,
    'mark.rangeY': RangeY,
    'mark.sankey': Sankey,
    'mark.path': Path,
    'mark.treemap': Treemap,
    'mark.pack': PackGeometry,
    'mark.boxplot': Boxplot,
    'mark.shape': Shape,
    'mark.forceGraph': ForceGraph,
    'mark.gauge': Gauge,
    'mark.progress': Progress,
    'mark.tree': TreeGeometry,
    'mark.wordCloud': WordCloudGeometry,
    'palette.category10': Category10,
    'palette.category20': Category20,
    'scale.linear': Linear,
    'scale.ordinal': Ordinal,
    'scale.band': Band,
    'scale.identity': Identity,
    'scale.point': Point,
    'scale.time': Time,
    'scale.log': Log,
    'scale.pow': Pow,
    'scale.sqrt': Sqrt,
    'scale.threshold': Threshold,
    'scale.quantile': Quantile,
    'scale.quantize': Quantize,
    'scale.sequential': Sequential,
    'scale.constant': ConstantScale,
    'shape.interval.rect': RectShape,
    'shape.interval.hollow': HollowRect,
    'shape.interval.funnel': Funnel,
    'shape.interval.pyramid': Pyramid,
    'shape.rect.rect': RectShape,
    'shape.rect.hollow': HollowRect,
    'shape.cell.cell': RectShape,
    'shape.cell.hollow': HollowRect,
    'shape.line.line': LineShape,
    'shape.line.hv': HV,
    'shape.line.vh': VH,
    'shape.line.hvh': HVH,
    'shape.line.smooth': Smooth,
    'shape.point.bowtie': Bowtie,
    'shape.point.cross': Cross,
    'shape.point.diamond': Diamond,
    'shape.point.hexagon': Hexagon,
    'shape.point.hollowBowtie': HollowBowtie,
    'shape.point.hollowDiamond': HollowDiamond,
    'shape.point.hollowHexagon': HollowHexagon,
    'shape.point.hollow': HollowPoint,
    'shape.point.hollowSquare': HollowSquare,
    'shape.point.hollowTriangle': HollowTriangle,
    'shape.point.hollowTriangleDown': HollowTriangleDown,
    'shape.point.hyphen': Hyphen,
    'shape.point.line': LinePoint,
    'shape.point.plus': Plus,
    'shape.point.point': PointShape,
    'shape.point.square': Square,
    'shape.point.tick': Tick,
    'shape.point.triangle': Triangle,
    'shape.point.triangleDown': TriangleDown,
    'shape.text.text': Text,
    'shape.area.area': Area,
    'shape.area.smooth': SmoothArea,
    'shape.area.hvh': HVHArea,
    'shape.area.vh': VHArea,
    'shape.area.hv': HVArea,
    'shape.link.smooth': SmoothEdge,
    'shape.link.vhv': VHVEdge,
    'shape.link.arc': Arc,
    'shape.link.link': Link,
    'shape.image.image': Image,
    'shape.polygon.polygon': Polygon,
    'shape.polygon.ribbon': Ribbon,
    'shape.box.box': Box,
    'shape.vector.vector': Vector,
    'shape.label.label': Label,
    'shape.text.badge': Badge,
    'shape.lineX.line': LineXY,
    'shape.lineY.line': LineXY,
    'shape.shape.shape': CustomShape,
    'shape.connector.connector': ConnectorShape,
    'shape.range.range': RectShape,
    'shape.rangeX.range': RectShape,
    'shape.rangeY.range': RectShape,
    'shape.path.path': PathShape,
    'shape.path.hollow': HollowPath,
    'theme.classic': Classic,
    'theme.classicDark': ClassicDark,
    'theme.academy': Academy,
    'component.axisX': AxisX,
    'component.axisY': AxisY,
    'component.axisRadar': AxisRadar,
    'component.axisLinear': AxisLinear,
    'component.axisArc': AxisArc,
    'component.legendCategory': LegendCategory,
    'component.legendContinuous': LegendContinuous,
    'component.legendContinuousBlock': LegendContinuousBlock,
    'component.legendContinuousBlockSize': LegendContinuousBlockSize,
    'component.legendContinuousSize': LegendContinuousSize,
    'component.title': TitleComponent,
    'component.sliderX': SliderX,
    'component.sliderY': SliderY,
    'component.scrollbarX': ScrollbarX,
    'component.scrollbarY': ScrollbarY,
    'animation.scaleInX': ScaleInX,
    'animation.scaleOutX': ScaleOutX,
    'animation.scaleInY': ScaleInY,
    'animation.scaleOutY': ScaleOutY,
    'animation.waveIn': WaveIn,
    'animation.fadeIn': FadeIn,
    'animation.fadeOut': FadeOut,
    'animation.zoomIn': ZoomIn,
    'animation.zoomOut': ZoomOut,
    'animation.pathIn': PathIn,
    'animation.morphing': Morphing,
    'animation.growInX': GrowInX,
    'animation.growInY': GrowInY,
    'interaction.elementHighlight': ElementHighlight,
    'interaction.elementHighlightByX': ElementHighlightByX,
    'interaction.elementHighlightByColor': ElementHighlightByColor,
    'interaction.elementSelect': ElementSelect,
    'interaction.elementSelectByX': ElementSelectByX,
    'interaction.elementSelectByColor': ElementSelectByColor,
    'interaction.fisheye': ChartFisheye,
    'interaction.chartIndex': ChartIndex,
    'interaction.tooltip': Tooltip,
    'interaction.legendFilter': LegendFilter,
    'interaction.legendHighlight': LegendHighlight,
    'interaction.brushHighlight': BrushHighlight,
    'interaction.brushXHighlight': BrushXHighlight,
    'interaction.brushYHighlight': BrushYHighlight,
    'interaction.brushAxisHighlight': BrushAxisHighlight,
    'interaction.brushFilter': BrushFilter,
    'interaction.brushXFilter': BrushXFilter,
    'interaction.brushYFilter': BrushYFilter,
    'interaction.sliderFilter': SliderFilter,
    'interaction.poptip': Poptip,
    'interaction.event': Event,
    'composition.spaceLayer': SpaceLayer,
    'composition.spaceFlex': SpaceFlex,
    'composition.mark': Mark,
    'composition.view': View,
    'composition.facetRect': FacetRect,
    'composition.repeatMatrix': RepeatMatrix,
    'composition.facetCircle': FacetCircle,
    'composition.timingKeyframe': TimingKeyframe,
    'labelTransform.overlapHide': OverlapHide,
    'labelTransform.overlapDodgeY': OverlapDodgeY,
    'labelTransform.overflowHide': OverflowHide,
    'labelTransform.contrastReverse': ContrastReverse,
    ...geoLibrary,
  };
}
