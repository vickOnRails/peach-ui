import colors, { ColorsProps } from "./colors";
import breakpoints, { BreakpointsProps } from "./breakpoints";
import typography, { Typography } from "./typography";

type ThemeProps = {
  colors: ColorsProps;
  breakpoints: BreakpointsProps;
  typography: Typography;
};

const theme: ThemeProps = {
  colors,
  breakpoints,
  typography,
};

export default theme;
