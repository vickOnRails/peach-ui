const radius = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "32px",
  xl: "64px",
  // FIXME: Change to a relative value for rounded as soon as possible
  circled: "100px",
  squared: "0",
  rounded: "4px",
};

export type RadiusProps = typeof radius;
export default radius;
