import colors from "./colors";

const shadows = {
  disabled: "inset 0 0 4px rgba(0,0,0,0.2)",
  resting: "2px 2px 15px rgba(0,0,0,0.20)",
  focus: `0 0 0 0.2rem ${colors.blue[200]}`,
};

export type ShadowProps = typeof shadows;
export default shadows;
