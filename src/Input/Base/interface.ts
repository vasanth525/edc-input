//input
export interface IborderStyle {
  none: "none",
  bottom: "bottom",
  all: "all"
}

export interface IInput {
  width?: string,
  height?: string,
  borderType?: IborderStyle,
  value?: string | number
}