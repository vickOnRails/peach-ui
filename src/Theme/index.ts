import colors, { ColorsProps } from "./colors";
import breakpoints, { BreakpointsProps } from "./breakpoints";
import typography, { Typography } from "./typography";
import variants, { VariantsProps } from "./variants";
import spaces, { SpacesProps } from "./spaces";
import radius, { RadiusProps } from "./radius";
import shadows, { ShadowProps } from "./shadows";

type ThemeProps = {
  colors: ColorsProps;
  breakpoints: BreakpointsProps;
  typography: Typography;
  variants: VariantsProps;
  spaces: SpacesProps;
  radius: RadiusProps;
  shadows: ShadowProps;
};

const theme: ThemeProps = {
  colors,
  breakpoints,
  typography,
  variants,
  spaces,
  radius,
  shadows,
};

export default theme;
