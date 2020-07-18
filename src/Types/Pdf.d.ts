export interface ICompleteLineBuilder {
  startX: number;
  endX: number;
  startY: number;
  endY: number;
  size?: number;
  color?: string;
}

export interface IVerticalLineBuilder {
  start: number;
  end?: number;
  size?: number;
  color?: string;
  endX?: number;
  startY?: number;
  endY?: number;
}

export interface IHorizontalLineBuilder extends IVerticalLineBuilder {
  startX?: number;
}
