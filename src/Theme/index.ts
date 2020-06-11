import colors, { ColorsProps } from "./colors";
import breakpoints, { BreakpointsProps } from "./breakpoints";
import typography, { Typography } from "./typography";
import variants, { VariantsProps } from "./variants";

type ThemeProps = {
  colors: ColorsProps;
  breakpoints: BreakpointsProps;
  typography: Typography;
  variants: VariantsProps;
};

const theme: ThemeProps = {
  colors,
  breakpoints,
  typography,
  variants,
};

export default theme;
