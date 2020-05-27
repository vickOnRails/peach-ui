import colors, { ColorsProps } from "./colors";
import breakpoints, { BreakpointsProps } from "./breakpoints";

type ThemeProps = {
  colors: ColorsProps;
  breakpoints: BreakpointsProps;
};

const theme: ThemeProps = {
  colors,
  breakpoints,
};

export default theme;
